class Banco {
    constructor() {
        this.cajas = [
            { tipo: 'retiro', ocupada: false },
            { tipo: 'retiro', ocupada: false },
            { tipo: 'deposito', ocupada: false },
            { tipo: 'deposito', ocupada: false },
            { tipo: 'asesoria', ocupada: false }
        ];
        this.clientes = [];
    }

    agregarCliente(tipoCliente, tipoAtencion) {
        this.clientes.push({ tipoCliente, tipoAtencion });
    }

    atenderClientes() {
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            for (let j = 0; j < this.cajas.length; j++) {
                let caja = this.cajas[j];
                if (!caja.ocupada && caja.tipo === cliente.tipoAtencion) {
                    caja.ocupada = true;
                    console.log(`El cliente ${i + 1} de tipo ${cliente.tipoCliente} está siendo atendido en la caja ${j + 1} para ${cliente.tipoAtencion}`);
                    break;
                }
            }
        }

        for (let i = 0; i < this.cajas.length; i++) {
            this.cajas[i].ocupada = false;
        }
    }
}

let banco = new Banco();

banco.agregarCliente('preferencial', 'retiro');
banco.agregarCliente('general', 'deposito');
banco.agregarCliente('no tiene cuenta', 'asesoria');

banco.atenderClientes();