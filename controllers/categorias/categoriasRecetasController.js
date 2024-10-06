import { getRecetasCategorias } from '../../db/categorias/categoriasRecetaQuery.js';

const getRCategoriasController = async (req, res) => {
    try {
        const categorias = await getRecetasCategorias();
        res.json(categorias);
    } catch (err) {
        res.status(500).send(err);
    }   

}

export{getRCategoriasController};