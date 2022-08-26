import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { IForm } from "../../interfaces/IForm/IForm";
import { dataStructureUser } from "../../utils/dataStructureUser";

const user = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    requestSucess: false,
  },
  reducers: {
    loadRequest(state) {
      state.loading = true;
      state.requestSucess = true;
    },
    authUser(state, { payload }) {
      state.user = payload;
      state.loading = false;
      state.requestSucess = true;
      console.log(state.user);
    },
  },
});

export default user.reducer;

export const { loadRequest, authUser } = user.actions;

export function loginUser({ email, password }: IForm) {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadRequest());
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const userData = dataStructureUser(user);
    return dispatch(authUser(userData));
  };
}

export function registerUser({ email, password }: IForm) {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadRequest());
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userData = dataStructureUser(user);
    return dispatch(authUser(userData));
  };
}

export function logoutUser() {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadRequest());
    const response = await signOut(auth);
    console.log(response);
    return dispatch(loadRequest());
  };
}
