import React from "react";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import styles from "./drawer.module.scss";
import * as headerSlice from "../../../Redux/Slices/Header/headerSclice";
import { useSelector, useDispatch } from "react-redux";
import { links } from "../../../Services/Date/Header/links";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ListItemIcon from "@mui/material/ListItemIcon";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Language from "../Changelanguage/Language";

export default function DrawerComponent() {
  const dispatch = useDispatch();
  const { showNavbar } = useSelector((state) => state.header);

  const { t } = useTranslation();
  const handleClose = () => {
    dispatch(headerSlice.setShowNavbar(false));
  };
  return (
    <div>
      <Drawer
        className={styles.drawer}
        open={showNavbar}
        onClose={handleClose}
        anchor="bottom"
        PaperProps={{
          sx: {
            boxShadow: "none",
            height: "calc(100% - 90px)",
            marginTop: "90px",
            backgroundColor: "var(  --color-bg) !important",
           
            width: "100%",
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "transparent",
          },
        }}
      >
        <div className={styles.boxConteiner}>
          <Box className={styles.box}>
            {links.map((elem, index) => (
              <ListItem key={index} className={styles.navtext}>
                <NavLink
                  className={styles.link}
                  to={elem.link}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => dispatch(headerSlice.setShowNavbar(false))}
                >
                  <ListItemButton className={styles.btn}>
                    <ListItemText primary={t(elem.btntext)} />
                    <ListItemIcon sx={{ minWidth: "0px", color:"var(--color-text-secondary)" }}>
                      <p>
                        <IoIosArrowForward />
                      </p>
                    </ListItemIcon>
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </Box>
          <Box>
            <div className={styles.ContactsandLang}>
  
        <div className={styles.contactIcons}>
              <ul>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiFacebook className={styles.icons} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className={styles.icons} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className={styles.icons} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
<Language/>
            </div>
            </div>
    
          </Box>
        </div>
      </Drawer>
    </div>
  );
}
