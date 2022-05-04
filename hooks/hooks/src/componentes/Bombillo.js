import React, { useState, useEffect } from "react";

import on from "../img/on.jpg"
import off from "../img/off.jpg";


export default function Bombillo() {
    const [estadoLuz, setEstadoLuz] = useState(false);
    const [contar, setContar] = useState(0);

    //El useEffect es una funcion dentro de otra funcion
    useEffect(() => {
        console.log("Total: " + contar);
    }, [contar]);

    const encenderApagar = () => {
        setEstadoLuz(!estadoLuz);

        if (estadoLuz === false) {
            setContar(contar + 1);
        }

    }
    return (
        <>
            { }
            {estadoLuz ? <img src={on} alt="" /> : <img src={off} alt="" />}
            <h4>Clicks:{contar}</h4>
            { }
            <button onClick={encenderApagar}>Encender / Apagar</button>
        </>
    );
}