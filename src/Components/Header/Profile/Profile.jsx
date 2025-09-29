import React, { useState, useEffect } from "react";
import styles from "./profile.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { IoMdContact } from "react-icons/io";
import * as nameslice from "../../../Redux/Slices/SignIn/signinSlice";
import * as profileSlice from "../../../Redux/Slices/Profile/profileSlice";
import { useTranslation } from "react-i18next";
import { Popover, Drawer } from "@mui/material";
import Content from "./ProfileContent/Content";
import * as headerSlice from "../../../Redux/Slices/Header/headerSclice";

export default function Profile() {
  const { anchorEl, isMobile } = useSelector((state) => state.profile);
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const open = Boolean(anchorEl);


  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        dispatch(profileSlice.handleClose());
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(profileSlice.setIsMobile(window.innerWidth < 1000));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={styles.profileContainer}
      onScroll={() => dispatch(profileSlice.handleClose())}
    >
      <button
        onClick={(e) => dispatch(profileSlice.handleclick(e.currentTarget))}
      >
        {isMobile ? "" : `Hi ${localStorage.getItem("FullName")}`}

        <IoMdContact className={styles.icon} />
      </button>
      {!isMobile && (
        <Popover
          anchorEl={anchorEl}
          open={open}
          onClose={() => dispatch(profileSlice.handleClose())}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          disableScrollLock
          disableAutoFocus={true}
          disableEnforceFocus={true}
        >
          <Content />
        </Popover>
      )}

      {isMobile && (
        <Drawer
          anchor="bottom"
          open={open}
          onClose={() => dispatch(profileSlice.handleClose())}
          PaperProps={{
            sx: {
              width: "100%",
              height: "calc(100dvh - 90px)",
              backgroundColor: "var(  --color-bg)",
            },
          }}
          BackdropProps={{
            sx: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Content />
        </Drawer>
      )}
    </div>
  );
}
