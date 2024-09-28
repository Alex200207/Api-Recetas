import {Router} from 'express';

import{
    getRecetasController,
    getRecetasByIdController
}
from  './../../controllers/recetas/recetasControllers.js'

const recetasRouter = Router();

recetasRouter.get('/', getRecetasController);
recetasRouter.get('/:id', getRecetasByIdController);

export default recetasRouter;