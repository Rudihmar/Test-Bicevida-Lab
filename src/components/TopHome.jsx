import React from "react";
import Logo from "../img/logo_bicevida.png";

const TopHome = () => {
  return (
    <div className="navbar-container">
      <div>
        <img height="50" width="300" src={Logo} alt="bice" />
      </div>
      <p>Test de Programación - Bice Vida Lab</p>
    </div>
  );
};

export default TopHome;
