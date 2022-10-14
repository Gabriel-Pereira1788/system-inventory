import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { INotificationsDTO } from "../../interfaces/INotifications/INotifications";

type Slice = {
  loading: boolean;
  notifications: INotificationsDTO[];
  triggerGetList: boolean;
};

const initialState: Slice = {
  loading: false,
  notifications: [],
  triggerGetList: false,
};

const notifications = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    loadRequest(state) {
      state.loading = true;
    },
    loadRequestFailed(state, { payload }) {
      state.loading = false;
      console.log(payload);
    },
    requestFinish(state) {
      state.loading = false;
      state.triggerGetList = !state.triggerGetList;
    },
    getNotifications(state, { payload }) {
      state.notifications = payload;
    },
    triggerGetList(state) {
      state.triggerGetList = !state.triggerGetList;
    },
  },
});

export default notifications.reducer;

export const {
  loadRequest,
  loadRequestFailed,
  getNotifications,
  requestFinish,
  triggerGetList,
} = notifications.actions;

export function asyncGetNotifications(idUser: string) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(loadRequest());
      const { data } = await api.get(`/get-notifications/${idUser}`);
      console.log(data);
      return dispatch(getNotifications(data.notifications));
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}

export function asyncReadNotification(
  dataRequest: INotificationsDTO,
  id: string
) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(loadRequest());
      const { data } = await api.get(`/read-notification/${id}`);
      return dispatch(requestFinish());
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}
