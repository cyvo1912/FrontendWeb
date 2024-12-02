import React, { useEffect, useState } from "react";
import Headers from "../componentes/Header";
import TablaProductos from "../componentes/TablaProductos";
import Footer from "../componentes/Footer";
import { useParams } from "react-router-dom";
import { ObtenerProductoPorId, ObtenerProductos } from "../../products/apiProductos";
import "./DetalleProducto.css";
import { useContext } from "react";
import { CarritoContext } from "../componentes/CarritoContext";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null); 
  const [productos, setProductos] = useState([]); 
  const {agregarAlCarrito}=useContext(CarritoContext);
  
  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const dato = await ObtenerProductoPorId(id);
        if (dato) {
          setProducto(dato);
        }
      } catch (error) {
        console.error("Error al cargar el producto:", error);
      }
    };

    cargarProducto();
  }, [id]);

  // Cargar todos los productos relacionados
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const datos = await ObtenerProductos();
        if (datos) {
          setProductos(datos); // Establecer los productos en el estado
        }
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    cargarProductos();
  }, []);

  // Si el producto aún no se ha cargado
  if (!producto) {
    return <p>Cargando producto...</p>;
  }

  const manejarAgregarAlCarrito = () => {
    agregarAlCarrito(producto); 
  };

  return (
    <div>
      <Headers />
      <div className="detalle-producto">
        <div className="detalle-imagenes">
          <div className="imagen-principal">
            <img
              src={producto.imagen }
              alt={producto.nombre_producto }
            />
          </div>
        </div>

        {/* Información del producto */}
        <div className="detalle-info">
          <h1 className="titulo">Nombre: {producto.nombre_producto}</h1>
          <p className="precio-original">PEN {producto.precio}</p>
          <p className="descripcion">{producto.descripcion}</p>

          <h3 className="titulo-tallas">Selecciona tu talla:</h3>
          <div className="tallas">
            <button>S</button>
            <button className="talla activo">M</button>
          </div>

          <button onClick={manejarAgregarAlCarrito} className="btn-anadir">Añadir al carrito</button>
        </div>
      </div>

      {/* Tabla de productos relacionados */}
      <div className="tabla-productos">
        {productos.length > 0 ? (
          <TablaProductos productos={productos} />
        ) : (
          <p>No hay productos relacionados disponibles.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DetalleProducto;