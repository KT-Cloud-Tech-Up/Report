import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RoutesSetup from "./routes/Routes.tsx";
import NavBar from "./components/NavBar.tsx";
import { LoginContext } from "./context/LoginContext.tsx";

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <BrowserRouter>
        <NavBar />
        <RoutesSetup />
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
