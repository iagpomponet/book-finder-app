import React from "react";
import "Styles/components/Header/index.scss";
import Logo from "Components/Logo";
import Search from "Components/Search";

const Header = () => (
  <div className="header">
    <div className="header__wrapper">
      <Logo />
      <Search />
    </div>
  </div>
);

export default Header;
