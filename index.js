import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import recetasRouter from './routes/recetas/recetasRoutes.js';
import categoriasRouter from './routes/categorias/categoriaRoutes.js';
import categoriasRecetasRouter from './routes/categorias/categoriaRecetasRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));

const port = 3000;
app.use('/recetas',recetasRouter);
app.use('/recetas_categorias',categoriasRecetasRouter);
app.use('/categorias',categoriasRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});