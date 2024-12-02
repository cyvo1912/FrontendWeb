import React, { useContext, useState } from "react";
import { AuthContext } from "../componentes/LoginForm";
import Headers from "../componentes/Header";
import Footer from "../componentes/Footer";
import "./LoginScreen.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../products/apiProductos";

const LoginScreen = () => {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [user, setUser] = useState(null);
  

    const navigate = useNavigate();

    const IrRegister = () => {
      navigate('/register');
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const userData = await loginUser(correo, contraseña); 
  
        if (userData && userData.admin){
          navigate("/pe/es/admin")
        }
        else if (userData) {
          setUser(userData);
          navigate("/pe/es/search/home"); 
          console.log(userData)
          localStorage.setItem("user", JSON.stringify(userData));
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        alert("Error al iniciar sesión: " + error.message); 
      }
    };
  
  
    return (
      <div>
        <Headers></Headers>
        <div className="login-container">
         
          <form className="login-form" onSubmit={handleLogin}>
            <h3>Accede a tu cuenta</h3>
            <input
              id="correo"
              className="login-input"
              type="email"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
           
            <input
              id="contraseña"
              className="login-input"
              type="contraseña"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
            <button
              type="submit"
              className="login-button"

            > Iniciar Sesión</button>

            
            <button className="login-button" onClick={() => IrRegister()}>
              Regístrate
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default LoginScreen;

