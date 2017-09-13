// Ejemplo de código en ES6

var data = [{precio: 12}, {precio: 34}, {precio: 19}, {precio: 13.2}]; 

data.forEach( elem => {
    if (true) {

        const iva = 1.21  //el ; en ECMAScript 6 es opcional
        let precioFinal = elem.precio * iva
        
        console.log(`
            Oferta: 
            El precio final es ${precioFinal}`);
    }

    
    // console.log (iva) daria un error porque la variable iva su ambito no abarca esta parte del codigo
    //antigualmente en javascript esto no daba error, porque las variables se definen globales
});