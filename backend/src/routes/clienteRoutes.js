import express from "express";
import clienteController from "../controllers/clienteController.js";

const routeCliente = express.Router();

routeCliente.get("/", clienteController.showCliente);
routeCliente.get("/:id", clienteController.getClienteById);
routeCliente.post("/", clienteController.createCliente);
routeCliente.put("/:id", clienteController.updateCliente);
routeCliente.delete("/:id", clienteController.deleteCliente);

export default routeCliente;