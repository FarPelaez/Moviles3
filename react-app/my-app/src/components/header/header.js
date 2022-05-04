import React from "react";
import logo from "./../../images/logo.png"

export default function Header() {
    return (
        <>
            <header id="portfolio">
                <a href="#Inicio">
                    <img src={logo} alt="" style={{ width: "150px" }} className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" />
                </a>
                <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"><i className="fa fa-bars"></i></span>
                <div className="w3-container">
                    <div className="w3-section w3-bottombar w3-padding-16">
                        <span className="w3-margin-right">Filtrar:</span>
                        <button className="w3-button w3-black">Todas las noticias</button>
                        <button className="w3-button w3-white"><i className="fa fa-handshake-o w3-margin-right"></i>Politica</button>
                        <button className="w3-button w3-white w3-hide-small"><i className="fa fa-usd w3-margin-right"></i>Economía</button>
                        <button className="w3-button w3-white w3-hide-small"><i className="fa fa-bicycle w3-margin-right"></i>Deportes</button>
                    </div>
                </div>
            </header>
        </>
    );
}
