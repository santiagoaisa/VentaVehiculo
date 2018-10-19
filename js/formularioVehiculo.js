"use strict";

var baseVehiculo=[];

function registrarVehiculo(){
    let color=document.getElementById("color").value;
    let placa=document.getElementById("placa").value;
    let tipo=document.getElementById("tipo").value; 
    let ano=document.getElementById("ano").value; 
    let cilindraje=document.getElementById("cilindraje").value;  
    let potencia=document.getElementById("potencia").value; 

    if(validarVehiculo(placa)){

        alert("PLACA DUPLICADA");

        //si esta duplicado ya no continua
         return ;
    }

    let vehiculo=new Vehiculo(color,placa,tipo,ano,cilindraje,potencia);
   

    baseVehiculo.push(vehiculo);

    mostrarVehiculoRegistrado(vehiculo);    
}

function eliminarvehiculo(){
    alert("Eliminado");
}

function mostrarVehiculoRegistrado(vehiculo){
    document.getElementById("tablaVehiculo").innerHTML+=`<tbody><td>${vehiculo.obtenerColor()}</td> <td>${vehiculo.obtenerPlaca()}</td> <td>${vehiculo.obtenerTipo()}</td> <td>${vehiculo.obtenerAno()}</td> <td>${vehiculo.obtenerCilindraje()}</td> <td>${vehiculo.obtenerPotencia()}</td> <td><a href="eliminarVehiculo()" >Eliminar</a> </td> </tbody> `;

}
function modificarVehiculo(cplaca){
    
    for (const vehiculo of baseVehiculo) {        
        if(vehiculo.obtenerPlaca()==cplaca){
            document.getElementById("nombrecliente").value=cliente.obtenerNombre();
            document.getElementById("dnicliente").value=cliente.obtenerDni();            
            document.getElementById("dnicliente").disabled = true;
            break;
        }
    }    
}

function validarVehiculo(cplaca){   

    let resultado=baseVehiculo.filter( vehiculo => vehiculo.obtenerPlaca()==cplaca  );    
    
    console.log('resultado '+resultado);
    return resultado.length>0;

}

