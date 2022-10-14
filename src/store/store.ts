import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import UserReducer from "./User/User.store";
import ProductsReducer from "./Products/Products.store";
import StatisticsReducer from "./Statistics/Statistics.store";
import NotificationsReducer from "./Notifications/Notifications.store";

const store = configureStore({
  reducer: {
    user: UserReducer,
    products: ProductsReducer,
    statistics: StatisticsReducer,
    notifications: NotificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
