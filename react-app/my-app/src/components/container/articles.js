import React from "react";
import img from "./../../images/logo.png"

export default function Articles({ titulo, fecha, descripcion, imagen }) {
    return (
        <>
            <div className="w3-third w3-container w3-margin-bottom">
                <img src={imagen} alt="Norway" style={{ width: "550px", height: "250px" }} className="w3-hover-opacity" />
                <div className="w3-container w3-white">
                    <h2 className="article-title">{titulo.slice(0, 40) + "..."}</h2>
                    <p className="article-date"><b>{fecha.slice(0, 10)}</b></p>
                    <p className="article-description">{descripcion.slice(0, 100) + "..."}</p>
                </div>
            </div>
        </>
    );
}