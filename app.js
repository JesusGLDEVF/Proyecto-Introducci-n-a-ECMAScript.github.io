// app.js
import { registrarDestino, mostrarItinerario } from './viajes.js'; // Importamos las funciones

// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    registrarDestino("New York", "2022-06-05", "Tren", "Hotel");
    registrarDestino("Londres", "2024-07-01", "Tren", "Hostal");
    registrarDestino("Londres", "2024-01-02", "Avion", "Hostal");
    registrarDestino("Paris", "2024-06-15", "Avión", "Hotel");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();
