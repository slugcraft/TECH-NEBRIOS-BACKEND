const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const session = require("express-session");
const app = express();
const db = require('./utils/database');

// Pruebas de etres
let concurrentRequests = 0;
const MAX_CONCURRENT = 50;

async function testDB(){
    try {
        const test = await db();
        console.log('Conexión exitosa. Resultado:', test);
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
    }
}
testDB();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Ruta por default
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido al servidor de pruebas');
});
    
app.get('/stress_test', (req, res) => {

    if (concurrentRequests >= MAX_CONCURRENT) {
        return res.status(503).send('Servidor lleno');
    }
    concurrentRequests++;

    const start = Date.now();
    setTimeout(() => {
        const duration = Date.now() - start;
        concurrentRequests--;
        res.send(`Respuesta en ${duration}ms`);
    }, Math.random() * 100);
});

// Ruta 404 (para cualquier otra ruta no definida)
app.use((req, res) => {
    res.status(404).render("404", { title: "404 - Not Found" });
});

/* Start server */
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
