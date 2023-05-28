const express = require("express");
const routes = express.Router();

const consultaController = require('./src/controllers/consultaController')

routes.post("/create-appointment", consultaController.add);

routes.get("/appointments", consultaController.read);

routes.put("/edit-appointment", consultaController.edit);

routes.delete("/delete-appointment/:idconsulta", consultaController.delete)

module.exports = routes;
