import { getCategorias, getCategoriasById } from "../../db/categorias/categoriaQueries.js";


const getCategoriasController = async (req, res) => {
    try {
        const categorias = await getCategorias();
        res.json(categorias);
    } catch (err) {
        res.status(500).send(err);
    }   

}

const getCategoriasByIdController = async (req, res) => {
    try {
        const categoria = await getCategoriasById(req.params.id);
        res.json(categoria);
    } catch (err) {
        res.status(500).send(err);
    }
}

export { getCategoriasController, getCategoriasByIdController };