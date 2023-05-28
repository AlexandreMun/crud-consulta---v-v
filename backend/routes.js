const express = require("express");
const routes = express.Router();

const consultaController = require('./src/controllers/consultaController');
const userController = require('./src/controllers/userController');

routes.post("/create-appointment", consultaController.add);

routes.get("/appointments", consultaController.read);

routes.put("/edit-appointment", consultaController.edit);

routes.delete("/delete-appointment/:idconsulta", consultaController.delete);

routes.post('/create-user', userController.add);

module.exports = routes;
