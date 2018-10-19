"use strict";

function buscarCliente(){
    

    let dniCliente=document.getElementById("dni").value; 
    console.log(baseCliente.length)
    if(validarCliente(dniCliente)){
        for (const cliente of baseCliente) {
            if(cliente.obtenerDni()==dniCliente){
                document.getElementById("nombre").value=cliente.obtenerNombre();
            }
        }
    }else{
        alert("DNI no Existe");
    }

}