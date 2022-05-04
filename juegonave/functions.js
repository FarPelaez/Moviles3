document.addEventListener("DOMContentLoaded", function () {
   const boardSquares = document.querySelectorAll(".board div");
   const aliensCount = document.querySelector(".count");
   const message = document.querySelector(".message");

   let squares = 15;
   let shipPosition = 217;
   let aliensPosition = 0;
   let deadAliens = [];
   let result = 0;
   let direction = 1;
   let alienID;
   let goingRight = true;

   //Posición inicial de los Aliens en el tablero
   let aliens = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39
   ]
   //Funcion para crear los Aliens
   function createAliens() {
      for (let i = 0; i < aliens.length; i++) {
         if (!deadAliens.includes(i)) {
            boardSquares[aliens[i]].classList.add('aliens');
         }

         //aliens.forEach(alien => boardSquares[aliensPosition + alien].classList.add("aliens"));
      }

   }
   createAliens();

   //Funcion para eliminar los aliens cuando les disparemos
   function deleteAliens() {
      aliens.forEach(alien => boardSquares[aliensPosition + alien].classList.remove("aliens"));
   }

   //Funcion para colocar la nave
   function putShip() {
      boardSquares[shipPosition].classList.add('ship');
   }
   putShip();


   //Funcion para mover la nave con las flechas
   function moveShip(event) {
      boardSquares[shipPosition].classList.remove("ship");

      switch (event.key) {
         case 'ArrowLeft':
            if ((shipPosition % squares) !== 0) {
               shipPosition -= 1;
            } break;
         case 'ArrowRight':
            if ((shipPosition % squares) < squares - 1) {
               shipPosition += 1;
            } break;
      }
      boardSquares[shipPosition].classList.add("ship");
   }
   document.addEventListener('keydown', moveShip);

   //Funcion para mover los aliens en el tablero
   function moveAliens(event) {
      const leftEdge = aliens[0] % squares === 0;
      const rightEdge = aliens[aliens.length - 1] % squares === squares - 1;
      deleteAliens();

      if (rightEdge && goingRight) {
         for (let i = 0; i < aliens.length; i++) {
            aliens[i] += squares + 1;
            direction = -1;
            goingRight = false;
         }
      }

      if (leftEdge && !goingRight) {
         for (let i = 0; i < aliens.length; i++) {
            aliens[i] += squares - 1;
            direction = 1;
            goingRight = true;
         }
      }

      for (let i = 0; i < aliens.length; i++) {
         aliens[i] += direction;
      }
      createAliens();

      //Codigo para que el juego termine cuando un alien colapsa con la nave
      if (boardSquares[shipPosition].classList.contains('aliens')) {
         alert("Game over, try again");
         clearInterval(alienID);
         location.reload();
      }

      for (let i = 0; i < aliens.length; i++) {
         if (aliens[i] >= (boardSquares.length)) {
            alert("Game over, try again");
            clearInterval(alienID);
            location.reload();
         }
      }

      if (deadAliens.length === aliens.length) {
         alert("¡Congratulations, you won!");
         clearInterval(alienID);
         location.reload();
      }
   }
   alienID = setInterval(moveAliens, 250);

   //Funcion para disparar
   function shoot(event) {
      let laserID;
      let laserPosition = shipPosition;

      function moveLaser() {
         boardSquares[laserPosition].classList.remove('laser');
         laserPosition -= squares;
         boardSquares[laserPosition].classList.add('laser');

         //Hacemos que los aliens desaparezcan al disparar y agregamos un efecto de explosión
         if (boardSquares[laserPosition].classList.contains('aliens')) {
            boardSquares[laserPosition].classList.remove('laser');
            boardSquares[laserPosition].classList.remove('aliens');
            boardSquares[laserPosition].classList.add('explosion');

            setTimeout(() => boardSquares[laserPosition].classList.remove('explosion'), 300);
            clearInterval(laserID);

            const alienDeath = aliens.indexOf(laserPosition);
            deadAliens.push(alienDeath);
            result++;
            aliensCount.innerHTML = result;
            console.log(deadAliens);
            clearInterval(laserID);

         }
      }
      switch (event.code) {
         case 'Space':
            laserID = setInterval(moveLaser, 50);
            break;
      }

   }
   document.addEventListener('keydown', shoot);

});

