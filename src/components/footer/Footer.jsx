import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import Logo from "../../assets/img/cafeyn.svg";
// import CafeynLogo from "../assets/img/cafeynLogo2.svg";
import { navCategoriesFooter, languages } from "../../assets/cafeyn.fixtures";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      {/* TODO logo en mobile <img src={CafeynLogo} alt="cafeyn logo" /> */}
      <div className="footer-main">
        <div className="footer-nav">
          <a className="footer-logo" href="https://www.cafeyn.co/fr/newsstand">
            <img src={Logo} alt="logo cafeyn" />
          </a>
          {navCategoriesFooter.map(({ title, categories }) => (
            <div className="footer-nav-categories">
              <h2 className="footer-nav-titles">{title}</h2>
              <ul>
                {categories.map((categorie) => (
                  <li>
                    <a href="" className="footer-nav-categorie">
                      {categorie}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-icons">
          <div>
            <div className="footer-app-redirect">
              <a href="https://apps.apple.com/fr/app/lekiosk-digital-newsstand/id626703984?l=fr">
                <img
                  src="https://www.aixlesbains.fr/var/aixinter/storage/images/media/images/cadre-de-vie/technologie/logo-disponible-sir-app-store/477804-1-fre-FR/Logo-Disponible-sir-App-store_full_image.png"
                  alt="logo-available-apple"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=fr.lekiosque&hl=fr">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_Google_play.jpg"
                  alt="logo-available-google"
                  style={{ marginLeft: "25px" }}
                />
              </a>
            </div>
            <div className="footer-social-icons">
              <p className="footer-social-follow">Suivez nous</p>
              <a
                className="footer-social-icon"
                href="https://apps.apple.com/fr/app/lekiosk-digital-newsstand/id626703984?l=fr"
              >
                <FaFacebookF />
              </a>
              <a
                className="footer-social-icon"
                href="https://apps.apple.com/fr/app/lekiosk-digital-newsstand/id626703984?l=fr"
              >
                <AiFillInstagram />
              </a>
              <a
                className="footer-social-icon"
                href="https://apps.apple.com/fr/app/lekiosk-digital-newsstand/id626703984?l=fr"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mentions">
        <div className="footer-left">
          <select className="footer-left-item" name="language" id="language">
            {languages.map((language) => (
              <option value={language}>{language}</option>
            ))}
          </select>
          <a
            className="footer-left-item"
            href="https://cdn1.lekiosk.com/Public/Cafeyn/pdfs/legal/fr/legal_lkios.pdf"
          >
            Conditions d'utilisation et de vente
          </a>
          <a
            className="footer-left-item"
            href="https://cdn1.lekiosk.com/Public/Cafeyn/pdfs/legal/fr/privacypolicy_lkios.pdf"
          >
            Politique de confidentialité
          </a>
        </div>
        <p>© 2021 - Tous droits réservés Lekiosque.fr</p>
      </div>
    </footer>
  );
};

export default Footer;
