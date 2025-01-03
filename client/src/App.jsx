//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import Products from "./components/Products";
import Layout from "./Layouts/Layouts";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
        <Route exact path="/detail" element={<ProductDetail/>}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
