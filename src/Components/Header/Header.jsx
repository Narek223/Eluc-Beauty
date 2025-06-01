import React from "react";
import styles from "./header.module.scss";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Language from "./Changelanguage/Language";
import logo from "../../assets/Logo/Paragraph container.png";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.constacts}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactDetails}>
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

            <div className={styles.contactItem}>
              <a href="tel:+37493555566"> +123456789</a>
              <a
                href="https://www.google.com/maps/place/40.179186,44.478342,14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p> Address: Marburg, marburg</p>
              </a>
              <Language />
            </div>
          </div>
        </div>
        <header className={styles.header}>
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
