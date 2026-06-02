import express from "express";
import categoriaController from "../controllers/categoriaController.js";

const routeCategoria = express.Router();

routeCategoria.get("/", categoriaController.showCategoria);
routeCategoria.get("/:id", categoriaController.getCategoriaById);
routeCategoria.post("/", categoriaController.createCategoria);
routeCategoria.put("/:id", categoriaController.updateCategoria);
routeCategoria.delete("/:id", categoriaController.deleteCategoria);

export default routeCategoria;