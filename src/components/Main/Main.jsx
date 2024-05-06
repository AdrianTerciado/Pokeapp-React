import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home"
import Formulario from "./Formulario/Formulario"
import Details from "./Details/Details"

function Main () {
    return (
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<Formulario />} />
            <Route path="/pokemon/:id" element={<Details />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
        </main>
      );
}

export default Main