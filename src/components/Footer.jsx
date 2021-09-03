import React from "react";
import LogoR from "../img/name-rudy.png";
import Foto from "../img/foto-rudy.jpg";

const Footer = () => {
  return (
    <footer className="total-footer">
      <nav className="down-nav">
        <img className="logo-perfil" height="60" width="60" src={Foto} alt="rudy" />
        <div>
          <ul className="menu">
            <li>
              <a href="#github">GitHub</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <img height="60" width="120" src={LogoR} alt="rudy" />
      </nav>
    </footer>
  );
};
export default Footer;
