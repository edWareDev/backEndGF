import { Router } from "express";
import { customersRouter } from "./API/customers.router.js";

export const apiRouter = Router();

apiRouter.use('/customers', customersRouter)
