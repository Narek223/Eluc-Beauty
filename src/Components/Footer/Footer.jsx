import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
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
          <h1>Contact</h1>
          <div>
            <p>Address</p>
            <a
              href="https://www.google.com/maps/place/40.179186,44.478342,14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Marburg, Marburg 10</span>
            </a>
          </div>
          <div>
            <p>Open Time</p>
            <span>09:00 - 19:00</span>
          </div>
          <div>
            <p>Contact</p>
               <a href="tel:+000 000-00-000">  <span> +000 000-00-000</span></a>
           
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          © COPYRIGHT 2024 EluX. Experience luxury and rejuvenation with our
          expert beauty treatments. Follow us on social media for the latest
          updates and exclusive offers. Contact Us | Privacy Policy | Terms of
          Service | FAQs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
