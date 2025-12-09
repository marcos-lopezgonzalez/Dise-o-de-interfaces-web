/* =======================================================
   DATOS DE LOS POKÉMON
   ======================================================= */

const pokemons = [
  {
    id: 1,
    nombre: "Pikachu",
    tipo: "Eléctrico",
    nivel: 25,
    descripcion: "Un ratón eléctrico muy famoso.",
    imagen: "img/pikachu.png",
    esFavorito: false,
  },
  {
    id: 2,
    nombre: "Charmander",
    tipo: "Fuego",
    nivel: 18,
    descripcion: "Su cola arde con una llama que indica su salud.",
    imagen: "img/charmander.png",
    esFavorito: false,
  },
  {
    id: 3,
    nombre: "Squirtle",
    tipo: "Agua",
    nivel: 15,
    descripcion: "Lanza agua a presión desde su boca.",
    imagen: "img/squirtle.png",
    esFavorito: false,
  },
  {
    id: 4,
    nombre: "Bulbasaur",
    tipo: "Planta",
    nivel: 16,
    descripcion: "Tiene una semilla en el lomo que crece con él.",
    imagen: "img/bulbasaur.png",
    esFavorito: false,
  },
  {
    id: 5,
    nombre: "Mareep",
    tipo: "Eléctrico",
    nivel: 12,
    descripcion: "Su lana almacena electricidad estática.",
    imagen: "img/mareep.png",
    esFavorito: false,
  },
  {
    id: 6,
    nombre: "Vaporeon",
    tipo: "Agua",
    nivel: 30,
    descripcion: "Puede disolverse en el agua y mimetizarse.",
    imagen: "img/vaporeon.png",
    esFavorito: false,
  },
  {
    id: 7,
    nombre: "Eevee",
    tipo: "Normal",
    nivel: 14,
    descripcion: "Tiene múltiples posibilidades de evolución.",
    imagen: "img/eevee.png",
    esFavorito: false,
  },
  {
    id: 8,
    nombre: "Flareon",
    tipo: "Fuego",
    nivel: 32,
    descripcion: "Su temperatura corporal es extremadamente alta.",
    imagen: "img/flareon.png",
    esFavorito: false,
  },
  {
    id: 9,
    nombre: "Jolteon",
    tipo: "Eléctrico",
    nivel: 31,
    descripcion: "Su cuerpo está cargado de electricidad.",
    imagen: "img/jolteon.png",
    esFavorito: false,
  },
  {
    id: 10,
    nombre: "Chikorita",
    tipo: "Planta",
    nivel: 10,
    descripcion: "Libera un suave aroma relajante desde su hoja.",
    imagen: "img/chikorita.png",
    esFavorito: false,
  },
];

/* =======================================================
   REFERENCIAS AL DOM
   ======================================================= */

const contenedor = document.getElementById("contenedor-pokemon");
const contador = document.getElementById("contador");
const mensajeVacio = document.getElementById("mensaje-vacio");

const inputBuscador = document.getElementById("buscador");
const botonesTipo = document.querySelectorAll(".btn-tipo");
const btnTema = document.getElementById("btn-tema");
const btnFavoritos = document.getElementById("btn-favoritos");

/* =======================================================
   ESTADO DE LA APLICACIÓN
   ======================================================= */

const estado = {
  tipoActivo: "todos", // "todos", "Fuego", "Agua", etc.
  textoBusqueda: "", // texto del input buscador
  soloFavoritos: false, // true = ver solo favoritos
  temaOscuro: false, // true = modo oscuro activo
};

/* =======================================================
   FUNCIÓN: obtenerListaFiltrada
   ======================================================= */

function obtenerListaFiltrada() {
  let lista = pokemons;

  // 1) Filtro por tipo
  if (estado.tipoActivo !== "todos") {
    lista = lista.filter(function (pokemon) {
      return pokemon.tipo === estado.tipoActivo;
    });
  }

  // 2) Filtro por nombre
  // TODO ALUMNO:
  // Filtrar por nombre usando estado.textoBusqueda
  // Usa includes() y toLowerCase()
  // });
  if (estado.textoBusqueda !== "") {
    lista = lista.filter(function (pokemon) {
      return pokemon.nombre.toLowerCase().includes(estado.textoBusqueda);
    });
  }

  // 3) Filtro por favoritos
  if (estado.soloFavoritos === true) {
    // TODO ALUMNO:
    // Filtrar para dejar solo los pokémon con esFavorito === true
    // Pista:
    // Usa lista.filter(function (pokemon) {
    //   return ... ;
    // });
    lista = lista.filter(function (pokemon) {
      return pokemon.esFavorito;
    });
  }

  return lista;
}

/* =======================================================
   FUNCIÓN: pintarPokemons
   - Limpia el contenedor
   - Actualiza contador y mensaje vacío
   - CREA LAS TARJETAS DINÁMICAMENTE (TRABAJO ALUMNO)
   ======================================================= */

function pintarPokemons(listaPokemons) {
  // Vaciar contenedor
  contenedor.innerHTML = "";

  // Mostrar / ocultar mensaje de "no hay resultados"
  if (listaPokemons.length === 0) {
    mensajeVacio.classList.remove("oculto");
  } else {
    mensajeVacio.classList.add("oculto");
  }

  // Actualizar contador
  let textoContador =
    "Mostrando " + listaPokemons.length + " de " + pokemons.length + " Pokémon";

  if (estado.tipoActivo !== "todos") {
    textoContador += " (Tipo: " + estado.tipoActivo + ")";
  }
  if (estado.soloFavoritos) {
    textoContador += " [Solo favoritos]";
  }

  contador.textContent = textoContador;

  /* =================== TRABAJO ALUMNO ===================
     Implementa la renderización dinámica de las tarjetas Pokémon.
     
     Recuerda que cada tarjeta debe:
     - Ser un article con la clase apropiada y su identificador
     - Contener todos los elementos necesarios (imagen, nombre, tipo, etc.)
     - Mostrar visualmente si es favorito o no
     - Estar correctamente estructurada en el DOM
     
     Consulta el archivo styles.css para conocer las clases CSS disponibles.
     Inspecciona el HTML de ejemplo si necesitas ver la estructura esperada.
  ====================================================== */

  // TODO ALUMNO: implementa aquí la generación dinámica de tarjetas.

  /*
  for (let i = 0; i < listaPokemons.length; i++) {
    const pokemon = listaPokemons[i];

    // 1. Crear article
    // 2. Crear y configurar img, nombre, tipo, nivel, descripcion, iconoFavorito
    // 3. Añadir clases y contenido
    // 4. Montar la tarjeta
    // 5. Añadirla al contenedor
  }
  */

  for (let i = 0; i < listaPokemons.length; i++) {
    let tarjeta = document.createElement("article");
    tarjeta.classList.add("pokemon-card");
    2;

    tarjeta.dataset.id = listaPokemons[i].id;

    let imagen = document.createElement("img");
    imagen.classList.add("pokemon-card__img");
    imagen.src = listaPokemons[i].imagen;

    let favorito = document.createElement("span");
    favorito.textContent = "★";
    favorito.classList.add("pokemon-card__favorito");

    if (listaPokemons[i].esFavorito) {
      favorito.classList.add("pokemon-card__favorito--on");
    } else {
      favorito.classList.add("pokemon-card__favorito--off");
    }

    let pNombre = document.createElement("p");
    pNombre.classList.add("pokemon-card__nombre");
    pNombre.textContent = listaPokemons[i].nombre;

    let pNivel = document.createElement("p");
    pNivel.classList.add("pokemon-card__nivel");
    pNivel.textContent = "Nv." + listaPokemons[i].nivel;

    let pTipo = document.createElement("p");
    pTipo.classList.add("pokemon-card__tipo");
    pTipo.textContent = listaPokemons[i].tipo;

    let pDescripcion = document.createElement("p");
    pDescripcion.classList.add("pokemon-card__descripcion");
    pDescripcion.textContent = listaPokemons[i].descripcion;

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(favorito);
    tarjeta.appendChild(pNombre);
    tarjeta.appendChild(pNivel);
    tarjeta.appendChild(pTipo);
    tarjeta.appendChild(pDescripcion);

    contenedor.appendChild(tarjeta);
  }
}

/* =======================================================
   FUNCIÓN: toggleFavorito
   ======================================================= */

function toggleFavorito(idPokemon) {
  /*
    TODO ALUMNO:

    1. Recorre el array "pokemons" con un for:

       for (let i = 0; i < pokemons.length; i++) { ... }

    2. Si encuentras el que tenga pokemons[i].id === idPokemon,
       cambia su esFavorito

     3. Usa "break" para salir del bucle una vez encontrado.

    4. Llama a refrescarVista();
  */

  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].id === idPokemon) {
      pokemons[i].esFavorito = !pokemons[i].esFavorito;
      break;
    }
  }
  refrescarVista();
}

/* =======================================================
   FUNCIÓN: toggleTema
   ======================================================= */

function toggleTema() {
  /*
    TODO ALUMNO:

    1. Cambiar estado.temaOscuro:

    2. Si estado.temaOscuro es true:
         - añadir "theme-dark" al body
         - btnTema.textContent = "☀️ Volver a modo claro"

       Si es false:
         - quitar "theme-dark"
         - btnTema.textContent = "🌙 Activar modo oscuro"
  */

  estado.temaOscuro = !estado.temaOscuro;

  if (estado.temaOscuro) {
    document.body.classList.add("theme-dark");
    btnTema.textContent = "☀️ Volver a modo claro";
  } else {
    document.body.classList.remove("theme-dark");
    btnTema.textContent = "🌙 Activar modo oscuro";
  }
}

/* =======================================================
   FUNCIÓN: actualizarBotonFavoritos
   ======================================================= */

function actualizarBotonFavoritos() {
  /*
    TODO ALUMNO:

    1. Si estado.soloFavoritos es true:
         - btnFavoritos.classList.add("btn--favoritos-activo");
         - btnFavoritos.textContent = "Ver todos los Pokémon";

    2. Si es false:
         - btnFavoritos.classList.remove("btn--favoritos-activo");
         - btnFavoritos.textContent = "Ver solo favoritos ⭐";
  */
  if (estado.soloFavoritos) {
    btnFavoritos.classList.add("btn--favoritos-activo");
    btnFavoritos.textContent = "Ver todos los Pokémon";
  } else {
    btnFavoritos.classList.remove("btn--favoritos-activo");
    btnFavoritos.textContent = "Ver solo favoritos ⭐";
  }
}

/* =======================================================
   FUNCIÓN: refrescarVista
   ======================================================= */

function refrescarVista() {
  const listaFiltrada = obtenerListaFiltrada();
  pintarPokemons(listaFiltrada);
}

/* =======================================================
   EVENTOS
   ======================================================= */

/* Buscador */

inputBuscador.addEventListener("input", function () {
  estado.textoBusqueda = inputBuscador.value.trim().toLowerCase();
  refrescarVista();
});

/* Botones de tipo */

for (let i = 0; i < botonesTipo.length; i++) {
  botonesTipo[i].addEventListener("click", function () {
    const tipoSeleccionado = botonesTipo[i].dataset.tipo;
    estado.tipoActivo = tipoSeleccionado;

    for (let j = 0; j < botonesTipo.length; j++) {
      botonesTipo[j].classList.remove("btn-tipo--activo");
    }
    botonesTipo[i].classList.add("btn-tipo--activo");

    refrescarVista();
  });
}

/* Botón tema */

btnTema.addEventListener("click", function () {
  toggleTema();
});

/* Botón favoritos */

btnFavoritos.addEventListener("click", function () {
  /*
    TODO ALUMNO:

    1. Cambiar estado.soloFavoritos (true <-> false).
    2. Llamar a actualizarBotonFavoritos().
    3. Llamar a refrescarVista().
  */
  estado.soloFavoritos = !estado.soloFavoritos;
  actualizarBotonFavoritos();
  refrescarVista();
});

/* Delegación en contenedor para la estrella de favoritos */

contenedor.addEventListener("click", function (event) {
  /*
    TODO ALUMNO:

    1. Comprobar si el click ha sido en la estrella:
     
    2. Buscar la tarjeta:
       
    3. Leer el id:
    
    4. Llamar a toggleFavorito(id);
  */

  if (event.target.tagName === "SPAN") {
    let tarjeta = event.target.closest(".pokemon-card");
    let id = tarjeta.dataset.id;
    toggleFavorito(Number(id));
  }
});

/* =======================================================
   INICIALIZACIÓN
   ======================================================= */

document.addEventListener("DOMContentLoaded", function () {
  refrescarVista();
  // Opcional avanzado: aquí podrían restaurar tema/favoritos de localStorage.
});
