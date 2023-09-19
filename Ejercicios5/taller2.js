class CajeroAutomatico {
    constructor() {
        this.usuarios = {
    
            1234567890: {
                pin: 1234,
                cuentas: {
                    cuenta1: {
                        saldo: 100000,
                    },
                    cuenta2: {
                        saldo: 50000,
                    },
                },
            },
        
        };
        this.encendido = true;
    }

    validarUsuario(documento, pin) {
        const usuario = this.usuarios[documento];
        if (usuario && usuario.pin === pin) {
            return usuario;
        } else {
            return null;
        }
    }

    realizarRetiro(documento, cuenta, monto) {
        if (!this.encendido) {
            return 'El cajero automático está apagado';
        }

        const usuario = this.usuarios[documento];

        if (usuario && usuario.cuentas[cuenta]) {
            const saldoActual = usuario.cuentas[cuenta].saldo;
            if (monto <= saldoActual && monto % 50000 === 0) {
                usuario.cuentas[cuenta].saldo -= monto;
                return `Retiro exitoso. Puede tomar $${monto} de la bandeja principal.`;
            } else {
                return 'Monto de retiro no válido';
            }
        } else {
            return 'Usuario o cuenta no válidos';
        }
    }

    realizarDeposito(documento, cuenta, monto, tipo) {
        if (!this.encendido) {
            return 'El cajero automático está apagado';
        }

        const usuario = this.usuarios[documento];

        if (usuario && usuario.cuentas[cuenta]) {
            if (tipo === 'efectivo' || tipo === 'cheque') {
                usuario.cuentas[cuenta].saldo += monto;
                return 'Depósito exitoso.';
            } else {
                return 'Tipo de depósito no válido';
            }
        } else {
            return 'Usuario o cuenta no válidos';
        }
    }

    realizarTransferencia(documento, cuentaOrigen, cuentaDestino, monto) {
        if (!this.encendido) {
            return 'El cajero automático está apagado';
        }

        const usuario = this.usuarios[documento];

        if (
            usuario &&
            usuario.cuentas[cuentaOrigen] &&
            usuario.cuentas[cuentaDestino]
        ) {
            const saldoOrigen = usuario.cuentas[cuentaOrigen].saldo;
            if (monto <= saldoOrigen) {
                usuario.cuentas[cuentaOrigen].saldo -= monto;
                usuario.cuentas[cuentaDestino].saldo += monto;
                return 'Transferencia exitosa.';
            } else {
                return 'Saldo insuficiente para realizar la transferencia.';
            }
        } else {
            return 'Usuario o cuentas no válidos';
        }
    }

    consultarSaldo(documento, cuenta) {
        if (!this.encendido) {
            return 'El cajero automático está apagado';
        }

        const usuario = this.usuarios[documento];

        if (usuario && usuario.cuentas[cuenta]) {
            return `Saldo disponible en ${cuenta}: $${usuario.cuentas[cuenta].saldo}`;
        } else {
            return 'Usuario o cuenta no válidos';
        }
    }

    apagarCajero() {
        this.encendido = false;
        return 'Cajero apagado';
    }

    encenderCajero() {
        this.encendido = true;
        return 'Cajero encendido';
    }
}

// Uso del cajero automático
const cajero = new CajeroAutomatico();
const documento = 1234567890;
const pin = 1234;

console.log(cajero.validarUsuario(documento, pin));
console.log(cajero.realizarRetiro(documento, 'cuenta1', 50000));
console.log(cajero.realizarDeposito(documento, 'cuenta2', 20000, 'efectivo'));
console.log(
    cajero.realizarTransferencia(documento, 'cuenta1', 'cuenta2', 30000)
);
console.log(cajero.consultarSaldo(documento, 'cuenta1'));
console.log(cajero.apagarCajero());
console.log(cajero.encenderCajero());

