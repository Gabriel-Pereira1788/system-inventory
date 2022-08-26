import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../pages/About";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Register from "../pages/Register";
import { RootState } from "../store/store";
import { ProtectedRoutes } from "./ProtectedRoute";

type Props = {};

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<ProtectedRoutes isDefaultRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedRoutes isDefaultRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes isDefaultRoutes />}>
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoutes isUserRoute />}>
          <Route path="system" element={<DashBoard />} />
        </Route>
        <Route element={<ProtectedRoutes isUserRoute />}>
          <Route path="products" element={<Products />} />
        </Route>

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
