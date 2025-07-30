import React, { useState,useEffect } from "react";
import styles from "./profile.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { IoMdContact } from "react-icons/io";
import { Popover, Box } from "@mui/material";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { VscColorMode } from "react-icons/vsc";
import Switch from "@mui/material/Switch";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import * as nameslice from "../../../Redux/Slices/SignIn/signinSlice";
import * as profileSlice from "../../../Redux/Slices/Profile/profileSlice";
import Information from "../../../SharedComponents/ChangeInformation/Information";
import * as verificationActions from "../../../Redux/Slices/SignIn/verificationSlice";

export default function Profile() {
  const { values } = useSelector((state) => state.signin);
  const { anchorEl, changename, changenumber, confirm } = useSelector(
    (state) => state.profile
  );

  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const [name, setname] = useState(values.FullName);
  const [number, setnumber] = useState(values.Phonenumber);

  const label = { inputProps: { "aria-label": "Switch demo" } };

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

  const savename = () => {
    dispatch(nameslice.setFullName(name));
    dispatch(profileSlice.ChangeName(false));
  };

  const nextstep = () => {
    dispatch(profileSlice.changenum(true));
    dispatch(profileSlice.isConfirm(true));
  };

  const confirmcode = () => {
    dispatch(nameslice.setPhoneNumber(number));
    dispatch(profileSlice.isConfirm(false));
    dispatch(verificationActions.resetCode());
    dispatch(profileSlice.changenum(false));
  };
  return (
    <div
      className={styles.profileContainer}
      onScroll={() => dispatch(profileSlice.handleClose())}
    >
      <button
        onClick={(e) => dispatch(profileSlice.handleclick(e.currentTarget))}
      >
        Hi {values.FullName} <IoMdContact className={styles.icon} />
      </button>
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
        <Box sx={{ width: 371, height: "auto" }} className={styles.profileBox}>
          <div className={styles.profilewrapper}>
            <div className={styles.profileHeader}>
              <h1>
                Hi {values.FullName} <span>Profile</span>
              </h1>
            </div>
            <div className={styles.profileContent}>
              {changename ? (
                <div style={{ height: "62px" }}>
                  <Information
                    name={"Full Name"}
                    state={name}
                    set={setname}
                    savefunc={savename}
                    cansel={() => dispatch(profileSlice.ChangeName(false))}
                    btntext={"Save"}
                    comfirmphone={false}
                  />
                </div>
              ) : (
                <div className={styles.name}>
                  <div className={styles.fullName}>
                    <p>Full Name</p>
                    <p> {values.FullName}</p>
                  </div>
                  <p>
                    <HiOutlineArrowSmRight
                      className={styles.icon}
                      onClick={() => dispatch(profileSlice.ChangeName(true))}
                    />
                  </p>
                </div>
              )}

              {changenumber ? (
                <div style={{ height: "auto" }}>
                  <Information
                    name={"Number"}
                    state={number}
                    set={setnumber}
                    savefunc={nextstep}
                    cansel={() => dispatch(profileSlice.changenum(false))}
                    btntext={"Next"}
                    comfirmphone={confirm}
                    confirm={confirmcode}
                  />
                </div>
              ) : (
                <div className={styles.informationConteiner}>
                  <div className={styles.number}>
                    <p>Number</p>
                    <p> {values.Phonenumber}</p>
                  </div>
                  <p>
                    <HiOutlineArrowSmRight
                      className={styles.icon}
                      onClick={() => dispatch(profileSlice.changenum(true))}
                    />
                  </p>
                </div>
              )}
            </div>
            <div className={styles.history}>
              <NavLink
                to="/history"
                onClick={() => dispatch(profileSlice.handleClose())}
              >
                <MdOutlineHistory className={styles.icon} />
                History
              </NavLink>
            </div>

            <div className={styles.notificationsandDarkMode}>
              <div className={styles.notificationswrapper}>
                <p>
                  <IoIosNotifications className={styles.icon} /> Off
                  Notifications{" "}
                </p>
                <Switch
                  {...label}
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "rgba(212, 163, 115, 1)",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "rgba(212, 163, 115, 1)",
                    },
                  }}
                />
              </div>

              <div className={styles.darkmode}>
                <p>
                  <VscColorMode className={styles.icon} /> Dark Mode
                </p>
                <Switch
                  {...label}
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "rgba(212, 163, 115, 1)",
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "rgba(212, 163, 115, 1)",
                    },
                  }}
                />
              </div>
            </div>
            <div className={styles.log}>
              <p>
                Logout <LuLogOut className={styles.icon} />
              </p>
            </div>
          </div>
        </Box>
      </Popover>
    </div>
  );
}
