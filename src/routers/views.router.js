import { Router } from "express";
import { registroDeDatos } from "../controllers/web/registroDeDatos.controller.js";
import { autenticacion } from "../middlewares/autenticacion.js";
import { login } from "../controllers/web/login.controller.js";
import { descargarDatos } from "../controllers/web/descargarDatos.controller.js";


export const viewsRouter = Router()

viewsRouter.get('/', login)

viewsRouter.get('/registro',  registroDeDatos);

viewsRouter.get('/descargarRegistro',  descargarDatos);
