import { Router } from "express";
import editoraController from "../controllers/editoraController.js";
import validateEditora from "../middlewares/editoraMiddleware.js";

const router = Router();

router.get("/",        editoraController.showEditora);
router.get("/:id",     editoraController.getEditoraById);
router.post("/",      validateEditora,  editoraController.createEditora);
router.put("/:id",    validateEditora,  editoraController.updateEditora);
router.delete("/:id",  editoraController.deleteEditora);

export default router;