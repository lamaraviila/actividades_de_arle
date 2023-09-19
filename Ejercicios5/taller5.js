class Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidadBodega = cantidadBodega;
        this.cantidadMinima = cantidadMinima;
        this.cantidadMaxima = cantidadMaxima;
        this.porcentajeDescuento = porcentajeDescuento;
    }

    solicitarPedido() {
        return this.cantidadBodega < this.cantidadMinima;
    }

    calcularTotalPagar(cantidad) {
        return cantidad * this.precioCompra;
    }
}

class PrendaVestir extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla, permitePlanchado) {
        super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
        this.talla = talla;
        this.permitePlanchado = permitePlanchado;
    }
}

class Calzado extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla) {
        super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
        this.talla = talla;
    }
}

let prendasVestir = [];
let calzados = [];

prendasVestir.push(new PrendaVestir('001', 'Camisa', 20000, 30000, 10, 5, 50, 10, 'M', true));
calzados.push(new Calzado('002', 'Zapatos', 50000, 70000, 8, 3, 30, 15, 38));

// Imprimir los productos
console.log(prendasVestir);
console.log(calzados);