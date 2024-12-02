import React, { useState } from "react";
import Footer from "../componentes/Footer";
import Headers from "../componentes/Header";
import TablaProductos from "../componentes/TablaProductos";
import { ObtenerProductos } from "../../products/apiProductos";
import { useEffect } from "react";

const BuscarScreen = () => {
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        const cargarProductos = async () => {
            const datos = await ObtenerProductos();
            if (datos) {
                setProductos(datos); 
            }
           
        };

        cargarProductos();
    }, []);

    return(
        <div>
            <Headers></Headers>
             
            <TablaProductos productos={productos}  />
            <Footer></Footer>
        </div>
    )
}

export default BuscarScreen;
