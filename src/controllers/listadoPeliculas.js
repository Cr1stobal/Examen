let peliculas=[
    {
        nombre:"Hallowen la noche final",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=4cc9a9c8-c7bb-4462-9675-2dd057e889f0",
        sinopsis:"Cuatro años después de la desaparición de Michael Myers, el joven Corey lo encuentra maltrecho en las alcantarillas. Poco a poco, se establece un extraño vínculo entre estos dos personajes unidos por la venganza y la locura"


    },
    {
        nombre:"La noche del demonio",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/jeeppers.jpg?alt=media&token=c6c07002-c476-4095-900f-011047e967dc",
        sinopsis:"Josh y Renai Lambert se han mudado con sus hijos a la casa de la madre de Josh, esperando olvidar el pasado y comenzar una nueva vida. Sin embargo, pronto experimentan visiones extrañas y fenómenos relacionados con los espíritus y un oscuro secreto."
    },
    {
        nombre:"Minions",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/minions2posternuevo.jpg?alt=media&token=dc7c97ca-ebb7-4342-b0c9-a9fd7b0f1af1",
        sinopsis:"En los años 70, Gru crece siendo un gran admirador de Los salvajes seis, un supergrupo de villanos. Para demostrarles que puede ser malvado, Gru idea un plan con la esperanza de formar parte de la banda. Por suerte, cuenta con la ayuda de sus fieles seguidores, los Minions, siempre dispuestos a sembrar el caos."
    },
    {
        nombre:"Tadeo",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/tadeo3nuevoposter.jpg?alt=media&token=3b31d4c0-3c0b-4317-ba8a-fc47a47e2a84",
        sinopsis:"A Tadeo le encantaría que sus colegas arqueólogos le aceptasen como a uno más, pero siempre acaba liándola: destroza un sarcófago y desata un conjuro que pone en peligro la vida de sus amigos, Momia, Jeff y Belzoni. Con todos en contra y solo ayudado por Sara, Tadeo emprenderá una huida llena de aventuras para encontrar la manera de acabar con la maldición de la momia."
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:"Una secuela que seguirá explorando el incomparable mundo de Wakanda y todos los ricos y variados personajes presentados en la película de 2018."
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:""
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:""
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:""
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:""
    },
    {
        nombre: "Wakanda forever",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/wakanda.jpg?alt=media&token=5716b762-e877-4512-99ce-4e09cce7f690",
        sinopsis:""
    }
]

//creamos una referencia al espacio HTML donde queremos
//hacer el render(PINTAR ETIQUETAS)
let etiquetaFila=document.getElementById("fila")

//SI YA TENGO DATOS QUE NORMALMENTE LLEGAN AL FRONT
//COMO UN ARREGLO DE OBJETOS DEBEMOS RECORRER Y DEPURAR
//DUCHA INFORMACION
peliculas.forEach(function(pelicula){
    //PARA PINTAR LA INFORMACION DE CADA PELICULA
    //DEBEMOS APLICAR UNA TECNICA CONOCIDA COMO TRAVERSING
    //TRAVERSING=CREAR ETIQUETAS DE HTML DESDE JS
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster=document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src=pelicula.poster

    let nombre=document.createElement("h3")
    nombre.classList.add("text-center","fw-bold","subrayado")
    nombre.textContent=pelicula.nombre

    let duracion=document.createElement("h5")
    duracion.classList.add("text-start")
    duracion.textContent="Duración: "+pelicula.duracion+" Min"

    let sinopsis=document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis

    //PADRES E HIJOS
    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(sinopsis)

    

})


//Escuchando el evento de clic en alguna pelicula de la cartelera 
let peliculaSeleccionada={}
etiquetaFila.addEventListener("click",function(evento){
    if(evento.target.classList.contains("img-fluid")){
        //Obteniendo los datos de la pelicula
        peliculaSeleccionada.imagen=evento.target.parentElement.querySelector('img').src
        peliculaSeleccionada.titulo=evento.target.parentElement.querySelector('h3').textContent
        peliculaSeleccionada.duracion=evento.target.parentElement.querySelector('h5').textContent
        peliculaSeleccionada.sinopsis=evento.target.parentElement.querySelector('p').textContent

     //Enviando nuestros datos de la pelicula seleccionada a la memoria
     localStorage.setItem("pelicula",JSON.stringify(peliculaSeleccionada))
     window.location.href="./src/views/verinfopelicula.html"
    }
}) 

