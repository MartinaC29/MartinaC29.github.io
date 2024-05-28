
const name = document.getElementById('nombre');
const lName = document.getElementById('apellido');
const mail = document.getElementById('email');
const form = document.getElementById('newsletter-form');
const parrafo = document.getElementById('mensajes');

form.addEventListener("submit", e=>{
  e.preventDefault();
  console.log("Formulario enviado");
  let mensajes = "";
  let ingresar = false;
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
  parrafo.innerHTML = "";

  if(name.value.length < 3 || name.value.length > 30){
      mensajes += `El nombre no es valido <br>`
      ingresar = true
      console.log("Nombre no válido");
  }
  if(lName.value.length < 3 || lName.value.length > 30){
      mensajes += `El apellido no es valido <br>`
      ingresar = true
  }
  if(!regexMail.test(mail.value)){
      mensajes += `El email no es valido <br>`
      ingresar = true
  }

  if(ingresar){
      parrafo.innerHTML = mensajes;
  }else{
    parrafo.innerHTML = "Estas Suscrito";
    name.value = "";
    lName.value = "";
    mail.value = "";
  }
  


});
