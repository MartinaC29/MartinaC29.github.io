//validacion newsletter

const name = document.getElementById(nombre);
const lName = document.getElementById(apellido);
const email = document.getElementById(email);
const form = document.getElementById(newsletter-form);
const parrafo = document.getElementById(warnings);

form.addEventListener("submit", e=>{
  e.preventDefault();
  let warnings = ""
  let ingresar = false
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
  
  if(name.value.length < 3 || name.value.length > 30){
      warnings += `El nombre no es valido <br>`
      ingresar = true
  }
  if(lName.value.length < 3 || lName.value.length > 30){
      warnings += `El apellido no es valido <br>`
      ingresar = true
  }
  if(!regexMail.test(email.value)){
      warnings += `El email no es valido <br>`
      ingresar = true
  }

  if(entrar){
      parrafo.innerHTML = warnings
  }


});
