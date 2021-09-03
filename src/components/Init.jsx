import React, { Fragment,  useState } from "react";
import Logo from "../img/logo_bicevida.png";
import Gat from "../img/gat.png";
import axios from "axios";
import TemplateInfo from "./TemplateInfo";

const options = [
  { name: "Seguro Vida Activa", id: 58 },
  { name: "Seguro Viaje Protegido", id: 59 },
];

const Init = () => {
  const [insuraceData, setInsuraceData] = useState(null);
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  const getData = () => {
    axios
      .get(
        `https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${selectedInsurance}`
      )
      .then((response) => {
        console.log(response.data)
        
      });
  };
  return (
    <Fragment>
      <div className="logo-bice">
        <img width="150" src={Logo} alt="bice" />
      </div>
      <div className="menu-insurance">
        
        <select
          onChange={(e) => {
            setSelectedInsurance(e.target.value);
            console.log(e.target.value);
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
        <button className="button-selector" disabled={!selectedInsurance} onClick={getData}>Buscar</button>
      </div>
      <div className="gat">
      <img src={Gat} alt="gat" />
    <TemplateInfo />
      </div>
    </Fragment>
  );
};

export default Init;
