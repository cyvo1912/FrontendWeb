const URL = ''

export const obtenerUsuarios = async () => {
    try{
        const response = await fetch(URL);
        return await response.json();
    }catch{
        console.error("No existe el Usaio o Contraseña puesta")
    }
}

export const crearUsuario = async (usuario) => {
    try{
        const response = await fetch(URL,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        return await response.json();
    }catch{
        console.error("Error al crear usuario")
    }
}