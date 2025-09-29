import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import ContactsInfo from "./Contacts/ContactsInfo";
import logo from "../../assets/Logo/Paragraph container.png";
import { useSelector, useDispatch } from "react-redux";
import * as headerSlice from "../../Redux/Slices/Header/headerSclice";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { links } from "../../Services/Date/Header/links";
import Profile from "./Profile/Profile";
import DrawerComponent from "./DrawerComponent/DrawerComponent";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function Header() {

  const dispatch = useDispatch();
  const { isScrolled, showNavbar } = useSelector((state) => state.header);
    const {  isMobile } = useSelector((state) => state.profile);
  const boolean = useSelector((state) => state.verification.bool);
  const { t } = useTranslation();
  const location = useLocation();
  const isLoginPage = location.pathname === "/sign";
  const isContactsPage = location.pathname === "/contacts";

  

  useEffect(() => {
    const handleScroll = () => {
      dispatch(headerSlice.setIsScrolled(window.scrollY > 0));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 1000 && showNavbar) {
      dispatch(headerSlice.setShowNavbar(false));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showNavbar]);
  const showNavBar = () => {
    dispatch(headerSlice.setShowNavbar(!showNavbar));
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.constacts}>
        <ContactsInfo />
        <header
          className={`${styles.header} ${
            isScrolled ? styles.fixedScrolled : ""
          }`}
        >
          <nav  className={` ${isLoginPage || isContactsPage ? styles.loginHeader : ""} `}>
            <div className={styles.icons} onClick={showNavBar}>
              {showNavbar ? <MdClear /> : <GiHamburgerMenu />}
            </div>
            <ul
              className={`${styles.navList} ${showNavbar && isMobile ? styles.close : ""}`}
            >
              {links.map((elem) => (
                <NavLink
                  key={elem.id}
                  to={elem.link}
                  className={({ isActive }) =>
                    `${styles.link} ${
                      isActive ? styles.activeLink : styles.navlink
                    }`
                  }
                  style={{ color: "black" }}
                >
                  <li> {t(elem.btntext)}</li>
                </NavLink>
              ))}
            </ul>

            <NavLink to="/" style={{ textDecoration: "none" }}>
              <div className={styles.logo}>
                <p>
                  elux <br /> <span>BEAUTY</span>
                </p>
              </div>
            </NavLink>
            {localStorage.getItem("isLoggedIn") ? (
              <Profile />
            ) : (
              <NavLink to="/sign" style={{ textDecoration: "none" }}>
                <p className={styles.login}>
                  {t("header.login")} 
                </p>
              </NavLink>
            )}
          </nav>
        </header>
        <DrawerComponent />
      </div>
    </div>
  );
}
