import { Router } from 'express';
import { postTest } from '../../controllers/api/test.post.controller.js';
import { getTest } from '../../controllers/api/test.get.controller.js';

export const testRouter = Router();

testRouter.post('/', postTest)
testRouter.get('/', getTest)
