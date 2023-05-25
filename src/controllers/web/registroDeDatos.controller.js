import { customersManager } from "../../dao/mongoose.customer.manager.js";

export async function registroDeDatos(req, res, next) {
    const allCustomers = await customersManager.getCustomers();
    for (let i = 0; i < allCustomers.length; i++) {
        const customer = allCustomers[i];
        customer.customerDni = String(customer.customerDni).padStart(8, "0")
    }
    res.render('registroDeDatos', {
        cssName: 'registroDeDatos',
        pageTitle: 'Global Fiber - Datos',
        hayCustomers: allCustomers.length > 0,
        allCustomers
    });
}