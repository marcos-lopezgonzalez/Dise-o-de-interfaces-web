/*
 * PROYECTO POKÉDEX - ARCHIVO DEL ALUMNADO
 *
 * OBJETIVO GENERAL:
 * - Mostrar una galería de Pokémon usando HTML + CSS + JavaScript.
 *
 * PISTAS GENERALES:
 * 1. Crea una estructura de datos (por ejemplo, un array) con varios Pokémon.
 *    Cada Pokémon puede ser un objeto con propiedades como:
 *    - nombre
 *    - numero
 *    - tipo
 *    - rutaImagen (usa las imágenes de la carpeta img)
 *
 * 2. Recorre ese array con un bucle (for, for...of, etc.).
 *
 * 3. Por cada Pokémon:
 *    - Crea un elemento contenedor (por ejemplo, un div).
 *    - Añade la clase "pokemon-card" para aplicar estilos desde el CSS.
 *    - Crea y añade los elementos necesarios (img, h2, p, etc.).
 *
 * 4. Inserta cada tarjeta dentro del contenedor con id "pokedex"
 *    (lo tienes definido en el index.html).
 *
 * IMPORTANTE:
 * - Usa solo lo que hemos visto en clase (nada de frameworks ni cosas avanzadas).
 * - Si te atascas, repasa los ejemplos hechos en clase antes de mirar internet.
 */

const contador = document.getElementById("contador");
const pokedexContainer = document.getElementById("pokedex");
const pokemons = [
  {
    nombre: "Pikachu",
    nivel: 25,
    tipo: "Eléctrico",
    descripcion: "Ratón electrico muy famoso",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    nombre: "Charmander",
    nivel: 16,
    tipo: "Fuego",
    descripcion: "Dragón de fuego",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    nombre: "Squirtle",
    nivel: 15,
    tipo: "Agua",
    descripcion: "Tortuga de agua",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    nombre: "Bulbasur",
    nivel: 14,
    tipo: "Planta",
    descripcion: "Pokemon tipo planta",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    nombre: "Eevee",
    nivel: 18,
    tipo: "Normal",
    descripcion: "Puede evolucionar",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
  },
  {
    nombre: "Jolteon",
    nivel: 30,
    tipo: "Eléctrico",
    descripcion: "Evolución eléctrica de Eevee",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
  },
  {
    nombre: "Vaporeon",
    nivel: 30,
    tipo: "Agua",
    descripcion: "Evolución acuática de Eevee",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
  },
  {
    nombre: "Flareon",
    nivel: 30,
    tipo: "Fuego",
    descripcion: "Evolución de fuego de Eevee",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
  },
  {
    nombre: "Chikorita",
    nivel: 12,
    tipo: "Planta",
    descripcion: "Desprende un aroma relajante",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
  },
  {
    nombre: "Mareep",
    nivel: 13,
    tipo: "Eléctrico",
    descripcion: "Muy útil para iluminar zonas oscuras",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
  },
];
// PISTA: espera a que el documento esté cargado antes de tocar el DOM
document.addEventListener("DOMContentLoaded", function () {
  // PISTA: selecciona el contenedor donde irán las tarjetas
  /*
   * PASO 1: CREA TU ARRAY DE POKÉMON
   *
   * PISTA:
   * - Crea un array llamado, por ejemplo, "pokemons".
   * - Cada elemento será un objeto con la información del Pokémon.
   * - Ejemplo de estructura (no lo copies tal cual, créalo tú):
   *   {
   *      nombre: "Pikachu",
   *      numero: 25,
   *      tipo: "Eléctrico",
   *      imagen: "img/pikachu.png"
   *   }
   */
  // const pokemons = [  ];
  // PISTA: define aquí dentro tus Pokémon
  /*
   * PASO 2: RECORRER EL ARRAY Y CREAR LAS TARJETAS
   *
   * PISTA:
   * - Usa un bucle para recorrer el array de pokemons.
   * - Dentro del bucle:
   *   - Crea un div para la tarjeta.
   *   - Añade la clase "pokemon-card".
   *   - Crea elementos para la imagen, el nombre y otros datos.
   *   - Rellena el contenido de cada elemento con la información del Pokémon.
   *   - Añade la imagen usando la ruta de la carpeta img.
   *   - Añade la tarjeta al contenedor pokedexContainer.
   */
  // PISTA: escribe aquí tu bucle cuando tengas el array creado
  // for ( ... ) {
  //     // Dentro del bucle creas la tarjeta
  // }
  /*
   * EXTRA (OPCIONAL):
   * - Puedes añadir filtros por tipo de Pokémon.
   * - Puedes mostrar el número de Pokémon totales.
   * - Puedes ordenar el array por número o nombre antes de pintarlo.
   * Estos extras solo si te sobra tiempo y ya tienes lo básico funcionando.
   */
});

const filtros = document.getElementById("filtros");
const filtroNombre = document.getElementById("filtroNombre");

filtroNombre.addEventListener("input", function () {
  let nombre = this.value.toLowerCase().trim();
  aplicarFiltroNombre(nombre);
});

filtros.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const filtro = e.target.textContent.toLowerCase().trim();
    aplicarFiltro(filtro);
  }
});

function aplicarFiltroNombre(nombre) {
  let pokemosFiltrados = [];
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].nombre.toLowerCase().trim().includes(nombre)) {
      pokemosFiltrados.push(pokemons[i]);
    }
  }
  pintarPokemons(pokemosFiltrados);
}

function aplicarFiltro(filtro) {
  if (filtro === "todos") {
    pintarPokemons(pokemons);
    return;
  } else {
    let pokemosFiltrados = [];
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].tipo.toLowerCase() === filtro) {
        pokemosFiltrados.push(pokemons[i]);
      }
    }
    pintarPokemons(pokemosFiltrados);
  }
}

function pintarPokemons(listaPokemons) {
  pokedexContainer.innerHTML = "";

  for (let i = 0; i < listaPokemons.length; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.className = "pokemon-card";

    let img = document.createElement("img");
    img.src = listaPokemons[i].img;

    let divNombreNivel = document.createElement("div");

    let h3Nombre = document.createElement("h3");
    h3Nombre.textContent = listaPokemons[i].nombre;

    let pNivel = document.createElement("p");
    pNivel.className = "pNivel";
    pNivel.textContent = "Nv." + listaPokemons[i].nivel;

    divNombreNivel.appendChild(h3Nombre);
    divNombreNivel.appendChild(pNivel);

    let pTipo = document.createElement("p");
    pTipo.className = "pTipo";
    pTipo.textContent = listaPokemons[i].tipo;

    switch (listaPokemons[i].tipo) {
      case "Fuego":
        pTipo.style.color = "red";
        pTipo.style.backgroundColor = "rgb(252, 176, 176)";
        tarjeta.classList.add("fuego");
        break;
      case "Eléctrico":
        pTipo.style.color = "rgb(154, 156, 41);";
        pTipo.style.backgroundColor = "rgb(252, 244, 176)";
        tarjeta.classList.add("electrico");
        break;
      case "Agua":
        pTipo.style.color = "blue";
        pTipo.style.backgroundColor = "rgb(176, 224, 252)";
        tarjeta.classList.add("agua");
        break;
      case "Planta":
        pTipo.style.color = "green";
        pTipo.style.backgroundColor = "rgb(176, 252, 189)";
        tarjeta.classList.add("planta");
        break;
      case "Normal":
        pTipo.style.color = "black";
        pTipo.style.backgroundColor = "silver";
        tarjeta.classList.add("normal");
        break;
    }

    let pDescripcion = document.createElement("p");
    pDescripcion.textContent = listaPokemons[i].descripcion;

    tarjeta.appendChild(img);
    tarjeta.appendChild(divNombreNivel);
    // tarjeta.appendChild(h3Nombre);
    // tarjeta.appendChild(pNivel);
    tarjeta.appendChild(pTipo);
    tarjeta.appendChild(pDescripcion);

    pokedexContainer.appendChild(tarjeta);
  }

  contador.textContent = `Mostrando ${listaPokemons.length} de ${pokemons.length} pokemons`;
}

pintarPokemons(pokemons);
