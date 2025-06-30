import React from "react";
import styles from './contacts.module.scss'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Language from "../Changelanguage/Language";
import { useTranslation } from "react-i18next";


export default function ContactsInfo() {
  const { t } = useTranslation();

  return (
    <div>
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
              <p> {t("headerinfo.address")}: Marburg, marburg</p>
            </a>
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
}
