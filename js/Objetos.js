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
	this.obtenerAño = function ()
	{
		return this.año;
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
	this.cambiarAño = function (nuevoAño)
	{
		 this.año = nuevoAño;	
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
	this.obtenerClienteNombre= function () {
		return this.cli.nombre;
	}
	this.obtenerClienteDni= function () {
		return this.cli.dni;
	}
	this.obtenerVehiculoColor = function () {
		return this.vehi.color;
	}
	this.obtenerVehiculoPlaca = function () {
		return this.vehi.placa;
	}
	this.obtenerVehiculoTipo = function () {
		return this.vehi.tipo;
	}
	this.obtenerVehiculoAño = function () {
		return this.vehi.año;
	}
	this.obtenerVehiculoCilindraje = function () {
		return this.vehi.cilindraje;
	}
	this.obtenerVehiculoPotencia = function () {
		return this.vehi.potencia;
	}
	this.cambiarFecha = function (nuevaFecha)
	{
		 this.fecha = nuevaFecha;	
	};
	this.cambiarPrecio = function (nuevoPrecio)
	{
		 this.fecha = nuevoPrecio;	
	};
	this.cambiarNrofactura = function (nuevoNrofactura)
	{
		 this.fecha = nuevoNrofactura;	
	};
}

var vehiculo1 = new Vehiculo("Rojo","V6X-356","Auto","2008","1600cc","108hp");
var cliente1 = new Cliente("Junior","46769145");
var factura1 = new Factura("19/10/2018","$9000","3676589845",cliente1,vehiculo1);
console.log(vehiculo1.obtenerColor());
console.log(vehiculo1.obtenerPlaca());
console.log(vehiculo1.obtenerTipo());
console.log(vehiculo1.obtenerAño());
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
console.log(factura1.obtenerVehiculoAño());
console.log(factura1.obtenerVehiculoCilindraje());
console.log(factura1.obtenerVehiculoPotencia());