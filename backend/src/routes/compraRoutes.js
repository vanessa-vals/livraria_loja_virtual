import express from "express";
import compraController from "../controllers/compraController.js";

const routeCompra = express.Router();

routeCompra.get("/", compraController.showCompra);
routeCompra.get("/:id", compraController.getCompraById);
routeCompra.post("/", compraController.createCompra);
routeCompra.put("/:id", compraController.updateCompra);
routeCompra.delete("/:id", compraController.deleteCompra);

export default routeCompra;