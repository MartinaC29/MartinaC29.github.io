//carrousel script

  const imagenes = [
     'img/Carrousel/BIENVENIDOS.png',
     'img/Carrousel/Tostado.png',
     'img/Carrousel/CAFETERAS.png',
     'img/Carrousel/coffe3.png'
  ];

  let posActual = 0;
  let botonAnt = document.querySelector('#prev');
  let botonSig = document.querySelector('#next');
  let image = document.querySelector('#imagenes');

  let intervalo;

  function pasarImagen(){
    if(posActual >= imagenes.length - 1){
        posActual = 0;
    }else{
        posActual++;
    }
    renderImagen();
  }

  function retrocederImagen(){
    if(posActual <= 0){
        posActual = imagenes.length - 1;
    }else{
        posActual--;
    }
    renderImagen();
  }

  function renderImagen(){
    image.style.backgroundImage = `url(${imagenes[posActual]})`;
    image.style.backgroundSize = 'cover'; 
    image.style.backgroundPosition = 'center';
   
  }

  botonSig.addEventListener('click', () =>{
    pasarImagen();
  });

  botonAnt.addEventListener('click', () =>{
    retrocederImagen();

  });

  renderImagen();

 
  



  
  





