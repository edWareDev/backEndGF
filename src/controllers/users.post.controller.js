import { usersManager } from "../dao/mongoose.users.manager.js";
import { User } from "../entities/user.js";

export async function postUsersController(req, res, next) {
    const datosUsuario = req.body;
    console.log(datosUsuario);
    try {
        const result = await usersManager.addUser(datosUsuario);
        res.json(result);
        console.log('!Datos enviados por POST fueron procesados');
    } catch (error) {
        res.json({ error: error.message });
    }
}
