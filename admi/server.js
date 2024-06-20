const express = require('express');
const app = express();
const connection = require('./database');
const cors = require("cors")
const morgan = require("morgan")
const { body, validationResult } = require('express-validator');
// Middleware para par.sear JSON
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))
// Ruta para registrar un nuevo usuario con validación
app.post('/usuarios', async (req, res) => {
console.log("entra")
const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { cedula, nombre, apellido, email, contraseña, fecha_nacimiento, sexo } = req.body;
    
    try {
        const result = await connection.query('INSERT INTO usuarios SET ?', 
            { cedula, nombre, apellido, email, contraseña, fecha_nacimiento, sexo }
        );
        
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rutas para obtener todas las categorías, productos y ventas
app.get('/categorias', async (req, res) => {
    try {
        const results = await connection.query('SELECT * FROM categorias');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/productos', async (req, res) => {
    try {
        const results = await connection.query('SELECT * FROM productos');
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/ventas', async (req, res) => {
    const results = connection.query('SELECT * FROM ventas',(err,results,fields)=>{
        if(err) return res.json({
            message:"error interno en el servidor"
        })
        res.json(results);
    });
    /*console.log(results)
    
    try {
    } catch (err) {
        res.status(500).json({ error: err.message });
    }*/
});
// Puerto para el servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
