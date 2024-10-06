import {Router} from 'express';

import{
    getCategoriasController
}
from '../../controllers/categorias/categoriaControllers.js'
const categoriasRouter = Router();

categoriasRouter.get('/', getCategoriasController);

export default categoriasRouter;
