//peticion tareas
function cargarTareas() {
  fetch("/backend/obtener_tareas.php")
    .then((respuesta) => respuesta.json())
    .then((tareas) => {
      const lista = document.getElementById("lista-tareas");

      lista.innerHTML = "";

      tareas.forEach((tarea) => {
        const li = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = tarea.titulo;

        if (Number(tarea.completada) === 1) {
          /// tachamos la completadas
          texto.style.textDecoration = "line-through";
        }

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.dataset.id = tarea.id;

        botonEliminar.addEventListener("click", () => {
          console.log(botonEliminar.dataset.id);
          const idTarea = botonEliminar.dataset.id;
          const datos = {
            id: idTarea,
          };
          fetch("/backend/eliminar_tareas.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
          }).then((respuesta) => {
            cargarTareas();
          });
        });
        const botonComple = document.createElement("button");
        botonComple.textContent = "Completada";
        botonComple.dataset.id = tarea.id;

        botonComple.addEventListener("click", () => {
          const idTarea = botonComple.dataset.id;
          const nuevoEstado = Number(tarea.completada) === 0 ? 1 : 0;

          const datos = {
            id: idTarea,
            completada: nuevoEstado,
          };
          fetch("/backend/completada.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
          }).then((respuesta) => {
            cargarTareas();
          });
        });

        li.appendChild(texto);
        li.appendChild(botonEliminar);
        li.appendChild(botonComple);
        lista.appendChild(li);
      });
    });
}
cargarTareas();
// obetener tareas usuario
const boton = document.getElementById("boton_añadir");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", () => {
  console.log("Has pulsado el boton");

  const titulo_texto = titulo.value;

  // crear tarea
  const datos = {
    titulo: titulo_texto,
  };

  fetch("/backend/crear_tareas.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  }).then((respuesta) => {
    cargarTareas();
  });
});
