class Subasta {
    constructor() {
        this.productos = [];
        this.ofertas = {};
    }

    registrarProducto(id, nombre, fecha, precioInicial) {
        this.productos.push({ id, nombre, fecha, precioInicial });
        this.ofertas[id] = [];
    }

    hacerOferta(idProducto, fecha, valorOfrecido) {
        let producto = this.productos.find(producto => producto.id === idProducto);
        if (producto) {
            this.ofertas[idProducto].push({ fecha, valorOfrecido });
        } else {
            console.log('El producto no está registrado en la subasta.');
        }
    }

    verProductos() {
        return this.productos;
    }

    verOfertas(idProducto) {
        return this.ofertas[idProducto];
    }

    seleccionarOfertaGanadora(idProducto) {
        let ofertasProducto = this.ofertas[idProducto];
        if (ofertasProducto && ofertasProducto.length > 0) {
            let ofertaGanadora = ofertasProducto.reduce((prev, current) => (prev.valorOfrecido > current.valorOfrecido) ? prev : current);
            return ofertaGanadora;
        } else {
            return null;
        }
    }
}

// Crear una instancia de la clase Subasta
let subasta = new Subasta();

// Registrar productos
subasta.registrarProducto('001', 'Cuadro', '2023-01-01', 100000);
subasta.registrarProducto('002', 'Escultura', '2023-02-01', 200000);

// Hacer ofertas
subasta.hacerOferta('001', '2023-01-02', 150000);
subasta.hacerOferta('001', '2023-01-03', 160000);

// Ver productos y ofertas
console.log(subasta.verProductos());
console.log(subasta.verOfertas('001'));

// Seleccionar oferta ganadora
console.log(subasta.seleccionarOfertaGanadora('001'));