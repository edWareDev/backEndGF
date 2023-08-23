export async function postTest(req, res, next) {
    try {
        console.log('Solicitud POST satisfactoria');
        res.status(201).json({ resultado: 'Solicitud POST satisfactoria' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}