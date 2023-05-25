import { customersManager } from '../../dao/mongoose.customer.manager.js';

export async function getCustomersController(req, res) {
    const queryParams = req.query;
    const allUsers = await customersManager.getUsers();
    res.json(allUsers)
}
