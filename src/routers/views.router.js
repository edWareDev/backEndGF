import { Router } from "express";
import { registroDeDatos } from "../controllers/web/registroDeDatos.controller.js";
import { vistaRegistroUsuario } from '../controllers/web/registro.controller.js'
import { vistaPerfil } from '../controllers/web/perfil.controller.js'
import { autenticacion, isAutenticated } from "../middlewares/autenticacion.js";
import { login } from "../controllers/web/login.controller.js";
import { descargarDatos } from "../controllers/web/descargarDatos.controller.js";


export const viewsRouter = Router()

viewsRouter.get('/', isAutenticated, login)
viewsRouter.get('/signup', vistaRegistroUsuario)
viewsRouter.get('/profile', autenticacion, vistaPerfil)
viewsRouter.get('/registro', autenticacion, registroDeDatos);
viewsRouter.get('/descargarRegistro', autenticacion, descargarDatos);
