"use strict";

var listaClientes=[];

function registrarCliente(){
    let nombreCliente=document.getElementById("nombrecliente").value;
    let dniCliente=document.getElementById("dnicliente").value; 

    mostrarClienteRegistrado();
}

function eliminarCliente(){
    alert("Eliminado");
}

function mostrarClienteRegistrado(){

    document.getElementById("tablaCliente").innerHTML+=`<tbody><td>Apellido</td> <td>Nombre</td> <td><a href="eliminarCliente()" >Eliminar</a> </td> </tbody> `;

}

function validarUsuario(){

    

}

