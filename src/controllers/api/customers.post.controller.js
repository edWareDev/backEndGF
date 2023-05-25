import { customersManager } from "../../dao/mongoose.customer.manager.js";

export async function postCustomersController(req, res, next) {
    const datosUsuario = req.body;
    try {
        const result = await customersManager.addCustomer(datosUsuario);
        console.log(datosUsuario.dni);
        res.json(result);
        console.log('!Datos enviados por POST fueron procesados');
    } catch (error) {
        res.json({ error: error.message });
    }
}
