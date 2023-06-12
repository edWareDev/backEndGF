import { Router } from 'express';
import { postLoginUsersController, postRegisterUsersController } from '../../controllers/api/users.post.controller.js';

export const usersRouter = Router();

usersRouter.post('/', postRegisterUsersController)
usersRouter.post('/login', postLoginUsersController)
