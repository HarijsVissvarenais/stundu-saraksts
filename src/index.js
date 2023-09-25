import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. Iegut e;ementu no index.html
const elementsNoHTML = document.getElementById("root");

// 2. Parasto elementu parverss par React sakni
const sakne = ReactDOM.createRoot(elementsNoHTML);

// 3. Uz ekrana parada pirmo React komponenti
sakne.render(<App />)