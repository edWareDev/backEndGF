const formLogin = document.querySelector('#formLogin');
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault()

    const datosFormulario = new FormData(formLogin)
    const datosUsuario = {
        email: datosFormulario.get('email'),
        password: datosFormulario.get('password'),
    }
    try {
        const respuesta = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosUsuario),
        })

        if (respuesta.ok) {
            const data = await respuesta.json()
            console.log(data);
            if (data.result !== 'Error') {
                location.href = '/registro'
            } else {
                Toastify({
                    text: "Otro Error",
                    duration: 3000
                }).showToast();
            }
        } else {
            Toastify({
                text: "Las credenciales son incorrectas",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #c82910, #c99210)",
                }
            }).showToast();
        }

    } catch (error) {
        console.error(error);
    }
})