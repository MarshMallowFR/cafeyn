import React from "react";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";

import Button from "../button/Button";
import Logo from "../../assets/img/cafeyn.svg";
import GiftHeader from "../../assets/img/giftHeader.svg";

import "./header.css";

const Header = ({ showHeader, setShowHeader }) => {
  const handleHeaderDisplay = () => {
    if (window.scrollY > 25) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  };

  window.addEventListener("scroll", handleHeaderDisplay);

  return (
    <header>
      <div className={showHeader ? "header-main-active" : "header-main"}>
        <div className="header-main-content">
          <a className="header-logo" href="https://www.cafeyn.co/fr/newsstand">
            <img src={Logo} alt="logo cafeyn" />
          </a>
          <a className="header-search" href="https://www.cafeyn.co/fr/search">
            <p>Rechercher un titre de presse ou un article</p>
            <BsSearch className="header-search-icon" />
          </a>
          <div className="header-right">
            {/* <div class="wrapper">
              <input
                onClick={() => {
                  const bcgColor = document
                    .querySelector(":root")
                    .style.getPropertyValue("--cafeyn-bcg-color");

                  document
                    .querySelector(":root")
                    .style.setProperty(
                      "--cafeyn-bcg-color",
                      bcgColor === "black" ? "white" : "black"
                    );
                }}
                type="checkbox"
                name="checkbox"
                class="switch"
              />
            </div> */}
            <div className="header-gift">
              <a
                href="https://www.cafeyn.co/fr/gift/offers"
                className="header-gift-link"
              >
                <img className="gift-icon" src={GiftHeader} alt="gift-icon" />
              </a>
            </div>
            <div className="header-right-content">
              <Button
                name={"se connecter"}
                slug={"https://www.cafeyn.co/fr/authentication/signin"}
                customClass={"button-login"}
              />
              <Button
                name={"s'inscrire"}
                slug={"https://www.cafeyn.co/fr/authentication/registration"}
                customClass={"button-register"}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  showHeader: PropTypes.bool.isRequired,
  setShowHeader: PropTypes.func.isRequired,
};

export default Header;
