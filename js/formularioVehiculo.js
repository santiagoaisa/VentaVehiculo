"use strict";

var baseVehiculo = [];

window.addEventListener("load", initComponentes);

/*
Metodo para iniciar el localStorage
*/
function initComponentes() {
    if ("BASEVEHICULO" in localStorage) {
        recuperarBaseVehiculo();

        for (const vehiculo of baseVehiculo) {
            mostrarVehiculoRegistrado(vehiculo);
        }
    } else {
        registrarBaseVehiculo();
    }
}

/*
Metodo para recuperar la base de vehiculos del localStorage
*/
function recuperarBaseVehiculo() {
    baseVehiculo = JSON.parse(localStorage.getItem("BASEVEHICULO"));
}

/*
Metodo para guardar la base de vehiculos del localStorage
*/
function registrarBaseVehiculo() {
    localStorage.setItem("BASEVEHICULO", JSON.stringify(baseVehiculo));
}


/*
Metodo para registrar al vehiculo
*/
function registrar() {
    let btnRegistrar = document.getElementById("btnRegistrar");

    let placa = document.getElementById("txtPlaca").value;
    let marca = document.getElementById("cboMarca").value;
    let modelo = document.getElementById("txtModelo").value;
    let año = document.getElementById("txtAño").value;
    let carroceria = document.getElementById("cboCarroceria").value;



    if (!validarDatos(placa, "La PLACA del Vehiculo")) {
        return;
    }

    if (!validarDatos(marca, "La Marca del Vehiculo")) {
        return;
    }

    if (!validarDatos(modelo, "El Modelo del Vehiculo")) {
        return;
    }

    if (!validarDatos(año, "El Año del Vehiculo")) {
        return;
    }

    if (!validarDatos(carroceria, "La Carroceria del Vehiculo")) {
        return;
    }

    if (btnRegistrar.value === "Registrar") {
        registrarVehiculo();
    } else {
        actualizarVehiculo();
    }

}

function validarDatos(valor, campo) {
    if (valor == "") {
        alert(`${campo} no puede estar vacio`);
        return false;
    }

    return true;
}


function registrarVehiculo() {
    let placa = document.getElementById("txtPlaca").value;
    let marca = document.getElementById("cboMarca").value;
    let modelo = document.getElementById("txtModelo").value;
    let año = document.getElementById("txtAño").value;
    let carroceria = document.getElementById("cboCarroceria").value;

    if (validarVehiculo(placa)) {
        alert("PLACA Duplicada");
        //si esta duplicado ya no continua
        return;
    }

    let vehiculo = new Vehiculo(placa, marca, modelo, año, carroceria);
    baseVehiculo.push(vehiculo);

    registrarBaseVehiculo();
    mostrarVehiculoRegistrado(vehiculo);
}

/*
Metodo para eliminar al vehiculo
*/
function eliminarVehiculo(cplaca) {
    let resultado = baseVehiculo.filter(fila => fila.placa != cplaca);
    document.getElementById("tablaVehiculo").innerHTML = "<tr><th>Marca</th><th>Modelo</th><th>Año</th><th>Carroceria</th><th>Placa</th><th>Acción</th></tr> ";

    baseVehiculo = [];
    for (const vehiculo of resultado) {
        mostrarVehiculoRegistrado(vehiculo);
        baseVehiculo.push(vehiculo);
    }

    registrarBaseVehiculo();
}

/*
Metodo para modificar al vehiculo
*/
function modificarVehiculo(cplaca) {
    for (const vehiculo of baseVehiculo) {
        if (vehiculo.placa == cplaca) {
            document.getElementById("txtPlaca").value = vehiculo.placa;
            document.getElementById("cboMarca").value = vehiculo.marca;
            document.getElementById("txtModelo").value = vehiculo.modelo;
            document.getElementById("txtAño").value = vehiculo.año;
            document.getElementById("cboCarroceria").value = vehiculo.carroceria;

            document.getElementById("txtPlaca").disabled = true;
            break;
        }
    }

    let btnRegistrar = document.getElementById("btnRegistrar");
    btnRegistrar.value = "Actualizar";
}



/*
Metodo para actualizar al vehiculo
*/
function actualizarVehiculo() {
    let placa = document.getElementById("txtPlaca").value;
    let marca = document.getElementById("cboMarca").value;
    let modelo = document.getElementById("txtModelo").value;
    let año = document.getElementById("txtAño").value;
    let carroceria = document.getElementById("cboCarroceria").value;

    for (const vehiculo of baseVehiculo) {
        if (vehiculo.placa === placa) {
            vehiculo.marca = marca;
            vehiculo.modelo = modelo;
            vehiculo.año = año;
            vehiculo.carroceria = carroceria;
            break;
        }
    }

    document.getElementById("tablaVehiculo").innerHTML = "<tr><th>Marca</th><th>Modelo</th><th>Año</th><th>Carroceria</th><th>Placa</th><th>Acción</th></tr> ";

    for (const vehiculo of baseVehiculo) {
        mostrarVehiculoRegistrado(vehiculo);
    }

    document.getElementById("txtPlaca").disabled = false;
    let btnRegistrar = document.getElementById("btnRegistrar");
    btnRegistrar.value = "Registrar";

    registrarBaseVehiculo();
}

/*
Metodo para mostrar un vehiculo
*/
function mostrarVehiculoRegistrado(vehiculo) {
    document.getElementById("tablaVehiculo").innerHTML += `<tbody><td>${vehiculo.marca}</td> <td>${vehiculo.modelo}</td> <td>${vehiculo.año}</td> <td>${vehiculo.carroceria}</td> <td>${vehiculo.placa}</td> <td> <button type="button" onclick="modificarVehiculo('${vehiculo.placa}')" >Modificar</button>  <button type="button" onclick="eliminarVehiculo('${vehiculo.placa}')" >Eliminar</button>  </td> </tbody> `;
}

function validarVehiculo(cplaca) {
    let resultado = baseVehiculo.filter(fila => fila.placa == cplaca);
    return resultado.length > 0;
}