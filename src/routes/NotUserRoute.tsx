import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

type Props = {
  children: ReactNode;
};

const NotUserRoute = ({ children }: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);

  if (user) {
    return <Navigate to="/system" />;
  }

  return <>{children}</>;
};

export default NotUserRoute;
