import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./footer.module.scss";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; 

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <footer>
      {location.pathname !== "/contacts" && location.pathname !== "/sign" && (
        <div className={styles.mapSection}>
          <MapContainer
            center={[50.8019, 8.7665]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
          <div className={styles.contactBox}>
            <h1>{t("footer.contact")}</h1>
            <div>
              <p>{t("footer.address")}</p>
              <a
                href="https://www.google.com/maps/place/40.179186,44.478342,14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{t("footer.addressValue")}</span>
              </a>
            </div>
            <div>
              <p>{t("footer.openTime")}</p>
              <span>{t("footer.openTimeValue")}</span>
            </div>
            <div>
              <p>{t("footer.contactPhone")}</p>
              <a href={`tel:${t("footer.phoneValue")}`}>
                <span> {t("footer.phoneValue")}</span>
              </a>
            </div>
          </div>
        </div>
      )}
      <div className={styles.footerBottom}>
        <p>
          {t("footer.copyright")}{" "}
          <NavLink to="/ContactUs" style={{ color: "black", textDecoration: "none" }}>
            <span> {t("footer.contactUs")} </span>
          </NavLink>{" "}
           | 
          <span>{t("footer.privacy")}</span>  | 
          <span>{t("footer.terms")}</span> | 
          <span>{t("footer.faqs")}</span> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;