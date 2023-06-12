const formRegister = document.querySelector('#formRegister');
formRegister.addEventListener('submit', async (e) => {
    e.preventDefault()
    const dist = document.getElementById('dist');
    const prov = document.getElementById('prov');
    const dept = document.getElementById('dept');

    const datosFormulario = new FormData(formRegister)
    const datosUsuario = {
        name: datosFormulario.get('name'),
        lastName: datosFormulario.get('lastName'),
        dni: datosFormulario.get('dni'),
        phone: datosFormulario.get('phone'),
        email: datosFormulario.get('email'),
        address: datosFormulario.get('inaddress'),
        dept: dept.options[dept.selectedIndex].text,
        state: prov.options[prov.selectedIndex].text,
        district: dist.options[dist.selectedIndex].text,
        dob: datosFormulario.get('dob'),
        password: datosFormulario.get('password')
    }

    try {
        const usuarioCreado = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosUsuario),
        }).then(res => res.json())
        console.log(usuarioCreado);
    } catch (error) {
        console.error(error);
    }
})