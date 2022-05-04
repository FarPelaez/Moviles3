document.addEventListener("DOMContentLoaded", function(){

let imagenes = [
    {
        img:"src/assets/img/darkmagician.jpg",
        name:"Dark Magician",
    },
    {
        img:"src/assets/img/valkyrion.jpg",
        name:"Valkyrion The Magna Warrior",
    },
    {
        img:"src/assets/img/elementalhero.jpg",
        name:"Elemental Hero Nebulos",
    },
    {
        img:"src/assets/img/valkyrion.jpg",
        name:"Valkyrion The Magna Warrior",
    },
    {
        img:"src/assets/img/whitedragon.jpg",
        name:"White Lightning Dragon",
    },
    {
        img:"src/assets/img/burstdragon.jpg",
        name:"Burst Stream Dragon",
    },
    {
        img:"src/assets/img/spirituallancer.jpg",
        name:"Spiritual Lancer",
    },
    {
        img:"src/assets/img/darkmagician.jpg",
        name:"Dark Magician",
    },
    {
        img:"src/assets/img/spirituallancer.jpg",
        name:"Spiritual Lancer",
    },
    {
        img:"src/assets/img/burstdragon.jpg",
        name:"Burst Stream Dragon",
    },
    {
        img:"src/assets/img/whitedragon.jpg",
        name:"White Lightning Dragon",
    },
    {
        img:"src/assets/img/elementalhero.jpg",
        name:"Elemental Hero Nebulos",
    }
]

let tablero = document.querySelector(".tablero")
let imgElegida = [];
let imgElegidaId = [];
let aciertos = document.querySelector(".conteo");
let conteo = [];

imagenes.sort(()=>0.5 - Math.random());

function crearTablero(){
    for ( let i=0; i<imagenes.length; i++ ){
        var img= document.createElement("img");
        img.setAttribute("data-id",i);
        img.setAttribute("src","src/assets/img/card.png");
        img.setAttribute("width","200px");
        tablero.appendChild(img);
        img.addEventListener("click",descubrirImagen);
    }
}

function descubrirImagen(){
    let imgClick = this.getAttribute("data-id");
    imgElegida.push(imagenes[imgClick].name);
    imgElegidaId.push(imgClick);
    this.setAttribute("src",imagenes[imgClick].img);
    this.setAttribute("class","selected")
    
    if(imgElegida.length === 2){
        setTimeout(compararImagen,300);
    }    
}


function compararImagen(){
    let todasLasImg = document.querySelectorAll("img");
    let opcion1 = imgElegidaId[0];
    let opcion2 = imgElegidaId[1];

    if (imgElegida[0] === imgElegida[1]){
        alert("¡Acertaste!");
        todasLasImg[opcion1].setAttribute("src","src/assets/img/check.png");
        todasLasImg[opcion1].setAttribute("class","check");
        todasLasImg[opcion2].setAttribute("src","src/assets/img/check.png");
        todasLasImg[opcion2].setAttribute("class","check");
        conteo.push(imgElegida);
    } else {
        alert("¡Fallaste!");
        todasLasImg[opcion1].setAttribute("src","src/assets/img/card.png");
        todasLasImg[opcion2].setAttribute("src","src/assets/img/card.png");
        todasLasImg[opcion1].setAttribute("class","noselected");
        todasLasImg[opcion2].setAttribute("class","noselected");
        
    }
    imgElegida = [];
    imgElegidaId = [];
    aciertos.textContent = conteo.length;

    if (conteo.length === 6){
        alert("¡Ganaste!")
        location.reload(true);
    }
}

crearTablero();


})