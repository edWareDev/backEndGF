import XlsxPopulate from 'xlsx-populate';
export async function generateXLS(object, filename) {
    try {

        const workbook = await XlsxPopulate.fromBlankAsync();

        const sheet = workbook.sheet(0);

        const headerStyle = {
            fill: {
                type: 'pattern',
                pattern: 'solid',
                foreground: {
                    rgb: "0000ff"
                },
                background: {
                    theme: 3,
                    tint: 0.4
                }
            },
            fontColor: 'FFFFFF',
            bold: true
        };

        const headers = Object.keys(object[0]);
        headers.forEach((header, index) => {
            sheet.cell(1, index + 1).value(header).style(headerStyle);
        });

        object.forEach((row, rowIndex) => {
            Object.values(row).forEach((value, columnIndex) => {
                sheet.cell(rowIndex + 2, columnIndex + 1).value(value);
            });
        });
        // Adjust column widths based on content length
        headers.forEach((header, index) => {
            const column = sheet.column(index + 1);
            const maxLength = Math.max(header.length, ...object.map(row => String(row[header]).length));
            column.width(Math.min(30, maxLength + 2)); // Set a maximum width of 30
        });
        sheet.column(headers.length + 1).width(20);
        sheet.usedRange().style({ horizontalAlignment: 'center' });
        await workbook.toFileAsync(`./public/downloads/${filename}.xlsx`);
        console.log('El archivo de Excel se ha creado exitosamente.');
    } catch (error) {
        console.error('Ocurrió un error al crear el archivo de Excel:', error);
    }
}
