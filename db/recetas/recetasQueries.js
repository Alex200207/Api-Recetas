import config from "../../config.js";

const respuesta = (err, result, resolve, reject) => {
  if (err) {
    console.log(err);
    reject(err);
  } else {
    resolve(result);
  }
};

const getRecetas = () => {
  return new Promise((reject, resolve) => {
    config.query("SELECT * FROM recetas", (err, result) => {
      respuesta(err, result, resolve, reject);
    });
  });
};

const getRecetasById = (id) => {
  return new Promise((reject, resolve) => {
    config.query("SELECT * FROM recetas WHERE id = ?", [id], (err, result) => {
      respuesta(err, result, resolve, reject);
    });
  });
};

export { getRecetas, getRecetasById };
