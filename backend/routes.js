const express = require("express");
const routes = express.Router();

const consultaController = require('./src/controllers/consultaController')


// routes.get('/', (req, res) => {
//   res.send('Hello w!')
// let sql = "INSERT INTO consulta (title, patient, doctor, date) VALUES ('test', 'test', 'test', '2023-05-23')"

// db.query(sql, (err, result) => {
//   console.log(err);
// })
// })

routes.post("/create-appointment", consultaController.add);

routes.get("/appointments", consultaController.read);

routes.put("/edit-appointment", consultaController.edit);

routes.delete("/delete-appointment/:idconsulta", consultaController.delete)

module.exports = routes;
