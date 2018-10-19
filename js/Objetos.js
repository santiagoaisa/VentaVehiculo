function Vehiculo(co,pla,ti,anio,cili,po) 
{
	this.color = co;
	this.placa = pla;
	this.tipo = ti;
	this.año = anio;
	this.cilindraje = cili;
	this.potencia = po;

	this.obtenerColor = function () 
	{
		return this.color;
	};
	this.obtenerPlaca = function () 
	{
		return this.placa;
	};
	this.obtenerTipo = function () 
	{
		return this.tipo;
	};
	this.obtenerAno = function ()
	{
		return this.ano;
	};
	this.obtenerCilindraje = function ()
	{
		return this.cilindraje;
	};
	this.obtenerPotencia = function ()
	{
		return this.potencia;
	};
	this.cambiarColor = function (nuevoColor)
	{
		 this.color = nuevoColor;	
	};
	this.cambiarPlaca = function (nuevaPlaca)
	{
		 this.placa = nuevaPlaca;	
	};
	this.cambiarTipo = function (nuevoTipo)
	{
		 this.tipo = nuevoTipo;	
	};
	this.cambiarAno = function (nuevoAno)
	{
		 this.ano = nuevoAno;	
	};
	this.cambiarCilindraje = function (nuevoCilindraje)
	{
		 this.cilindraje = nuevoCilindraje;	
	};
	this.cambiarPotencia = function (nuevaPotencia)
	{
		 this.potencia = nuevaPotencia;	
	};
}

function Cliente(nom,doc) 
{
	this.nombre = nom;
	this.dni = doc;
	
	this.obtenerNombre = function ()
	{
		return this.nombre;
	};
	this.obtenerDni = function ()
	{
		return this.dni;
	};
	this.cambiarNombre = function (nuevoNombre)
	{
		 this.nombre = nuevoNombre;	
	};
	this.cambiarDni = function (nuevoDni)
	{
		 this.dni = nuevoDni;	
	};
}

function Factura(fe,pre,num,c,v) 
{
	this.fecha = fe;
	this.precio = pre;
	this.nrofactura = num;
	this.cli = c;
	this.vehi = v;
	
	this.obtenerFecha = function ()
	{
		return this.fecha;
	};
	this.obtenerPrecio = function ()
	{
		return this.precio;
	};
	this.obtenerNrofactura = function ()
	{
		return this.nrofactura;
	};
	this.obtenerClienteNombre= function () 
	{
		return this.cli.obtenerNombre();
	}
	this.obtenerClienteDni= function ()
	 {
		return this.cli.obtenerDni();
	}
	this.obtenerVehiculoColor = function ()
	 {
		return this.vehi.obtenerColor();
	}
	this.obtenerVehiculoPlaca = function ()
	 {
		return this.vehi.obtenerPlaca();
	}
	this.obtenerVehiculoTipo = function () 
	{
		return this.vehi.obtenerTipo();
	}
	this.obtenerVehiculoAno = function () 
	{
		return this.vehi.obtenerAno();
	}
	this.obtenerVehiculoCilindraje = function ()
	 {
		return this.vehi.obtenerCilindraje();
	}
	this.obtenerVehiculoPotencia = function ()
	 {
		return this.vehi.obtenerPotencia();
	}
	this.cambiarFecha = function (nuevaFecha)
	{
		 this.fecha = nuevaFecha;	
	};
	this.cambiarPrecio = function (nuevoPrecio)
	{
		 this.fecha = nuevoPrecio;	
	};
	this.cambiarClienteNombre = function (nuevoNombre)
	{
		 this.cli.cambiarNombre(nuevoNombre);	
	};
	this.cambiarClienteDni = function (nuevoDni)
	{
		 this.cli.cambiarDni(nuevoDni);	
	};
	this.cambiarVehiculoColor = function (nuevoColor)
	{
		 this.cli.cambiarColor(nuevoColor);	
	};
	this.cambiarVehiculoPlaca = function (nuevaPlaca)
	{
		 this.cli.cambiarPlaca(nuevaPlaca);	
	};
	this.cambiarVehiculoTipo = function (nuevoTipo)
	{
		 this.cli.cambiarTipo(nuevoTipo);
	};
	this.cambiarVehiculoAño = function (nuevoAño)
	{
		 this.cli.cambiarAño(nuevoAño);	
	};
	this.cambiarVehiculoCilindraje = function (nuevoCilindraje)
	{
		 this.cli.cambiarCilindraje(nuevoCilindraje);	
	};
	this.cambiarVehiculoPotencia = function (nuevaPotencia)
	{
		 this.cli.cambiarPotencia(nuevaPotencia);	
	};
}

var vehiculo1 = new Vehiculo("Rojo","V6X-356","Auto","2008","1600cc","108hp");
var cliente1 = new Cliente("Junior","46769145");
var factura1 = new Factura("19/10/2018","$9000","3676589845",cliente1,vehiculo1);
console.log(vehiculo1.obtenerColor());
console.log(vehiculo1.obtenerPlaca());
console.log(vehiculo1.obtenerTipo());
console.log(vehiculo1.obtenerAno());
console.log(vehiculo1.obtenerCilindraje());
console.log(vehiculo1.obtenerPotencia());
console.log(cliente1.obtenerNombre());
console.log(cliente1.obtenerDni());
console.log(factura1.obtenerFecha());
console.log(factura1.obtenerPrecio());
console.log(factura1.obtenerNrofactura());
console.log(factura1.obtenerClienteNombre());
console.log(factura1.obtenerClienteDni());
console.log(factura1.obtenerVehiculoColor());
console.log(factura1.obtenerVehiculoPlaca());
console.log(factura1.obtenerVehiculoTipo());
console.log(factura1.obtenerVehiculoAno());
console.log(factura1.obtenerVehiculoCilindraje());
console.log(factura1.obtenerVehiculoPotencia());
