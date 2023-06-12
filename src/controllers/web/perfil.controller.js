export function vistaPerfil(req, res, next) {
    res.render('profile', { pageTitle: 'Perfil', user: JSON.stringify(req.session['user']) })
}