import React from "react";
import logo from "./../../images/logo.png"
import lorem from "./../../images/lorem.png"
import ipsum from "./../../images/ipsum.png"

export default function Pie() {
    return (
        <>
            <footer className="w3-container w3-padding-32 w3-dark-grey">
                <div className="w3-row-padding">
                    <div className="w3-third">
                        <h3>Actualidad Panamericana</h3>
                        <p>Actualidad Panamericana es un sitio web satírico cuyo único fin es el entretenimiento. Todos sus contenidos son ficción
                            y no se corresponden con la realidad. Todos los referentes, nombres, marcas o instituciones que aparecen se usan como
                            elementos contextuales, como en cualquier novela o relato de ficción.</p>
                    </div>
                    <div className="w3-third">
                        <h3>Links de interés</h3>
                        <ul className="w3-ul w3-hoverable">
                            <li className="w3-padding-16">
                                <img src={lorem} alt="" className="w3-left w3-margin-right" style={{ width: "44px" }} />
                                <span className="w3-large">Lorem</span><br />
                                <span>Sed mattis nunc</span>
                            </li>
                            <li className="w3-padding-16">
                                <img src={ipsum} alt="" className="w3-left w3-margin-right" style={{ width: "44px" }} />
                                <span className="w3-large">Ipsum</span><br />
                                <span>Praes tinci sed</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w3-third">
                        <h3>POPULAR TAGS</h3>
                        <p>
                            <span className="w3-tag w3-black w3-margin-bottom">Travel</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">New York</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">London</span>
                            <span className="w3-tag w3-grey w3-small w3-margin-bottom">IKEA</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">NORWAY</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">DIY</span>
                            <span className="w3-tag w3-grey w3-small w3-margin-bottom">Ideas</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">Baby</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">Family</span>
                            <span className="w3-tag w3-grey w3-small w3-margin-bottom">News</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">Clothing</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">Shopping</span>
                            <span className="w3-tag w3-grey w3-small w3-margin-bottom">Sports</span> <span className="w3-tag w3-grey w3-small w3-margin-bottom">Games</span>
                        </p>
                    </div>
                </div>
            </footer>
            <div className="w3-black w3-center w3-padding-24">Powered by <img src={logo} alt="" style={{ width: "40px" }} /> Natalia</div>
        </>
    );
}