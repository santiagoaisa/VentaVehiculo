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
    

    let placaVehiculo=document.getElementById("xplaca").value; 
  
    if(validarVehiculo(placaVehiculo)){
        for (const vehiculo of baseVehiculo) {
            if(vehiculo.obtenerPlaca()==placaVehiculo){
                document.getElementById("xplaca").value=vehiculo.obtenerPlaca();
                document.getElementById("xcolor").value=vehiculo.obtenerColor();
                document.getElementById("xaño").value=vehiculo.obtenerAno();
                document.getElementById("xtipo").value=vehiculo.obtenerCilindraje();
                document.getElementById("xpotencia").value=vehiculo.obtenerPotencia();
                document.getElementById("xcilindraje").value=vehiculo.obtenerCilindraje();
                
            }
        }
    }else{
        alert("Placa no Existe");
    }

}