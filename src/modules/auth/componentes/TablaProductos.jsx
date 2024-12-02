
import "../componentsstilos/TablaProductos.css";

import { Link } from "react-router-dom";
const TablaProductos=({productos})=>{ 


   const productosUnicos = productos.filter(
    (producto, index, self) =>
      index === self.findIndex((p) => p.nombre_producto === producto.nombre_producto)
   );
  
    return(
     <div>
        <div className="div-container">
        <section>
        <h3>Tal vez te interese</h3>
        <ul className="table-products">
            {productosUnicos.map((producto)=>(
            <li key={producto.id} >
            <div className="content-img">
                  <Link to={`/detalle/${producto.id}`}>
                  <img src={producto.imagen} />
                   </Link>
              
        

            </div>

            <div className="content-info">
                 <h4>{producto.nombre_producto}</h4>
                 <p>{producto.precio}</p>
     
            </div>
           
          </li>
          ))}
        

        </ul>
        </section>
        </div>
     </div>
    );
}
export default TablaProductos;