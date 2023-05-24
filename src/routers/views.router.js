import { Router } from "express";
import { usersManager } from "../dao/mongoose.users.manager.js";
import { generateXLS } from "../functions/generateXLS.js";


export const viewsRouter = Router()

viewsRouter.get('/', async (req, res, next) => {
    const allUsers = await usersManager.getUsers();
    const filename = new Date().toLocaleString().replace(/[/:]/g, '').replace(/,/g, '_').replace(/\s/g, '');
    const transformandoDataParaXLS = allUsers.map(item => ({
        "ID": item._id.toString(),
        "NOMBRE": item.userName,
        "DNI": item.userDni,
        "CELULAR": item.userPhone,
        "EMAIL": item.userEmail,
        "DIA DE NACIMIENTO": item.userDateOfBirth.day,
        "MES DE NACIMIENTO": item.userDateOfBirth.month,
        "AÑO DE NACIMIENTO": item.userDateOfBirth.year,
        "DIRECCIÓN": item.userAddress.address,
        "DISTRITO": item.userAddress.district,
        "PROVINCIA": item.userAddress.state,
        "DEPARTAMENTO": item.userAddress.region,
    }));
    generateXLS(transformandoDataParaXLS, filename);


    res.render('inicio', {
        xlsName: filename,
        cssName: 'inicio',
        pageTitle: 'Inicio',
        hayUsers: allUsers.length > 0,
        allUsers,
    });
});


