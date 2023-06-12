import { Router } from "express";
import { customersRouter } from "./API/customers.router.js";
import { usersRouter } from "./API/users.router.js";


export const apiRouter = Router();

apiRouter.use('/customers', customersRouter)
apiRouter.use('/users', usersRouter)
