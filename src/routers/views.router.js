import { Router } from "express";
import { usersManager } from "../dao/mongoose.users.manager.js";

export const viewsRouter = Router()

viewsRouter.get('/', async (req, res, next) => {
    const allUsers = await usersManager.getUsers();
    res.render('inicio', {
        cssName: 'inicio',
        pageTitle: 'Inicio',
        hayUsers: allUsers.length > 0,
        allUsers,
    });
});