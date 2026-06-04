import { Router } from "express";
import categoriaController from "../controllers/categoriaController.js";
import validateCategoria from "../middlewares/categoriaMiddleware.js";

const router = Router();

router.get("/",        categoriaController.showCategoria);
router.get("/:id",     categoriaController.getCategoriaById);
router.post("/",      validateCategoria,  categoriaController.createCategoria);
router.put("/:id",    validateCategoria,  categoriaController.updateCategoria);
router.delete("/:id",  categoriaController.deleteCategoria);

export default router;  