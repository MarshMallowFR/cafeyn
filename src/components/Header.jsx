import React from "react";

import Button from "./Button";
import Logo from "../assets/img/cafeyn.svg";
import GiftHeader from "../assets/img/giftHeader.svg";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <img src={Logo} alt="logo cafeyn" />
        <input
          type="text"
          placeholder="Rechercher un titre de presse ou un article"
        />
      </div>
      <div className="header-right">
        <img className="gift-icon" src={GiftHeader} alt="gift-icon" />
        <Button name={"se connecter"} class={"button-login"} />
        <Button name={"s'inscrire"} class={"button-register"} />
      </div>
    </header>
  );
};

export default Header;
