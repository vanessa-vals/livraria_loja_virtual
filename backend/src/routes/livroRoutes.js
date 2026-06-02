import express from "express";
import livroController from "../controllers/livroController.js";

const routeLivro = express.Router();

routeLivro.get("/", livroController.showLivro);
routeLivro.get("/:id", livroController.getLivroById);
routeLivro.post("/", livroController.createLivro);
routeLivro.put("/:id", livroController.updateLivro);
routeLivro.delete("/:id", livroController.deleteLivro);

export default routeLivro;