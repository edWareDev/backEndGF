import { usersManager } from '../dao/mongoose.users.manager.js';

export async function getUsersController(req, res) {
    const queryParams = req.query;
    const allUsers = await usersManager.getUsers();
    res.json(allUsers)
}
