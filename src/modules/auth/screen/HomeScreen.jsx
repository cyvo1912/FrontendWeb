import React from "react";
import Headers from "../componentes/Header";
import Footer from "../componentes/Footer";
import "./HomeScreen.css"
import ListaNavegacion from "../componentes/ListaNavegacion";





const HomeScreen=()=>{
     return(
     <>
       <Headers></Headers>
      
      <main>
       <div>
       <ListaNavegacion></ListaNavegacion>
       <img className="imagen" src="https://cdn.pixabay.com/photo/2018/06/25/17/03/fashion-3497413_1280.jpg">
       
       </img>
       <img className="imagen" src="https://cdn.pixabay.com/photo/2016/10/03/00/08/shoe-1710727_1280.jpg"></img>
      
       </div>

      
       </main>
       <Footer></Footer>
       
     </>

    );



}
export default  HomeScreen;