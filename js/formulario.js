"use strict";

var baseCliente=[];

function registrarCliente(){
    let nombreCliente=document.getElementById("nombrecliente").value;
    let dniCliente=document.getElementById("dnicliente").value; 

    if(validarCliente(dniCliente)){

        alert("DNI Duplicado");

        //si esta duplicado ya no continua
         return ;
    }

    let cliente=new Cliente();
    cliente.cambiarNombre(nombreCliente);
    cliente.cambiarDni(dniCliente);

    baseCliente.push(cliente);

    mostrarClienteRegistrado(cliente);    
}

function eliminarCliente(){
    alert("Eliminado");
}

function mostrarClienteRegistrado(cliente){
    document.getElementById("tablaCliente").innerHTML+=`<tbody><td>${cliente.obtenerNombre()}</td> <td>${cliente.obtenerDni()}</td> <td><a href="eliminarCliente()" >Eliminar</a> </td> </tbody> `;

}

function validarCliente(cdni){   

    let resultado=baseCliente.filter( cliente => cliente.obtenerDni()==cdni  );    
    
    console.log('resultado '+resultado);
    return resultado.length>0;

}

