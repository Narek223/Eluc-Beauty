import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import ContactsInfo from "./Contacts/ContactsInfo";
import logo from "../../assets/Logo/Paragraph container.png";
import { useSelector, useDispatch } from "react-redux";
import * as headerSlice from "../../Redux/Slices/Header/headerSclice";



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
              <li>About</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
            <img src={logo} />
            <p className={styles.login}>LogIn / SignUp</p>
          </nav>
        </header>
      </div>
    </div>
  );
}
