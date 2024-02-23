//classes

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
      
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }
    precioProducto(){
        return(this.precio);
    }
}

const producto2 = new Producto('Monitor curvo de 49', 1000, false);
const producto3 = new Producto('Laptop', 3000, true);


console.log(producto2.formatearProducto());
console.log(producto3.precioProducto());


//herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn){
    super(nombre, precio)
    this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto() } su ISBN es: ${this.isbn}`;
    }
}

const libro = new Libro ('JavaScript la revolucion', 120, '1234567890');
console.log(libro.formatearProducto());