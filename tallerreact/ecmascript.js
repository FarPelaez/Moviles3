//____________________________________________________________________________________________________________________________________________
//Qué es ECMAScript y cuales son sus actualizaciones recientes

/* ECMAScript es un estándar mundial creado a partir del año 2015 y hasta la actualidad que
se encarga de regir como debe ser interpretado y funcionar el lenguaje JavaScript, 
dentro de los diferentes ambientes compatibles con él, en las que se encuentran los 
navegadores web, NodeJS u otros ambientes como el desarrollo de aplicaciones para los
distintos sistemas operativos que actualmente existen en el mercado. Los responsables de 
dichos navegadores y JavaScript deben encargarse de interpretar el lenguaje tal como lo 
fija ECMAScript, buscando mejores práctica, estructuras, métodos y
tipado para facilitar su funcionamiento y hacerlo más uniforme y dinámico. 

Todo esto se da gracias a las mejoras continuas y a las optimizaciones que se van 
desarrollando con el objetivo de tener siempre un mejor rendimiento, entre otros aspectos. 
Hoy en día cuenta con gran importancia en el mercado, por su versatilidad JavaScript 
se ha convertido en un lenguaje universal y puede ser encontrado tanto a nivel móvil 
como de hardware, servidor, web, entre otros. Adicionalmente, cuenta con una variedad
de librerías y frameworks a fin de facilitar el desarrollo de nuevos proyectos. */


//____________________________________________________________________________________________________________________________________________
//Escoja mínimo 6 novedades de ECMAScript y explique cada una con ejemplos


// 1. Implementación de JSON en ECMAScript 5

const myJson = {
   "departamento": 8,
   "nombredepto": "Ventas",
   "director": "Juan Rodríguez",
   "empleados": [
      {
         "nombre": "Pedro",
         "apellido": "Fernández"
      }, {
         "nombre": "Jacinto",
         "apellido": "Benavente"
      }
   ]
}


// 2. Se añade soporte nativo para Getters y Setters en ECMAScript 5

let persona = {
   nombre: 'Yeison',
   apellido: 'Daza',
   get nombreCompleto() { //Getter
      return `${nombre} ${apellido}`
   },
   set nombreCompleto(nom) { //Setter
      const palabras = nom.split(' ');
      this.nombre = palabras[0] || '';
      this.apellido = palabras[1] || '';
   }
}

persona.nombreCompleto = 'Camilo Sanchez'

console.log(persona.nombre); //camilo
console.log(persona.apellido); //sanchez


// 3. Se crean las funciones flechas en ECMAScript 6

// Antes
let mayor1 = function (a, b) {
   if (a > b)
      return a;
   else
      return b;
}
// Ahora
let mayor2 = (a, b) => {
   if (a > b)
      return a;
   else
      return b;
}


// 4. Ciclo for.. of implementado en ECMAScript 6

let iteracion = [10, 20, 30];

for (const value of iteracion) {
   console.log(value);
}


// 5. Soporte nativo de Promesas para implementar patrones de programación asincrona

let usuario = "";
let token = false;

const obtenerUsuario = () => {
   return new Promise((resolve, reject) => {
      console.log("Buscando usuario...");

      setTimeout(() => {
         if (token) {
            resolve("Triunfamos");
         }
         else {
            reject("No se encontro usuario :C");
         }
      }, 3000);
   });
}

obtenerUsuario()
   .then((res) => {
      usuario = res;
      console.log(`Usuario obtenido: ${usuario}`);
   })
   .catch((err) => {
      console.log(err)
   });


// 6. Implementación de variables en el bloque con let

var a = 5;
var b = 10;

if (a === 5) {
   let a = 4; // El alcance de la variable es dentro del bloque if
   var b = 1; // El alcance de la variable es global

   console.log(a);  // Respuesta: 4
   console.log(b);  // Respuesta: 1
}

console.log(a); // Respuesta: 5
console.log(b); // Respuesta: 1


//____________________________________________________________________________________________________________________________________________
// Investigue qué librerías o frameworks trabajan con las novedades de ECMAScript

const myJson2 = {
   "frameworks": [
      {
         1: "Angular",
         2: "NodeJs",
         3: "Vue"
      }
   ],
   "librerias": [
      {
         1: "Redux",
         2: "TypeFace.js",
         3: "Anime.js"
      }
   ]
}
