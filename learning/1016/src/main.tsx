import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "@fontsource/material-icons";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import RoutesSetUp from "./routes/RoutesSetUp.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <RoutesSetUp />
    </BrowserRouter>
  </Provider>
);
