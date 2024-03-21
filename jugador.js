class Jugador {
    constructor(nombre, puntuacion = 0, nivel = 1) {
        this.nombre = nombre;
        this.puntuacion = puntuacion;
        this.nivel = nivel;
    }

    aumentarPuntuacion(puntos) {
        this.puntuacion += puntos;
    }

    ascenderNivel() {
        this.nivel++;
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Puntuación: ${this.puntuacion}, Nivel: ${this.nivel}`);
    }
}
