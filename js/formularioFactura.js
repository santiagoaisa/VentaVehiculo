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

function buscarVehiculo(){
    

    let placaVehiculo=document.getElementById("placa").value; 
  
    if(validarVehiculo(placaVehiculo)){
        for (const vehiculo of baseVehiculo) {
            if(vehiculo.obtenerPlaca()==placaVehiculo){
                document.getElementById("placa").value=vehiculo.obtenerPlaca();
                document.getElementById("color").value=vehiculo.obtenerColor();
                document.getElementById("año").value=vehiculo.obtenerAño();
            }
        }
    }else{
        alert("DNI no Existe");
    }

}