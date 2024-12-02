const URL = 'https://backendweb-xzp6.onrender.com';

export const ObtenerProductos = async () => {
    try{
        const response = await fetch(`${URL}/products`);
        return await response.json();
    }catch{
        console.error("Error al cargar la tabla")
    }
}


export const ObtenerProductoPorId = async (id) => {
    try {
        const response = await fetch(`${URL}/products/${id}`);
        return await response.json();
    } catch {
        console.error("Error al cargar el producto");
    }
};


export const ObtenerProductoPorCategoria = async (id) => {
    try {
        const response = await fetch(`${URL}/tipo/${id}/productos`);
        return await response.json();
    } catch {
        console.error("Error al cargar el producto");
    }
};

export const Registrarse = async (nombre, contraseña, correo, telefono) => {
    try {
      const newUser = { nombre, contraseña, correo, telefono };
      const response = await fetch(`${URL}/inicioSesion/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      return await response.json();
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };


export const editarProducto = async (id, nuevoProducto) => {
    try{
        const response = await fetch(`${URL}/usuarios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto)
        })
        return await response.json();
    }catch{
        console.error("Error al editar un producto")
    }
}

export const eliminarProducto = async (id) => {
    try{
        const response = await fetch(`${URL}/usuarios/${id}`, {
            method: 'DELETE',
        })
        return await response.json();
    }catch{
        console.error("Error al eliminar un producto")
    }
}

export const loginUser = async (correo, contraseña) => {
    try {
      const response = await fetch(`${URL}/inicioSesion/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contraseña }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al iniciar sesión');
      }
  
      const data = await response.json();
      console.log('Inicio de sesión exitoso:', data);
      return data;
    } catch (error) {
      console.error('Error:', error.message);
      alert(error.message);
    }
};  