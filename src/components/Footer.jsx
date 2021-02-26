import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import Logo from "../assets/img/cafeyn.svg";
// import CafeynLogo from "../assets/img/cafeynLogo2.svg";
import { navCategoriesFooter, languages } from "../assets/cafeyn.fixtures";

const Footer = () => {
  return (
    <footer>
      {/* TODO logo en mobile <img src={CafeynLogo} alt="cafeyn logo" /> */}
      <div className="footer-main">
        <img src={Logo} alt="logo cafeyn" />
        <div className="footer-nav">
          {navCategoriesFooter.map(({ title, categories }) => (
            <>
              <h2 className="footer-nav-title">{title}</h2>
              {categories.map((categorie) => (
                <li className="footer-nav-categorie">{categorie}</li>
              ))}
            </>
          ))}
        </div>
        <div className="footer-icons">
          <div className="footer-app-redirect">
            <img
              src="https://www.aixlesbains.fr/var/aixinter/storage/images/media/images/cadre-de-vie/technologie/logo-disponible-sir-app-store/477804-1-fre-FR/Logo-Disponible-sir-App-store_full_image.png"
              alt="logo-available-apple"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_Google_play.jpg"
              alt="logo-available-google"
            />
          </div>
          <div className="footer-social-icons">
            <p>Suivez nous</p>
            <FaFacebookF />
            <AiFillInstagram />
            <FaTwitter />
          </div>
        </div>
        <div className="footer-mentions">
          <div>
            <select name="language" id="language">
              {languages.map((language) => (
                <option value={language}>{language}</option>
              ))}
            </select>
            <a href="https://cdn1.lekiosk.com/Public/Cafeyn/pdfs/legal/fr/legal_lkios.pdf">
              Conditions d'utilisation et de vente
            </a>
            <a href="https://cdn1.lekiosk.com/Public/Cafeyn/pdfs/legal/fr/privacypolicy_lkios.pdf">
              Politique de confidentialité
            </a>
          </div>
          <p>© 2021 - Tous droits réservés Lekiosque.fr</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
