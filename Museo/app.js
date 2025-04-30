import express from 'express';
import routes from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Para __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware: registra las rutas 
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Ruta visitada: ${req.method} ${req.url}`);
    next();
});

// Rutas
app.use('/', routes);

// Escuchar
app.listen(PORT, () => {
    console.log(`MuseArte corriendo en http://localhost:${PORT}`);
});

