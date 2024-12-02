import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../componentes/Header";
import Footer from "../componentes/Footer";
import { Registrarse } from "../../products/apiProductos";
import "./RegisterScreen.css";


const RegisterScreen = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();


  const IrLogin = () => {
    navigate("/pe/es/logon");
  };
 


  const handleRegistrarse = async (e) => {
    e.preventDefault();

    const result = await Registrarse(nombre, contraseña, correo, telefono);

    if (result.error) {
      setError(result.error);
    } else {
        setSuccess(true);
        setNombre("");
        setCorreo("");
        setContraseña("");
        setTelefono("");
        
        setTimeout(() => {
          setSuccess(false);
          navigate("/pe/es/logon");
        }, 2000);
      console.log("Usuario registrado:", result);
    }
  };

  return (
    <div>
      <Headers />
      <div className="login-container">
        <form className="login-form" onSubmit={handleRegistrarse}>
          <h3>Regístrate</h3>
          
          <input
            id="nombre"
            className="login-input"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            id="correo"
            className="login-input"
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          
          <input
            id="telefono"
            className="login-input"
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />

          <input
            id="contraseña"
            className="login-input"
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />

          <button type="submit" className="login-button">
            Registrarse
          </button>

          <button className="login-button" onClick={IrLogin}>
            Ya tengo cuenta
          </button>
        </form>
                {success && (
          <div className="popup-success">
            <p>¡Registro exitoso!</p>
          </div>
        )}

        {error && (
          <div className="popup-error">
            <p>{error}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RegisterScreen;
