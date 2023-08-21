import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { AuthenticationContextProvider } from "./context/AuthenticationContext.js";
import { SimulationContextProvider } from "./context/SimulationContext.js";

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <AuthenticationContextProvider>
            <SimulationContextProvider>
                <App />
            </SimulationContextProvider>
        </AuthenticationContextProvider>
    </React.StrictMode>
);
