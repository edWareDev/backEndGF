import { customersManager } from "../../dao/mongoose.customer.manager.js";
import { generateXLS } from "../../functions/generateXLS.js";
import fs from 'fs';

export async function descargarDatos(req, res, next) {
    try {
        const allCustomers = await customersManager.getCustomers();
        if (allCustomers.length > 0) {
            const filename = new Date()
                .toLocaleString()
                .replace(/[/:]/g, '')
                .replace(/,/g, '_')
                .replace(/\s/g, '');

            const transformandoDataParaXLS = allCustomers.map((item) => ({
                "DNI": String(item.customerDni).padStart(8, "0"),
                "NOMBRE": item.customerName,
                "CELULAR": item.customerPhone,
                "EMAIL": item.customerEmail,
                "DIA DE NACIMIENTO": item.customerDateOfBirth.day,
                "MES DE NACIMIENTO": item.customerDateOfBirth.month,
                "AÑO DE NACIMIENTO": item.customerDateOfBirth.year,
                "PROYECTO": item.customerAddress.address,
                "DISTRITO": item.customerAddress.district,
                "PROVINCIA": item.customerAddress.state,
                "DEPARTAMENTO": item.customerAddress.region,
                "AUTORIZÓ": item.customerAuthorization ? 'Sí' : 'No',
                // "DNI-RENIEC": `${item.verifiedData?.nombres} ${item.verifiedData?.apellidoPaterno} ${item.verifiedData?.apellidoMaterno}` || 'NO SE ENCONTRÓ REGISTRO EN RENIEC'
                "DNI-RENIEC": item.verifiedData ? (item.verifiedData.success ? `${item.verifiedData?.nombres} ${item.verifiedData?.apellidoPaterno} ${item.verifiedData?.apellidoMaterno}` : '--SIN DATOS RENIEC--') : '--SIN DATOS RENIEC--'
            }));

            await generateXLS(transformandoDataParaXLS, filename);

            const archivoPath = `public/downloads/${filename}.xlsx`;
            res.download(archivoPath, `${filename}.xlsx`, (err) => {
                if (err) {
                    console.error('Error al descargar el archivo:', err);
                    res.status(500).end();
                } else {
                    // Eliminar el archivo después de descargarlo si es necesario
                    fs.unlinkSync(archivoPath);
                }
            });
        } else {
            throw new Error('No hay registros para generar el excel');
        }

    } catch (error) {
        next(error);
    }
}