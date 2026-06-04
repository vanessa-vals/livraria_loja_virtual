import { Router } from "express";
import compraController from "../controllers/compraController.js";
import validateCompra from "../middlewares/compraMiddleware.js";

const router = Router();

router.get("/",        compraController.showCompra);
router.get("/:id",     compraController.getCompraById);
router.post("/",      validateCompra,  compraController.createCompra);
router.put("/:id",    validateCompra,  compraController.updateCompra);
router.delete("/:id",  compraController.deleteCompra);

export default router;