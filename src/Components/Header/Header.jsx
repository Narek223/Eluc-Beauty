import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import ContactsInfo from "./Contacts/ContactsInfo";
import logo from "../../assets/Logo/Paragraph container.png";
import { useSelector, useDispatch } from "react-redux";
import * as headerSlice from "../../Redux/Slices/Header/headerSclice";
import { NavLink } from "react-router-dom";
import { links } from "../../Services/Date/Header/links";

export default function Header() {
  const dispatch = useDispatch();
  const { isScrolled } = useSelector((state) => state.header);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(headerSlice.setIsScrolled(window.scrollY > 0));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.constacts}>
        <ContactsInfo />
        <header
          className={`${styles.header} ${
            isScrolled ? styles.fixedScrolled : ""
          }`}
        >
          <nav>
            <ul className={styles.navList}>
              <li>Services</li>
              <li>Experts</li>
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
                  {elem.btntext}
                </NavLink>
              ))}
            </ul>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              {" "}
              <img src={logo} />
            </NavLink>

            <p className={styles.login}>LogIn / SignUp</p>
          </nav>
        </header>
      </div>
    </div>
  );
}
