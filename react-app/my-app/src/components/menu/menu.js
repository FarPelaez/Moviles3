import React from "react";
import logo from "./../../images/logo.png"

export default function Menu() {
    return (
        <>
            <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: "350px" }} id="mySidebar"><br />
                <div className="w3-container">
                    <a href="#inicio" className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu"></a>
                    <img src={logo} alt="" style={{ width: "90%" }} className="w3-round" /><br />
                </div>
                <div className="w3-bar-block">
                    <a href="#portfolio" className="w3-bar-item w3-button w3-padding"><i className="fa fa-newspaper-o fa-fw w3-margin-right"></i>Noticias</a>
                    <a href="#about" className="w3-bar-item w3-button w3-padding"><i className="fa fa-space-shuttle fa-fw w3-margin-right"></i>Acerca de</a>
                    <a href="#contact" className="w3-bar-item w3-button w3-padding"><i className="fa fa-address-card fa-fw w3-margin-right"></i>Contacto</a>
                </div>
            </nav>
            <div className="w3-overlay w3-hide-large w3-animate-opacity" style={{ cursor: "pointer" }} title="close side menu" id="myOverlay"></div>
        </>
    );
}
