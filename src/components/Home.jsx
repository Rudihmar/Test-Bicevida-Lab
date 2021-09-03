import React, { Fragment } from "react";
import TopHome from "./TopHome";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

const Home = () => {
    return(
      <Fragment>
        <TopHome/>
        <div className="home">Bienvenidos al Test de Desarrollo para el cargo de Trainee de Bice vida Lab
        <Link className="button-home" to="/Init">VAMOS!</Link></div>
      <Footer />

      </Fragment>
    )
  }
  export default Home;