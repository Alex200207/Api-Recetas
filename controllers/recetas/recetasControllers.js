import { getRecetas } from "../../db/recetas/recetasQueries.js";

const  getRecetasController= async (req, res) => {
  try {
    const recetas = await getRecetas();
    res.json(recetas);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getRecetasByIdController = async (req, res) => {
  try {
    const recetas = await getRecetasById(req.params.id);
    res.json(recetas);
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getRecetasController, getRecetasByIdController };
getRecetasController