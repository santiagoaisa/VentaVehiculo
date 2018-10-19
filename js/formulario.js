"use strict";

var listaClientes=[];

function registrarCliente(){
    let nombreCliente=document.getElementById("nombrecliente").value;
    let dniCliente=document.getElementById("dnicliente").value; 


    if(validarCliente(dniCliente)){

            alert("DNI Duplicado");

        return ;
    }


    let cliente=new Cliente();
    cliente.cambiarNombre(nombreCliente);
    cliente.cambiarDni(dniCliente);



    mostrarClienteRegistrado(cliente);
    
}

function eliminarCliente(){
    alert("Eliminado");
}

function mostrarClienteRegistrado(cliente){

    document.getElementById("tablaCliente").innerHTML+=`<tbody><td>${cliente.obtenerNombre()}</td> <td>${cliente.obtenerDni()}</td> <td><a href="eliminarCliente()" >Eliminar</a> </td> </tbody> `;

}

function validarCliente(cdni){

    let resultado=listaClientes.filter( dni => dni===cdni  );
    
    return resultado.length>0;

}

