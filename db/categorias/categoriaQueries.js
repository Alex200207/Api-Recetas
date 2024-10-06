import config from "../../config.js";

const response = (err, result, resolve, reject) => {
  if (err) {
    console.log(err);
    reject(err);
  } else {
    resolve(result);
  }
};



const getCategorias = () => {
  return new Promise((resolve,reject) => {
      config.query("select * from categorias", (err, result) => {
          response(err, result, resolve, reject);
      });
  })
}





export { getCategorias };
 