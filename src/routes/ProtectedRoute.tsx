import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

type Props = {
  isDefaultRoutes?: true;
  isUserRoute?: true;
};

export function ProtectedRoutes({ isDefaultRoutes, isUserRoute }: Props) {
  const { user } = useSelector((slice: RootState) => slice.user);
  console.log(console.log(user));
  if (isUserRoute) {
    return user ? <Outlet /> : <Navigate to="/login" />;
  }

  return isDefaultRoutes && !user ? <Outlet /> : <Navigate to="/system" />;
}
