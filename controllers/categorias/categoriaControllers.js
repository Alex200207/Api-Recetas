import { getCategorias} from "../../db/categorias/categoriaQueries.js";




const getCategoriasController = async (req, res) => {
    try {
        const categorias = await getCategorias();
        res.json(categorias);
    } catch (err) {
        res.status(500).send(err);
    }   

}

export { getCategoriasController};