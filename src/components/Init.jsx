import React, { Fragment, useState } from "react";
import Logo from "../img/logo_bicevida.png";
import Gat from "../img/gat.png";
import axios from "axios";
import TemplateInfo from "./TemplateInfo";

const options = [
  { name: "Seguro Vida Activa", id: 58 },
  { name: "Seguro Viaje Protegido", id: 59 },
];

const Init = () => {
  const [insuranceData, setinsuranceData] = useState(null);
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  const getData = () => {
    axios
      .get(
        `https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${selectedInsurance}`
      )
      .then((response) => {
        setinsuranceData(response.data);
      });
  };

  return (
    <Fragment>
      <div className="logo-bice">
        <img width="150" src={Logo} alt="bice" />
      </div>
      <p className="message">Conoce nuestros Seguros</p>
      <div className="menu-insurance">
        <select
          onChange={(e) => {
            setSelectedInsurance(e.target.value);
          }}
          name="insurances"
          className="selector"
        >
          {[
            <option selected disabled hidden key="no-option" value={null}>
              Seleccione una opción
            </option>,
            ...options.map(({ name, id }) => (
              <option key={`option-${id}`} value={id}>
                {name}
              </option>
            )),
          ]}
        </select>
        <button
          className="button-selector"
          disabled={!selectedInsurance}
          onClick={getData}
        >
          Buscar
        </button>
      </div>
      <div className="container">
        <img className="gat" src={Gat} alt="gat" />
        {insuranceData && <TemplateInfo insuranceData={insuranceData} />}
      </div>
    </Fragment>
  );
};

export default Init;
