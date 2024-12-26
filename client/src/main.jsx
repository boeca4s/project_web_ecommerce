import "./index.css";
import App from "./App.jsx";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}> </Route>
        <Route exact path="/detail" element={<ProductDetail/>}> </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
