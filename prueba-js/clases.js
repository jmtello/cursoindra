// Ejemplo de código en ES6

class Libro {}

class LibroTecnico extends Libro {
 
	constructor(tematica, paginas) {
		super(tematica, paginas);
		this.capitulos = [];
		this.precio = "";
		// ...
	}
	
	precioFinal(pIva = 21) {
		return this.precio+(1+pIva/100);
	}
}

let libro1 = new LibroTecnico("Informatica", 250);
console.dir(libro1);
console.dir(libro1.precioFinal());