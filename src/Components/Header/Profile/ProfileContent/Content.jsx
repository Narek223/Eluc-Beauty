import React, { useState, useEffect } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { VscColorMode } from "react-icons/vsc";
import Switch from "@mui/material/Switch";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Information from "../../../../SharedComponents/ChangeInformation/Information";
import { useTranslation } from "react-i18next";
import * as profileSlice from "../../../../Redux/Slices/Profile/profileSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "../profile.module.scss";
import * as nameslice from "../../../../Redux/Slices/SignIn/signinSlice";
import { Box } from "@mui/material";
import * as verificationActions from "../../../../Redux/Slices/SignIn/verificationSlice";

export default function Content() {
  const { values } = useSelector((state) => state.signin);
  const [name, setname] = useState(values.FullName);
  const [number, setnumber] = useState(values.Phonenumber);


  const { changename, changenumber, confirm, isMobile,mode } = useSelector(
    (state) => state.profile
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();




  useEffect(() => {
    const savedName = localStorage.getItem("FullName");
    const savedNumber = localStorage.getItem("Phonenumber");
    if (savedName) {
      setname(savedName);
      dispatch(nameslice.setFullName(savedName));
    }
    if (savedNumber) {
      setnumber(savedNumber);
      dispatch(nameslice.setPhoneNumber(savedNumber));
    }
  }, [dispatch]);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("values");
    localStorage.removeItem("FullName");
    localStorage.removeItem("Phonenumber");
    dispatch(profileSlice.handleClose());
  dispatch(profileSlice.setTheme("light")); 
    window.location.reload();

  };

  const savename = () => {
    dispatch(nameslice.setFullName(name));
    localStorage.setItem("FullName", name);
    dispatch(profileSlice.ChangeName(false));
  };

  const nextstep = () => {
    dispatch(profileSlice.changenum(true));
    dispatch(profileSlice.isConfirm(true));
  };

  const confirmcode = () => {
    dispatch(nameslice.setPhoneNumber(number));
    localStorage.setItem("Phonenumber", number);
    dispatch(profileSlice.isConfirm(false));
    dispatch(verificationActions.resetCode());
    dispatch(profileSlice.changenum(false));
  };


  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div>
      <Box
        sx={{ width: isMobile ? "100% " : "371px", height: "auto" }}
        className={styles.profileBox}
      >
        <div className={styles.profilewrapper}>
          <div className={styles.profileHeader}>
            <h1>
              {t("Profile.hi")} {values.FullName}{" "}
              <span>{t("Profile.profile")}</span>
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
                  <p>{t("Profile.fullName")}</p>
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
                  <p>{t("Profile.number")}</p>
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
              {t("Profile.history")}
            </NavLink>
          </div>

          <div className={styles.notificationsandDarkMode}>
            <div className={styles.notificationswrapper}>
              <p>
                <IoIosNotifications className={styles.icon} />{" "}
                {t("Profile.offNotifications")}
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
                <VscColorMode className={styles.icon} /> {t("Profile.darkmode")}
              </p>
              <Switch
              checked={mode === "dark"}
                onChange={()=>dispatch(profileSlice.toggleTheme())}
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
            <p onClick={logout}>
              {t("Profile.logout")} <LuLogOut className={styles.icon} />
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}
