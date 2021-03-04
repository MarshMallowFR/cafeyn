import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";

import Button from "../button/Button";
import Logo from "../../assets/img/cafeyn.svg";
import LogoLogin from "../../assets/img/lk-login.svg";
import GiftHeader from "../../assets/img/giftHeader.svg";
import { BiChevronDown } from "react-icons/bi";

import "./header.css";

const Header = ({ showHeader, setShowHeader }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleHeaderDisplay = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    setPrevScrollPos(currentScrollPos);
  };

  window.addEventListener("scroll", handleHeaderDisplay);

  return (
    <header>
      <div className={showHeader ? "header-main-active" : "header-main"}>
        <div className="header-main-content">
          <a
            href="https://www.cafeyn.co/fr/search"
            style={{ color: "#86949b" }}
            className="header-search-icon-mobile"
          >
            <BsSearch size={25} />
          </a>
          <a className="header-logo" href="https://www.cafeyn.co/fr/newsstand">
            <img src={Logo} alt="logo cafeyn" />
          </a>
          <a className="header-search" href="https://www.cafeyn.co/fr/search">
            <p>Rechercher un titre de presse ou un article</p>
            <div className="header-search-icon">
              <BsSearch size={16} />
            </div>
          </a>
          <div className="header-right">
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
            <div className="header-right-login-mobile">
              <div className="header-right-profil">
                <img src={LogoLogin} alt="logo login" />
                <span className="header-right-icon">
                  <BiChevronDown />
                </span>
              </div>
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
