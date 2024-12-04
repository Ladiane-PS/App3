import { Router } from "express";
//import controllersMateriais from "./controllers/controllers.materiais.js";
import controllerUser from "./controllers/controller.user.js";

const router = Router();

//materiais
//router.get("/materiais", controllerMateriais.Listar);
// User..
router.post("/users/register", controllerUser.Inserir);
router.post("/users/login", controllerUser.Login);

export default router;