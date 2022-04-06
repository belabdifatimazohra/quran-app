import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from 'react-bootstrap/ThemeProvider'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider dir="rtl">
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
