import express from "express";
import editoraController from "../controllers/editoraController.js";

const routeEditora = express.Router();

routeEditora.get("/", editoraController.showEditora);
routeEditora.get("/:id", editoraController.getEditoraById);
routeEditora.post("/", editoraController.createEditora);
routeEditora.put("/:id", editoraController.updateEditora);
routeEditora.delete("/:id", editoraController.deleteEditora);

export default routeEditora;
