"use strict";

var baseCliente = [];
var baseVehiculo = [];
var baseFactura = [];


window.addEventListener("load", initComponentes);

/*
Metodo para iniciar el localStorage
*/
function initComponentes() {
    if ("BASEFACTURA" in localStorage) {
        recuperarBaseFactura();

        for (const factura of baseFactura) {
            mostrarFacturaRegistrado(factura);
        }
    } else {
        registrarBaseFactura();
    }

    //RECUPERAMOS LA BASE CLIENTE
    if ("BASECLIENTE" in localStorage) {
        recuperarBaseCliente();

        for (const cliente of baseCliente) {
            mostrarClienteRegistrado(cliente);
        }
    }

    //RECUPERAMOS LA BASE VEHICULO
    if ("BASEVEHICULO" in localStorage) {
        recuperarBaseVehiculo();

        for (const vehiculo of baseVehiculo) {
            mostrarVehiculoRegistrado(vehiculo);
        }
    }

    ///Asignamos la fecha del dia
    let txtFecha = document.getElementById("txtFecha");

    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth() + 1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año

    if (dia < 10)
        dia = '0' + dia; //agrega cero si el menor de 10
    if (mes < 10)
        mes = '0' + mes //agrega cero si el menor de 10

    txtFecha.value = ano + "-" + mes + "-" + dia;
}

/*
Metodo para recuperar la base de clientes del localStorage
*/
function recuperarBaseCliente() {
    baseCliente = JSON.parse(localStorage.getItem("BASECLIENTE"));
}

/*
Metodo para recuperar la base de vehiculos del localStorage
*/
function recuperarBaseVehiculo() {
    baseVehiculo = JSON.parse(localStorage.getItem("BASEVEHICULO"));
}

/*
Metodo para recuperar la base de factura del localStorage
*/
function recuperarBaseFactura() {
    baseFactura = JSON.parse(localStorage.getItem("BASEFACTURA"));
}

/*
Metodo para guardar la base de factura del localStorage
*/
function registrarBaseFactura() {
    localStorage.setItem("BASEFACTURA", JSON.stringify(baseFactura));
}




/*
Metodo para registrar al vehiculo
*/
function registrar() {
    let btnRegistrar = document.getElementById("btnRegistrar");

    let cliente = document.getElementById("cboCliente").value;
    let vehiculo = document.getElementById("cboVehiculo").value;

    let serie = document.getElementById("txtSerie").value;
    let numero = document.getElementById("txtNumero").value;

    let importe = document.getElementById("txtImporte").value;

    if (!validarDatos(cliente, "Debe seleccionar un Cliente")) {
        return;
    }

    if (!validarDatos(vehiculo, "Debe seleccionar un Vehiculo")) {
        return;
    }

    if (!validarDatos(serie, "Debe Ingresar una Serie")) {
        return;
    }

    if (!validarDatos(numero, "Debe Ingresar un Numero")) {
        return;
    }

    if (!validarDatos(importe, "Debe Ingresar un Importe")) {
        return;
    }

    if (btnRegistrar.value === "Registrar") {
        registrarFactura();
    } else {
        actualizarFactura();
    }

}

function validarDatos(valor, campo) {
    if (valor == "") {
        alert(`${campo} no puede estar vacio`);
        return false;
    }

    return true;
}


function registrarFactura() {

    let fecha = document.getElementById("txtFecha").value;
    let cdniCliente = document.getElementById("cboCliente").value;
    let cplaVehiculo = document.getElementById("cboVehiculo").value;

    let serie = document.getElementById("txtSerie").value;
    let numero = document.getElementById("txtNumero").value;

    let importe = document.getElementById("txtImporte").value;

    if (validarFactura(numero)) {
        alert("NUMERO Duplicada");
        //si esta duplicado ya no continua
        return;
    }

    let cliente = buscarCliente(cdniCliente);
    let vehiculo = buscarVehiculo(cplaVehiculo);

    let factura = new Factura(fecha, serie, numero, cliente, vehiculo, importe);
    baseFactura.push(factura);

    registrarBaseFactura();
    mostrarFacturaRegistrado(factura);
}

/*
Metodo para eliminar al vehiculo
*/
function eliminarFactura(cnumero) {
    let resultado = baseFactura.filter(fila => fila.numero != cnumero);
    document.getElementById("tablaFactura").innerHTML = "<tr><th>Fecha</th><th>Serie</th><th>Numero</th><th>Cliente</th><th>Vehiculo</th><th>Importe</th><th>Acción</th></tr> ";

    baseFactura = [];
    for (const factura of resultado) {
        mostrarFacturaRegistrado(factura);
        baseVehiculo.push(factura);
    }

    registrarBaseFactura;
}

/*
Metodo para modificar al vehiculo
*/
function modificarFactura(cnumero) {
    for (const factura of baseFactura) {
        if (factura.numero == cnumero) {
            document.getElementById("txtFecha").value = factura.fecha;
            document.getElementById("cboCliente").value = factura.cliente.dni;
            document.getElementById("cboVehiculo").value = factura.vehiculo.placa;

            document.getElementById("txtSerie").value = factura.serie;
            document.getElementById("txtNumero").value = factura.numero;

            document.getElementById("txtImporte").value = factura.importe;

            document.getElementById("txtSerie").disabled = true;
            document.getElementById("txtNumero").disabled = true;

            break;
        }
    }

    let btnRegistrar = document.getElementById("btnRegistrar");
    btnRegistrar.value = "Actualizar";
}



/*
Metodo para actualizar al vehiculo
*/
function actualizarFactura() {

    let fecha = document.getElementById("txtFecha").value;
    let cdniCliente = document.getElementById("cboCliente").value;
    let cplaVehiculo = document.getElementById("cboVehiculo").value;

    let serie = document.getElementById("txtSerie").value;
    let numero = document.getElementById("txtNumero").value;

    let importe = document.getElementById("txtImporte").value;

    let cliente = buscarCliente(cdniCliente);
    let vehiculo = buscarVehiculo(cplaVehiculo);

    for (const factura of baseFactura) {
        if (factura.numero === numero) {
            factura.fecha = fecha;
            factura.cliente=cliente;
            factura.vehiculo=vehiculo;
            factura.importe=importe;
            
            break;
        }
    }

    document.getElementById("tablaFactura").innerHTML = "<tr><th>Fecha</th><th>Serie</th><th>Numero</th><th>Cliente</th><th>Vehiculo</th><th>Importe</th><th>Acción</th></tr> ";

    for (const factura of baseFactura) {
        mostrarFacturaRegistrado(factura);
    }

    document.getElementById("txtSerie").disabled = false;
    document.getElementById("txtNumero").disabled = false;
    
    let btnRegistrar = document.getElementById("btnRegistrar");
    btnRegistrar.value = "Registrar";

    registrarBaseFactura();
}

/*
Metodo para mostrar una factura 
*/
function mostrarFacturaRegistrado(factura) {
    document.getElementById("tablaFactura").innerHTML += `<tbody><td>${factura.fecha}</td> <td>${factura.serie}</td> <td>${factura.numero}</td> <td>${factura.cliente.nombre}</td> <td>${factura.vehiculo.placa}-${factura.vehiculo.marca}-${factura.vehiculo.modelo}</td>  <td>${factura.importe}</td> <td> <button type="button" onclick="modificarFactura('${factura.numero}')" >Modificar</button>  <button type="button" onclick="eliminarFactura('${factura.numero}')" >Eliminar</button>  </td> </tbody> `;
}

/*
Metodo para mostrar los cliente en el select
*/
function mostrarClienteRegistrado(cliente) {
    document.getElementById("cboCliente").innerHTML += `<option value=${cliente.dni}>${cliente.nombre}</option> `;
}

/*
Metodo para mostrar los vehiculos en el select
*/
function mostrarVehiculoRegistrado(vehiculo) {
    document.getElementById("cboVehiculo").innerHTML += `<option value=${vehiculo.placa}>${vehiculo.placa} - ${vehiculo.marca} - ${vehiculo.modelo} </option> `;
}

function validarFactura(cnumero) {
    let resultado = baseFactura.filter(fila => fila.numero == cnumero);
    return resultado.length > 0;
}

/*
Buscar al cliente por su DNI
*/
function buscarCliente(cdni) {
    let resultado = baseCliente.filter(fila => fila.dni == cdni);

    for (const cliente of resultado) {
        return cliente;
    }

}

/*
Buscar al vehiculo por su PLACA
*/
function buscarVehiculo(cplaca) {
    let resultado = baseVehiculo.filter(fila => fila.placa == cplaca);

    for (const vehiculo of resultado) {
        return vehiculo;
    }

}