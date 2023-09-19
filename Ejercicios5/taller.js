class AtencionUniversidad {
    constructor() {
        this.usuariosAtendidos = 0;
        this.atendidosPorDia = 0;
        this.estudiantesAtendidos = 0;
        this.docentesAtendidos = 0;
        this.transferencias = 0;
    }

    atenderUsuario(tipoUsuario) {
        this.usuariosAtendidos++;
        this.atendidosPorDia++;
        if (tipoUsuario === 'estudiante') {
            this.estudiantesAtendidos++;
        } else if (tipoUsuario === 'docente') {
            this.docentesAtendidos++;
        }
    }

    transferir() {
        this.transferencias++;
    }

    obtenerEstadisticas() {
        return {
            usuariosAtendidos: this.usuariosAtendidos,
            atendidosPorDia: this.atendidosPorDia,
            estudiantesAtendidos: this.estudiantesAtendidos,
            docentesAtendidos: this.docentesAtendidos,
            transferencias: this.transferencias
        };
    }
}

const atencion = new AtencionUniversidad();
atencion.atenderUsuario('estudiante');
atencion.transferir();
console.log(atencion.obtenerEstadisticas());