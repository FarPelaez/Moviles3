import React, { Component } from "react";

// Componente de clase
class ComponenteUno extends Component {
   render() {
      console.log(this.props);
      let data = this.props.datos;
      return (
         <h1>Hola {data.nombre} {data.apellido} desde una clase, eres un {data.ocupacion}</h1>
      );
   }
}

// Componente de función normal
export function ComponenteDos(props) {
   console.log(props);
   return (
      <h2>Hola {props.nombre} desde la función, sos un {props.profesion} de {props.edad}</h2>
   );
}

// Componente de función flecha
export let ComponenteTres = (props) => {
   return (
      <>
         <h2>Hola {props.nombre} {props.apellido} desde la función flecha</h2>
         <button onClick={props.edad}>Ver mi edad</button>
      </>

   );
}

export default ComponenteUno;