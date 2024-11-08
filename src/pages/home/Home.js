import React from "react";
import PrimerComponente from "../../components/PrimerComponente";
import SegundoComponente from "../../components/SegundoComponente";
import TercerComponente from "../../components/TercerComponente";
import CuartoComponente from "../../components/CuartoComponente";
import QuintoComponente from "../../components/QuintoComponente";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <PrimerComponente/>
            <SegundoComponente/>
            <TercerComponente/> 
            <CuartoComponente/>
            <QuintoComponente/>
         

            <div className="button-container">
    <Link to="/about">
        <button>Ir a Main</button>
    </Link>
    <Link to="/main/content">
        <button>Ir a Main</button>
    </Link>
    <Link to="/contact">
        <button>Ir a Main</button>
    </Link>
</div>
            
           
        </div>
    )
}

export default Home;