import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../pages/About";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RootState } from "../store/store";
import NotUserRoute from "./NotUserRoute";
import UserRoute from "./UserRoute";
type Props = {};

const Router = (props: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <NotUserRoute>
                <Home />
              </NotUserRoute>
            }
          />
          <Route
            path="/login"
            element={
              <NotUserRoute>
                <Login />
              </NotUserRoute>
            }
          />
          <Route
            path="/register"
            element={
              <NotUserRoute>
                <Register />
              </NotUserRoute>
            }
          />
        </Route>

        <Route path="/system">
          <Route
            index
            element={
              <UserRoute>
                <DashBoard />
              </UserRoute>
            }
          />
        </Route>

        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
