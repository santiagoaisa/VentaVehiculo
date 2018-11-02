"use strict";

var baseCliente = [];

window.addEventListener("load", initComponentes);

/*
Metodo para iniciar el localStorage
*/
function initComponentes() {
    if ("BASECLIENTE" in localStorage) {
        recuperarBaseCliente();

        for (const cliente of baseCliente) {
            mostrarClienteRegistrado(cliente);
        }
    } else {
        registrarBaseCliente();
    }
}

/*
Metodo para recuperar la base de clientes del localStorage
*/
function recuperarBaseCliente() {
    baseCliente = JSON.parse(localStorage.getItem("BASECLIENTE"));
}

/*
Metodo para guardar la base de clientes del localStorage
*/
function registrarBaseCliente() {
    localStorage.setItem("BASECLIENTE", JSON.stringify(baseCliente));
}


/*
Metodo para registrar al cliente
*/
function registrar() {
    let btnRegistrar = document.getElementById("btnRegistrar");
    let nombreCliente = document.getElementById("txtNombre").value;
    let dniCliente = document.getElementById("txtDni").value;

    if (!validarDatos(dniCliente, "DNI del Cliente")) {
        return;
    }

    if (!validarDatos(nombreCliente, "Nombre del Cliente")) {
        return;
    }

    if (btnRegistrar.value === "Registrar") {
        registrarCliente();
    } else {
        actualizarCliente();
    }

}

function validarDatos(valor, campo) {
    if (valor == "") {
        alert(`El ${campo} no puede estar vacio`);
        return false;
    }

    return true;
}


function registrarCliente() {
    let nombreCliente = document.getElementById("txtNombre").value;
    let dniCliente = document.getElementById("txtDni").value;

    if (validarCliente(dniCliente)) {

        alert("DNI Duplicado");
        //si esta duplicado ya no continua
        return;
    }

    let cliente = new Cliente(nombreCliente, dniCliente);
    baseCliente.push(cliente);

    registrarBaseCliente();

    mostrarClienteRegistrado(cliente);
}

/*
Metodo para eliminar al cliente
*/
function eliminarCliente(cdni) {
    let resultado = baseCliente.filter(fila => fila.dni != cdni);
    document.getElementById("tablaCliente").innerHTML = "<tr><th>Nombre</th><th>DNI</th><th>Acción</th></tr> ";

    baseCliente = [];
    for (const cliente of resultado) {
        mostrarClienteRegistrado(cliente);
        baseCliente.push(cliente);
    }

    registrarBaseCliente();
}

/*
Metodo para modificar al cliente
*/
function modificarCliente(cdni) {
    for (const cliente of baseCliente) {
        if (cliente.dni == cdni) {
            document.getElementById("txtNombre").value = cliente.nombre;
            document.getElementById("txtDni").value = cliente.dni;
            document.getElementById("txtDni").disabled = true;
            break;
        }
    }

    let btnRegistrar = document.getElementById("btnRegistrar");
    btnRegistrar.value = "Actualizar";
}



/*
Metodo para actualizar al cliente
*/
function actualizarCliente() {
    let nombreCliente = document.getElementById("txtNombre").value;
    let dniCliente = document.getElementById("txtDni").value;

    for (const cliente of baseCliente) {
        if (cliente.dni === dniCliente) {
            cliente.nombre = nombreCliente;
            break;
        }
    }

    document.getElementById("tablaVehiculo").innerHTML = "<tr><th>Nombre</th><th>DNI</th><th>Acción</th></tr> ";

    for (const cliente of baseCliente) {
        mostrarClienteRegistrado(cliente);
    }

    document.getElementById("txtDni").disabled = false;
    let btnRegistrar = document.getElementById("btnRegistrar");
    btnRegistrar.value = "Registrar";

    registrarBaseCliente();
}

/*
Metodo para mostrar un cliente
*/
function mostrarClienteRegistrado(cliente) {
    document.getElementById("tablaCliente").innerHTML += `<tbody><td>${cliente.nombre}</td> <td>${cliente.dni}</td> <td> <button type="button" onclick="modificarCliente('${cliente.dni}')" >Modificar</button>  <button type="button" onclick="eliminarCliente('${cliente.dni}')" >Eliminar</button>  </td> </tbody> `;
}

function validarCliente(cdni) {
    let resultado = baseCliente.filter(fila => fila.dni == cdni);
    return resultado.length > 0;
}