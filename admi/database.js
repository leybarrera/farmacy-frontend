// database.js
const mysql = require('mysql2');
    // Crear la conexión a la base de datos
    const connection = mysql.createConnection({
        host: 'localhost', // Cambia esto si tu MySQL está en otro host
        user: 'root', // Reemplaza con tu usuario de MySQL
        password: 'SIGEYCL00', // Reemplaza con tu contraseña de MySQL
        database: 'farmacia' // El nombre de tu base de datos
    });

    // Conectar a la base de datos
    connection.connect((err) => {
        if (err) {
            console.error('Error al conectar a la base de datos:', err);
            return;
        }
        console.log('Conectado a la base de datos MySQL.');
    });
    
    
    module.exports = connection;
