console.log(document.title);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

let gen1=document.getElementById('gen-1') ;

gen1.innerText='Generasión 1 Pokimon';


//Cambia el color de fondo de la primera generación de Pokimon. imagino que se refiere al fondo del contenedor 

let cajapokemons1=document.querySelector('.infocard-list ');

cajapokemons1.style.background = 'aquamarine';


//Imprime por consola la URL de la página.

console.log(document.URL);


//Imprime por consola el dominio de la página.
console.log( window.location.hostname);


//Imprime todos los nodos de imagen. Imagino que por consola

console.log(document.querySelectorAll('img'));


//Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"


let imagenes= document.getElementsByClassName('img-sprite'); //lo mete como en un array

for (let i=0; i<imagenes.length; i++){

    imagenes[i].src='https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
}


//Y bonus si puedo: Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying 


let voladores = document.getElementsByClassName('infocard-lg-data text-muted');

for (let i= 0; i<voladores.length; i++) {
     
     if (voladores[i].innerHTML.includes('itype flying')) {

        voladores[i].style.background = 'thistle';
    }
 } 
