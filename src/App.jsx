import { BrowserRouter as Router } from "react-router-dom";

import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./modules/auth/componentes/LoginForm";
import { CarritoProvider } from "./modules/auth/componentes/CarritoContext";



function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
      
          <Router>
            <AppNavigator />
          </Router>
        
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
