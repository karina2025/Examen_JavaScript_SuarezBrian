# Examen JavaScript - Registro y gestion de recetas

¡Bienvenido registro y gestion de recetas en el cual se busca el manejo ordenado de recetas de cocina, guardado de las mismas y filtrado para futuras ocaciones todo esto usando un perfil de usuario.

---

## 🌟 Descripción

Crear una aplicación web que permita a los usuarios registrar y gestionar sus recetas. Los usuarios podrán añadir,
modificar y eliminar recetas, cada una con información detallada. La aplicación deberá estar desarrollada en JavaScript
puro, utilizando HTML y CSS para la interfaz.

---

## 🖥️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 🚀 Funcionalidades

CRUD (Crear, Leer, Actualizar, Eliminar):
​
Crear: Permitir al usuario añadir una nueva receta con los siguientes campos:
○​ Nombre de la receta.
○​ Ingredientes.
○​ Instrucciones de preparación.
○​ Tiempo de preparación.
○​ Número de porciones.
○​ Categoría (Desayuno, Almuerzo, Cena, Postre, etc.).
○​ Nivel de dificultad (Fácil, Medio, Difícil).
​
Validaciones:
○​ El nombre de la receta no puede estar vacío.
○​ El tiempo de preparación debe ser un número válido y positivo.
○​ El número de porciones debe ser un número entero positivo.
○​ La categoría y nivel de dificultad deben seleccionarse de una lista predefinida.
​
Leer: Mostrar una lista de todas las recetas almacenadas con la información relevante.
​
Actualizar: Permitir al usuario modificar los detalles de una receta existente.
​
Eliminar: Permitir al usuario eliminar una receta.
Filtros y Búsqueda:
​
Implementar un sistema de filtros para que el usuario pueda ver sus recetas por:
○​ Categoría (Ej. Desayuno, Almuerzo, etc.).
○​ Nivel de dificultad (Fácil, Medio, Difícil).
○​ Incluir una barra de búsqueda para encontrar una receta por su nombre.

---

## 🗂️ Estructura del Proyecto
``` 
├── 📂 assets/                                     # Código fuente
│   ├── 📂 font/                                   # Fuentes
│   ├── 📂 img/                                    # Imágenes
├── 📂 data/                                       # Archivos Json esctruturar
│   ├── datos.json                                 # Estructura de darts de perfiles
├── 📂 src/                                        # Código fuente 
│   ├── main.js                                    # Archivo principal, punto de entrada
│   ├── ui.js                                      # Modulos de HTML para incertar
├── 📂 style/                                      # Código fuente 
│   │   ├── main.css                               # Estilos principales
│   │   ├── variables.css                          # Variables de colores y temas 
├── README.md                                      # Instrucciones generales
├── index.htm                                      # Página principal 
```
---

## 📦 Instalación y Uso

1. Clona este repositorio:
   ```
   git clone 
Abre el archivo index.html en tu navegador (doble clic o desde VSCode con Live Server).

(Opcional) Si necesitas trabajar con datos locales, asegúrate de que el navegador permita leer archivos JSON locales o usa una extensión tipo [Live Server].


🧠 Autores
Brian Fair Suarez Porras – Desarrollador
(https://github.com/Brian-s47)

📜 Licencia
Proyecto con fines educativos - Campus de Programadores
---