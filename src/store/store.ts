import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import UserReducer from "./User/User.store";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
