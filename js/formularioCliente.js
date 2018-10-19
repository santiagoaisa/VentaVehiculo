"use strict";

var baseCliente=[];

function registrarCliente(){
    //enlace del js con el formulario html
    let nombreCliente=document.getElementById("nombrecliente").value;
    let dniCliente=document.getElementById("dnicliente").value; 

    if(validarCliente(dniCliente)){

        alert("DNI Duplicado");

        //si esta duplicado ya no continua
         return ;
    }

    let cliente=new Cliente(nombreCliente,dniCliente);
    baseCliente.push(cliente);

    mostrarClienteRegistrado(cliente);    
}

function eliminarCliente(cdni){
    let resultado=baseCliente.filter( fila  => fila.obtenerDni()!=cdni);
    document.getElementById("tablaCliente").innerHTML="<tr><th>Nombre</th><th>DNI</th><th>Acción</th></tr> ";    

    baseCliente=[];    
    for (const cliente of resultado) {
        mostrarClienteRegistrado(cliente);
        baseCliente.push(cliente);
    }
}

function modificarCliente(cdni){
    
    for (const cliente of baseCliente) {        
        if(cliente.obtenerDni()==cdni){
            document.getElementById("nombrecliente").value=cliente.obtenerNombre();
            document.getElementById("dnicliente").value=cliente.obtenerDni();            
            document.getElementById("dnicliente").disabled = true;
            break;
        }
    }    
}

function actualizarCliente(){
    let nombreCliente=document.getElementById("nombrecliente").value;
    let dniCliente=document.getElementById("dnicliente").value; 
   
    for (const cliente of baseCliente) {        
        if(cliente.obtenerDni()==dniCliente){
            cliente.cambiarNombre(nombreCliente);
            break;
        }
    }

    document.getElementById("tablaCliente").innerHTML="<tr><th>Nombre</th><th>DNI</th><th>Acción</th></tr> ";    

   
    for (const cliente of baseCliente) {
        mostrarClienteRegistrado(cliente);       
    }

    document.getElementById("dnicliente").disabled = false;

}

function mostrarClienteRegistrado(cliente){
    document.getElementById("tablaCliente").innerHTML+=`<tbody><td>${cliente.obtenerNombre()}</td> <td>${cliente.obtenerDni()}</td> <td> <button onclick="modificarCliente('${cliente.obtenerDni()}')" >Modificar</button>  <button onclick="eliminarCliente('${cliente.obtenerDni()}')" >Eliminar</button>  </td> </tbody> `;
}

function validarCliente(cdni){   

    let resultado=baseCliente.filter( fila  => fila.obtenerDni()==cdni  );


    return resultado.length>0;

}

function validarCliente(cdni){   

    let resultado=baseCliente.filter( fila  => fila.obtenerDni()==cdni  );


    return resultado.length>0;

}

