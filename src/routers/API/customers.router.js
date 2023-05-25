import { Router } from 'express';
import { getCustomersController } from '../../controllers/api/customers.get.controller.js';
import { postCustomersController } from "../../controllers/api/customers.post.controller.js";

export const customersRouter = Router();

customersRouter.get('/', getCustomersController)

customersRouter.post('/', postCustomersController)