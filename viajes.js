// viajes.js

// Array para guardar los destinos
const destinos = []; // Cambiado de `var` a `const`

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte, alojamiento) => {
    // Usamos una función de flecha
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        alojamiento,
        costo: calcularCosto(destino, transporte, alojamiento) // Calcula el costo con el alojamiento
    };

    destinos.push(nuevoViaje); // Agrega al array
};

// Función para calcular el costo del viaje
export const calcularCosto = (destino, transporte, alojamiento) => {
    let costoBase = 0; // Cambiado de `var` a `let`

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    // Costo adicional por tipo de alojamiento
    if (alojamiento === "Hotel") {
        costoBase += 300;
    } else if (alojamiento === "Hostal") {
        costoBase += 100;
    }

    return costoBase;
};

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    // Cambiado a una función de flecha
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Alojamiento: ${viaje.alojamiento}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log("______________________");
    });
};
