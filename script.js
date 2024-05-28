//carrousel script.
  const imagenes = [
     [img/Carrousel/BIENVENIDOS.png],
     [img/Carrousel/Tostado.png],
     [img/Carrousel/CAFETERAS.png],
     [img/Carrousel/coffe3.png]
  ];

  let posActual = 0;
  

  const carrouselImagen = document.getElementById(imagenes);
  const botonAnt = document.querySelector(prev);
  const botonSig = document.querySelector(next);

  function mostrarImagen(posActual){
    carrouselImagen.src = imagenes(posActual);
  }

  function imagenAnterior(){
    if (posicionActual <= 0) {
        posicionActual = imagenes.length - 1;
      } else {
        posicionActual--;
      }
      mostrarImagen(posActual);
    }
  

  function imagenSiguiente(){
    if (posicionActual >= imagenes.length - 1) {
        posicionActual = 0;
      } else {
        posicionActual++;
      }
      mostrarImagen(posActual);
    }

  botonAnt.addEventListener('click', () => {
    imagenAnterior();
  });  

  botonSig.addEventListener('click', () => { 
   imagenSiguiente();
  }); 

  mostrarImagen(posActual);

  
  





