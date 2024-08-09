var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]

// VARIABLES
var tareasId = 1;
let cuerpoTabla = document.getElementById("cuerpo-tabla");
let formulario = document.getElementById("formulario");
let botonAgregar = document.getElementsByClassName("btn btn-success");
let botonAgregarTarea = document.getElementsByClassName("btn btn-primary");
let hiddenForm = true;
// -----


//LIMPIANDO TABLA
while (cuerpoTabla.firstChild) {
    cuerpoTabla.removeChild(cuerpoTabla.firstChild);
}
// -----

//LISTANDO TAREAS
for (const tarea of tareas) {
    agregarTarea(tarea.tarea);
}
// -----


//FUNCION BOTON AGREGAR (VERDE)
botonAgregar[0].addEventListener("click", () => {
    if (hiddenForm) {
        formulario.setAttribute("style", "display: block");
        hiddenForm = false;
    }
    else {
        formulario.setAttribute("style", "display: none");
        hiddenForm = true;
    }
});
// -----


//FUNCION BOTON ELIMINAR
function eliminarFila(id) {
    document.getElementById(id).remove();
}
// -----


//FUNCION BOTON AGREGAR TAREA (AZUL)
botonAgregarTarea[0].addEventListener("click", () => {
    let nuevaTarea = document.getElementById("nuevaTarea").value;
    agregarTarea(nuevaTarea);
    document.getElementById("nuevaTarea").value = "";
    formulario.setAttribute("style", "display: none");
    hiddenForm = true;
});

function agregarTarea(tareaNueva) {
    cuerpoTabla.innerHTML += `  <tr id="rowTable${tareasId}">           
                                    <td>${tareaNueva}</td>
                                    <td>
                                        <input type="button" class="btn btn-danger" value="Finalizar" onclick = eliminarFila("rowTable${tareasId}")>
                                    </td>
                                </tr>  
                                `;
    tareasId++;
}