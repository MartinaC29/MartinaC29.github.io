
const newsletter = document.getElementById('newsletter-form');
const inputs = document.querySelectorAll('#newsletter-form input');
const expresiones = {
    dni: /^.{4,8}$/,
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,10}$/
}

const campos = {
    dni: false,
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false

}

const validarNews = (e) => {
    switch(e.target.name){
        case "dni": 
            validarCampo(expresiones.dni, e.target,'dni');
        break;
        case "nombre": 
            validarCampo(expresiones.nombre, e.target,'nombre');
        break;
        case "apellido": 
            validarCampo(expresiones.apellido, e.target,'apellido');
        break;
        case "mail": 
            validarCampo(expresiones.correo, e.target,'mail');
        break;
        case "telefono": 
            validarCampo(expresiones.telefono, e.target,'telefono');
        break;   
    } 
   

}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`g_${campo}`).classList.remove('g_form-incorrecto');
        document.getElementById(`g_${campo}`).classList.add('g_form-correcto');
        document.querySelector(`#g_${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#g_${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#g_${campo} .error-form`).classList.remove('error_mensaje-activo');
        campos[campo] = true;
       }else{
         document.getElementById(`g_${campo}`).classList.add('g_form-incorrecto');
         document.getElementById(`g_${campo}`).classList.remove('g_form-correcto');
         document.querySelector(`#g_${campo} i`).classList.remove('fa-circle-check');
         document.querySelector(`#g_${campo} i`).classList.add('fa-circle-xmark');
         document.querySelector(`#g_${campo} .error-form`).classList.add('error_mensaje-activo');
         campos[campo] = false;
       }

}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarNews);
    input.addEventListener('blur', validarNews);

});


newsletter.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');

    if(campos.dni && campos.nombre && campos.apellido && campos.mail && campos.telefono && terminos.checked){

        newsletter.reset();

        document.getElementById('form_mensaje').classList.add('form_mensaje-activo');
        setTimeout(() => {
            document.getElementById('form_mensaje').classList.remove('form_mensaje-activo');


        }, 5000);

        document.querySelectorAll('.g_form-correcto').forEach((icono) => {
            icono.classList.remove('g_form-correcto');
        });

        document.getElementById('error_mensaje').classList.remove('error_mensaje-activo');


    }else{
        document.getElementById('error_mensaje').classList.add('error_mensaje-activo');
    }


});
