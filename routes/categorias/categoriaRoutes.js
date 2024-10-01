import {Router} from 'express';

import{
    getCategoriasController,
    getCategoriasByIdController
}
from  './../../controllers/categorias/categoriaControllers.js'

const categoriasRouter = Router();

categoriasRouter.get('/', getCategoriasController);
categoriasRouter.get('/:id', getCategoriasByIdController);

export default categoriasRouter;
