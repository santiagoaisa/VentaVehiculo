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
var baseVehiculo=[];

function registrarVehiculo(){
    let color=document.getElementById("color").value;
    let placa=document.getElementById("placa").value;
    let tipo=document.getElementById("tipo").value; 
    let ano=document.getElementById("ano").value; 
    let cilindraje=document.getElementById("cilindraje").value;  
    let potencia=document.getElementById("potencia").value; 

    if(validarVehiculo(placa)){

        alert("DNI Duplicado");

        //si esta duplicado ya no continua
         return ;
    }

    let vehiculo=new Vehiculo();
    color.cambiarColor(color);
    placa.cambiarPlaca(placa);
    tipo.cambiarTipo(tipo);
    ano.cambiarAno(ano);
    cilindraje.cambiarCilindraje(cilindraje);
    potencia.cambiarPotencia(potencia);

    baseVehiculo.push(vehiculo);

    mostrarVehiculoRegistrado(vehiculo);    
}

function eliminarvehiculo(){
    alert("Eliminado");
}

function mostrarVehiculoRegistrado(Vehiculo){
    document.getElementById("tablaVehiculo").innerHTML+=`<tbody><td>${vehiculo.obtenercolor()}</td> <td>${vehiculo.obtenerplaca()}</td> <td>${vehiculo.obtenertipo()}</td> <td>${vehiculo.obtenerano()}</td> <td>${vehiculo.obtenercilindraje()}</td> <td>${vehiculo.obtenerpotencia()}</td> <td><a href="eliminarVehiculo()" >Eliminar</a> </td> </tbody> `;

}

function validarVehiculo(cplaca){   

    let resultado=baseVehiculo.filter( vehiculo => vehiculo.obtenerplca()==cplaca  );    
    
    console.log('resultado '+resultado);
    return resultado.length>0;

}

