import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Provider>
);