import { Router } from "express";
import clienteController from "../controllers/clienteController.js";
import validateCliente from "../middlewares/clienteMiddleware.js";

const router = Router();

router.get("/",        clienteController.showCliente);
router.get("/:id",     clienteController.getClienteById);
router.post("/",      validateCliente,  clienteController.createCliente);
router.put("/:id",    validateCliente,  clienteController.updateCliente);
router.delete("/:id",  clienteController.deleteCliente);

export default router;