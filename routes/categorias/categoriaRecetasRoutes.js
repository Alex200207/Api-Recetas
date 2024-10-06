import {Router} from 'express';

import{
    getRCategoriasController
}
from  '../../controllers/categorias/categoriasRecetasController.js'

const categoriasRecetasRouter = Router();

categoriasRecetasRouter.get('/', getRCategoriasController);

export default categoriasRecetasRouter;