import { usersManager } from "../../dao/mongoose.user.manager.js";

export async function postRegisterUsersController(req, res, next) {
    const datosUsuario = req.body;
    console.log(datosUsuario);
    try {
        const resultado = await usersManager.addUser(datosUsuario);
        console.log(resultado);
        res.status(201).json(resultado);
    } catch (error) {
        res.json({ error: error.message });
    }
}
export async function postLoginUsersController(req, res, next) {
    const datosUsuario = req.body;
    console.log(datosUsuario);

    try {
        if (datosUsuario.email === '' || datosUsuario.password === '') {
            res.status(401).json({ result: 'Error' });
        } else {
            const resultado = await usersManager.loginUser(datosUsuario);
            console.log(resultado);
            if (resultado.state !== 'No fue posible iniciar sesión' && resultado) {
                req.session.user = {
                    email: datosUsuario.email,
                }
                res.status(201).json(resultado);
            } else {
                res.status(401).json({ result: 'Error' });
            }
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}