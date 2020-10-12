/*   Javascript Contingencia!
Desafío 1: Desarrollar un documento en javascript que reciba 4 valores por el usuario:
     * Primer Nombre 
     * Segundo Nombre 
     * Edad 
     * Jobbie 
     * Color del div
Estos valores deberán estar almacenados en distintas variables y sus contenidos
deberán estar dentro de un DIV con id "Cuadrito", el cual deberá tener un fondo 
de color especificado por el usuario, y su texto de color verde

Opcional:
     * El texto dentro del "Cuadrito" debe estar situado exactamente en el medio
     * El div debe ser creado desde el javascript 
     * El tamaño del texto deberá ser 50 px 
*/

function ingresaDatos() {

     var primerNombre = prompt('Ingrese su Primer Nombre');
     var segundoNombre = prompt('Ingrese su Segundo Nombre');
     var edad = prompt('Ingrese su Edad');
     var hobbie = prompt('Ingrese su Hobbie');
     var colorDiv = prompt('Ingrese un Color');

     var contenido = primerNombre + '<br>' + segundoNombre + '<br>' + edad + '<br>' + hobbie;
     var creaDiv = '<div id="cuadrito"></div>';
     document.write(creaDiv);

     var cuadrito = document.getElementById("cuadrito");

     cuadrito.innerHTML = contenido;

     cuadrito.style.background = colorDiv;
     cuadrito.style.color = 'green';
     cuadrito.style.fontSize = '50px';
     cuadrito.style.textAlign = 'center';

}