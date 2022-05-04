/* Un Hook es una función de javascript que permite crear/acceder al estado y a los ciclos de vida de React y que, 
para asegurar la estabilidad de la aplicación, debe de utilizarse siguiendo dos reglas básicas:

Debe de ser llamado en el nivel superior de la aplicación - Un hook nunca debe de llamarse dentro de ciclos, 
condicionales o funciones anidadas, ya que el orden de llamada de los hooks debe de ser siempre el mismo para asegurar 
que el resultado sea predecible durante la renderización. Este uso únicamente en el nivel superior es lo que asegura que 
el estado interno de React se preserve correctamente entre diferentes llamadas del mismo hook.
Debe de llamarse en funciones o en otros hooks personalizados de React - Un hook nunca debe de ser llamado fuera de una 
función de React o de otro hook personalizado, de forma que la lógica de estado del componente sea cláramente visible desde 
el resto del código para el scope establecido por React. */


import React, { useState, useEffect } from 'react';

export function Ejemplo1() {
    // Declara una nueva variable de estado, que llamaremos "count".
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Has clickeado {count} veces</p>
            <button onClick={() => setCount(count + 1)}>
                Click aquí
            </button>
        </div>
    );
}


export function Ejemplo2(props) {
    const [segundos, setSegundos] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSegundos(segundos => segundos + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return <div>Han pasado {segundos} segundos</div>;
}


export function Ejemplo3() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    useEffect(() => {
        console.log('Se ha ejecutado el hook');
    }, [nombre]);

    return (
        <div>
            <input value={nombre} onChange={(event) => setNombre(event.target.value)} />
            <input value={apellido} onChange={(event) => setApellido(event.target.value)} />
        </div>
    );
}


export function Ejemplo4() {
    const [conteo, setConteo] = useState(0);
    const [calculo, setCalculo] = useState(0);

    useEffect(() => {
        setCalculo(() => conteo * 2);
    }, [conteo]);

    return (
        <>
            <p>Conteo: {conteo}</p>
            <button onClick={() => setConteo((c) => c + 1)}>+</button>
            <p>Cálculo: {calculo}</p>
        </>
    );
}