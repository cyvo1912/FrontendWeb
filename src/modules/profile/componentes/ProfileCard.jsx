import { useEffect } from "react";
import { useState } from "react";
import { editarProducto, eliminarProducto, ObtenerProductos } from "../../products/apiProductos";

export const ProfileCard = () => {

    const [productos, setProductos] = useState([]);
    const [productosEditable, setProductosEditable] = useState(null);

    useEffect(() => {
        const mostrarProductos = async () => {
            const datos = await ObtenerProductos();
            setProductos(datos);
        };
        mostrarProductos();
    }, []);

    const eliminarUnProducto = async (id) => {
        await eliminarProducto(id);
        setProductos(productos.filter((producto) => producto.id !== id));
    };

    const actualizarProducto = async (id, productoActual) => {
        const actualizado = await editarProducto(id, productoActual);
        setProductos(
            productos.map((producto) => 
                producto.id === id ? actualizado : producto
            )
        );
        setProductosEditable(null);
    };

    const iniciarEdicion = (producto) => {
        setProductosEditable({ ...producto });
    };

    const handleChange = (e) => {
        setProductosEditable({
            ...productosEditable,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <h2>Lista de Productos</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre del Producto</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Color</th>
                        <th>Stock</th>
                        <th>Talla</th>
                        <th>Categoría</th>
                        <th>Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre_producto}</td>
                            <td>{producto.precio}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.color}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.talla}</td>
                            <td>{producto.categoria_id}</td>
                            <td>
                                <button onClick={() => eliminarUnProducto(producto.id)}>Eliminar</button>
                                <button onClick={() => iniciarEdicion(producto)}>Editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {productosEditable && (
                <div className="editar-formulario">
                    <h3>Editar Producto</h3>
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            actualizarProducto(productosEditable.id, productosEditable);
                        }}
                    >
                        <input 
                            type="text" 
                            name="nombre_producto" 
                            value={productosEditable.nombre_producto} 
                            onChange={handleChange} 
                            placeholder="Nombre del producto" 
                        />
                        <input 
                            type="number" 
                            name="precio" 
                            value={productosEditable.precio} 
                            onChange={handleChange} 
                            placeholder="Precio" 
                        />
                        <input 
                            type="text" 
                            name="descripcion" 
                            value={productosEditable.descripcion} 
                            onChange={handleChange} 
                            placeholder="Descripción" 
                        />
                        <input 
                            type="text" 
                            name="color" 
                            value={productosEditable.color} 
                            onChange={handleChange} 
                            placeholder="Color" 
                        />
                        <input 
                            type="number" 
                            name="stock" 
                            value={productosEditable.stock} 
                            onChange={handleChange} 
                            placeholder="Stock" 
                        />
                        <input 
                            type="text" 
                            name="talla" 
                            value={productosEditable.talla} 
                            onChange={handleChange} 
                            placeholder="Talla" 
                        />
                        <input 
                            type="text" 
                            name="categoria_id" 
                            value={productosEditable.categoria_id} 
                            onChange={handleChange} 
                            placeholder="Categoría" 
                        />
                        <button type="submit">Actualizar</button>
                    </form>
                </div>
            )}
        </div>
    );
};