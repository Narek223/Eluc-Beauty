import React, { useState } from "react";
import styles from "./profile.module.scss";
import { useSelector } from "react-redux";
import { IoMdContact } from "react-icons/io";
import { Popover, Box } from "@mui/material";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { VscColorMode } from "react-icons/vsc";
import Switch from "@mui/material/Switch";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function Profile() {
  const { values } = useSelector((state) => state.signin);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleclick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={styles.profileContainer}>
      <button onClick={handleclick}>
        Hi {values.FullName} <IoMdContact className={styles.icon} />
      </button>
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        disableScrollLock
        disableAutoFocus={true}
        disableEnforceFocus={true}
      >
        <Box sx={{ width: 371, height: 571 }} className={styles.profileBox}>
          <div className={styles.profilewrapper}>
            <div className={styles.profileHeader}>
              <h1>
                Hi {values.FullName} <span>Profile</span>
              </h1>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.name}>
                <div className={styles.fullName}>
                  <p>Full Name</p>
                  <p> {values.FullName}</p>
                </div>
                <p>
                  <HiOutlineArrowSmRight className={styles.icon} />
                </p>
              </div>

              <div className={styles.informationConteiner}>
                <div className={styles.number}>
                  <p>Number</p>
                  <p> {values.Phonenumber}</p>
                </div>
                <p>
                  <HiOutlineArrowSmRight className={styles.icon} />
                </p>
              </div>
            </div>
            <div className={styles.history}>
              <NavLink to="/history" onClick={handleClose}>
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
              <p>Logout <LuLogOut className={styles.icon} /></p>
            </div>
          </div>
        </Box>
      </Popover>
    </div>
  );
}
