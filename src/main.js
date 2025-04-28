// Zona de exportacion de Elementos
import {seccionHome, formularioCreacionUsuario, formularioInicioSesion, seccionHomeCrearReceta, formularioCreacionReseta, formularioFiltrado} from "./ui.js";

// Zona de Selectores
const main = document.querySelector("main");
const irHome = document.getElementById("ir__Home");
const irPerfil = document.getElementById("ir__Perfil");
const ir__recetas = document.getElementById("ir__recetas");


// Evento de home para ir a inicio de pagina
irHome.addEventListener("click", function(event){
    event.preventDefault(); // Quitar todas las acciones por defecto del evento click
    if(localStorage.getItem("usuarioActivo")){
        main.innerHTML = ``; // Se Borra todo el contenido del main
        main.innerHTML = seccionHomeCrearReceta; // Se agrega el nuevo contenido al main
    }else{
        main.innerHTML = ``; // Se Borra todo el contenido del main
        main.innerHTML = seccionHome; // Se agrega el nuevo contenido al main
    }

});
// Evento de perfil para ir a iniciar sesion
irPerfil.addEventListener("click", function(event){
    event.preventDefault(); // Quitar todas las acciones por defecto del evento click
    
    main.innerHTML = ``; // Se Borra todo el contenido del main
    main.innerHTML = formularioInicioSesion; // Se agrega el nuevo contenido al main
});
// Evento mostrar recetas
ir__recetas.addEventListener("click", function(event){
    event.preventDefault();
    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
    const conteniedoUsuarioActivo = JSON.parse(localStorage.getItem(usuarioActivo));
    console.log(conteniedoUsuarioActivo, conteniedoUsuarioActivo.recetas, conteniedoUsuarioActivo.recetas.length);
    
    const tarjetasRecetas = document.createElement("section");
    tarjetasRecetas.className = "taretas__recetas"; // Añadimos clase para css
    main.innerHTML = "";
    main.appendChild(tarjetasRecetas);

    for (let index = 0; index < conteniedoUsuarioActivo.recetas.length; index++) {
        const receta = conteniedoUsuarioActivo.recetas[index];
        console.log(receta); 
        const tarjetaReceta = document.createElement("div");
                tarjeta.classList.add("tarjeta__receta");
                tarjeta.innerHTML = `
                    <h2>${receta.nombre}</h2>
                    <p><strong>ingredientes:</strong> ${receta.ingredientes}</p>
                    <p><strong>instrucciones:</strong> ${receta.instrucciones}</p>
                    <p><strong>tiempo-preparacion:</strong> ${receta.tiempoPreparacion}</p>
                    <p><strong>porciones:</strong> ${receta.porciones}</p>
                    <p><strong>categoria:</strong> ${receta.categoria}</p>
                    <p><strong>dificultad:</strong> ${receta.dificultad}</p>
                `;
                tarjetasRecetas.appendChild(tarjetaReceta);
    }

}); 
// Evento de crear usuario
document.addEventListener("click", function(event){
    if(event.target.closest("#crearPerfil")){
        event.preventDefault();
        main.innerHTML = ``; // Se Borra todo el contenido del main
        main.innerHTML = formularioCreacionUsuario; // Se agrega el nuevo contenido al main
    }
});
// Evento de iniciar sesion para crear usuario
document.addEventListener("click", function(event){
    if(event.target.closest("#iniciarSesion")){
        event.preventDefault();
        main.innerHTML = ``; // Se Borra todo el contenido del main
        main.innerHTML = formularioInicioSesion; // Se agrega el nuevo contenido al main
    }
});
// Evento Registrar usuario
document.addEventListener("click", function (event) {
    if(event.target.closest("#botonregistrar")){
        event.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contraseña").value;

        // Crear objeto JS con el contenido base de un usuario
        const nuevoUsuario = {
            nombre: nombre,
            correo: correo,
            usuario: usuario,
            contraseña: contrasena,
            recetas: []
        };

        // Guardamos el nuevo perfil
        localStorage.setItem(`${usuario}`, JSON.stringify(nuevoUsuario));  

        // Volver a Pagina de Inicio de Sesion

        main.innerHTML = ``; // Eliminar todo el contenido de el Main
        main.innerHTML = formularioInicioSesion; // Se agrega el nuevo contenido al main
    }
});
// Evento Iniciar Sesion
document.addEventListener("click", function(event){
    if(event.target.closest("#botonIniciarsesion")){
        event.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;
        console.log(nombre, contrasena);
        
 
        // Validacion de usuario con local storage
        if(localStorage.getItem(nombre)){
            const usuarioValidar = JSON.parse(localStorage.getItem(nombre));
            console.log(typeof(usuarioValidar));
            
            if(usuarioValidar.contraseña == contrasena){
                alert(`Se inicio sesion de usuario: ${usuarioValidar.usuario}`);
                // Guardamos el nuevo perfil
                localStorage.setItem(`usuarioActivo`, JSON.stringify(usuarioValidar.usuario)); 
                main.innerHTML = ``; // Eliminar todo el contenido de el Main
                main.innerHTML = seccionHomeCrearReceta; // Se agrega el nuevo contenido al main
            }else{
                alert("Contraseña Incorrecta");
            }
        }else{
            alert("Usuario no existe");
        } 
    }
});
// Evento crear receta
document.addEventListener("click", function(event){
    if(event.target.closest("#crearReseta")){
        event.preventDefault();
        main.innerHTML = ``; // Se Borra todo el contenido del main
        main.innerHTML = formularioCreacionReseta; // Se agrega el nuevo contenido al main
    }
});
// Evento registrar receta
document.addEventListener("click", function (event) {
    if(event.target.closest("#botonregistrar")){
        event.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById("nombreReceta").value;
        const ingredientes = document.getElementById("ingredientes").value;
        const instrucciones = document.getElementById("instrucciones").value;
        const tiempoPreparacion = document.getElementById("tiempoPreparacion").value;
        const porciones = document.getElementById("porciones").value;
        const categoria = document.getElementById("categoria").value;
        const dificultad = document.getElementById("dificultad").value;

        // Crear objeto JS con el contenido de la receta
        const nuevaReceta = {
            nombre: nombre,
            ingredientes: ingredientes,
            instrucciones: instrucciones,
            tiempoPreparacion: tiempoPreparacion,
            porciones: porciones,
            categoria: categoria,
            dificultad: dificultad,
        };
        console.log(nuevaReceta);
        
        // Accedemos al perfil dle usuario activo
        const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
        const conteniedoUsuarioActivo = JSON.parse(localStorage.getItem(usuarioActivo));
        conteniedoUsuarioActivo.recetas = nuevaReceta;
        console.log(conteniedoUsuarioActivo);
        
        // Guardamos de nuevo el perfil con la reseta guardada
        localStorage.setItem(`${usuarioActivo}`, JSON.stringify(conteniedoUsuarioActivo));  

        // Volver a Pagina de Home

        main.innerHTML = ``; // Eliminar todo el contenido de el Main
        main.innerHTML = seccionHomeCrearReceta; // Se agrega el nuevo contenido al main
    }
});
