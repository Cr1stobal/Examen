//Obeteniendo datos de la memoria
let peliculaConsultadaEnMemoria=JSON.parse(localStorage.getItem("pelicula"))
console.log(peliculaConsultadaEnMemoria)

//asignando valores a las etiquetas que quiero controlar
let etiquetaImagen=document.getElementById("imagenPelicula")
etiquetaImagen.src=peliculaConsultadaEnMemoria.imagen

let etiquetaTitulo=document.getElementById("nombrePelicula")
etiquetaTitulo.textContent=peliculaConsultadaEnMemoria.titulo

let etiquetaSinopsis=document.getElementById("sinopsisPelicula")
etiquetaSinopsis.textContent=peliculaConsultadaEnMemoria.sinopsis
