import { Router } from "express";
import livroController from "../controllers/livroController.js";
import validateLivro from "../middlewares/livroMiddleware.js";

const router = Router();

router.get("/", livroController.showLivro);
router.get("/:id", livroController.getLivroById);
router.post("/", validateLivro, livroController.createLivro);
router.put("/:id", validateLivro, livroController.updateLivro);
router.delete("/:id", livroController.deleteLivro);

export default router;
