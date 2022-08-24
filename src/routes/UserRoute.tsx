import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

type Props = {
  children: ReactNode;
};

const UserRoute = ({ children }: Props) => {
  const { user } = useSelector((slice: RootState) => slice.user);
  if (!user) {
    return <Navigate to="/register" />;
  }

  return <>{children}</>;
};

export default UserRoute;
