import { Router } from 'express';
import { getUsersController } from '../../controllers/users.get.controller.js';
import { postUsersController } from "../../controllers/users.post.controller.js";

export const usersRouter = Router();

usersRouter.get('/', getUsersController)

usersRouter.post('/', postUsersController)