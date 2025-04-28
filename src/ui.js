

// HTML Home
export const seccionHome = `
<section class="section__contenidoHome">
    <!-- Contenedor: ¿Qué es esta plataforma?  -->
    <div class="div__info-plataforma">
        <h2>¿Qué es esta plataforma?</h2>
        <p>
        ¡Bienvenido registro y gestion de recetas en el cual se busca el manejo ordenado de recetas de cocina, guardado de las mismas y filtrado para futuras ocaciones todo esto usando un perfil de usuario.
        </p>
    </div>
    <!-- Contenedor: Descripcion -->
    <div class="div__info-aplicacion">
        <h2>¿Para que es esta plataforma?</h2>
        <p>
        Aplicación web que permita a los usuarios registrar y gestionar sus recetas. Los usuarios podrán añadir,
        modificar y eliminar recetas, cada una con información detallada. La aplicación deberá estar desarrollada en JavaScript
        puro, utilizando HTML y CSS para la interfaz.
        </p>
    </div>
</section>`;
// HTML HomeCrearReceta
export const seccionHomeCrearReceta = `
<section class="section__contenidoHome">
    <!-- Contenedor: ¿Qué es esta plataforma?  -->
    <div class="div__info-plataforma">
        <h2>¿Qué es esta plataforma?</h2>
        <p>
        ¡Bienvenido registro y gestion de recetas en el cual se busca el manejo ordenado de recetas de cocina, guardado de las mismas y filtrado para futuras ocaciones todo esto usando un perfil de usuario.
        </p>
    </div>
    <!-- Contenedor: Descripcion -->
    <div class="div__info-aplicacion">
        <h2>¿Para que es esta plataforma?</h2>
        <p>
        Aplicación web que permita a los usuarios registrar y gestionar sus recetas. Los usuarios podrán añadir,
        modificar y eliminar recetas, cada una con información detallada. La aplicación deberá estar desarrollada en JavaScript
        puro, utilizando HTML y CSS para la interfaz.
        </p>
    </div>
    <div class="div__crearReceta">
    Ingresa aqui para crear tu receta<a id="crearReseta" href="#">Crear Reseta</a>
  </div>
</section>`;
// HTML Formulario de Creacion de Usuario
export const formularioCreacionUsuario = `
<section class="Section__creacionUSuario">
    <h2>Creacion de Perfil</h2>
    <form>
        <input type="text" id="nombre" placeholder="Nombre" required>
        <input type="email" id="correo" placeholder="correo" required>
        <input type="text" id="usuario" placeholder="usuario" required>
        <input type="text" id="contraseña" placeholder="contraseña" required>
        <button id="botonregistrar" type="submit">Registrar</button>
    </form>
    <div class="div__resgistrar">
        ¿Ya tienes una cuenta? <a id="iniciarSesion" href="#">Iniciar Sesion</a>
    </div>
</section>
`;
// HTML Formulario de inicio de sesion
export const formularioInicioSesion = `
<section class="section__iniciarSesion">
  <h2>Iniciar Sesión</h2>
  <form>
    <input type="text" id="usuario" placeholder="Usuario" required>
    <input type="password" id="contrasena" placeholder="Contraseña" required>
    <button id="botonIniciarsesion" type="submit">Entrar</button>
  </form>
  <div class="div__resgistrar">
    ¿No tienes cuenta? <a id="crearPerfil" href="#">Crear cuenta</a>
  </div>
</section>`;
// HTML Formulario de creacion de receta
export const formularioCreacionReseta= `
<section class="Section__creacionReceta">
    <h2>Creacion de receta</h2>
    <form>
        <input type="text" id="nombreReceta" placeholder="Nombre" required>
        <input type="text" id="ingredientes" placeholder="Leche, Azucar..." required>
        <input type="text" id="instrucciones" placeholder="Agregar 1 tasa de arina..." required>
        <input type="number" id="tiempoPreparacion" placeholder="1 Hora..."  required>
        <input type="number" id="porciones" placeholder="1 porcion..." required>
        <select name="categoria" id="categoria">
            <option value="">Categoria</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Cena">Cena</option>
            <option value="Postre">Postre</option>
        </select>
        <select name="dificultad" id="dificultad">
            <option value="">Dificultad</option>
            <option value="Facil">Facil</option>
            <option value="Medio">Medio</option>
            <option value="Dificil">Dificil</option>
        </select>
        <button id="botonregistrar" type="submit">Registrar</button>
    </form>
</section>`;
// HTML Formulario de filtraddo
export const formularioFiltrado= `
<section class="Section__buscar">
    <h2>Busqued de recetas</h2>
    <form>
        <input type="text" id="nombreReceta" placeholder="Nombre" required>
        <input type="text" id="categoria" placeholder="Desayuno. Almuerzo, Cena..." required>
        <input type="text" id="nivelDificultad" placeholder="Facil, Medio...." required>
        <button id="botonBuscar" type="submit">Buscar...</button>
    </form>
</section>`;