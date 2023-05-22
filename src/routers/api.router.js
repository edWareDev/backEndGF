import { Router } from "express";
import { usersRouter } from "./API/users.router.js";

export const apiRouter = Router();

apiRouter.use('/users', usersRouter)
