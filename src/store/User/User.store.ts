import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  signOut,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";
import { IForm } from "../../interfaces/IForm/IForm";
import { dataStructureUser } from "../../utils/dataStructureUser";

interface ISlice {
  user: {
    uid: string;
    phoneNumber: string;
    email: string;
    name: string;
  } | null;
  loading: boolean;
  requestSucess: boolean;
  messageError: string;
}

const initialState: ISlice = {
  user: null,
  loading: false,
  requestSucess: false,
  messageError: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadRequest(state) {
      state.loading = true;
      state.requestSucess = true;
    },
    loadRequestFailed(state, { payload }: { payload: string }) {
      state.loading = false;
      state.requestSucess = false;
      if (payload.includes("user-not-found")) {
        state.messageError =
          "Usuario não encontrado. Verifique o email e a senha.";
      }
    },
    authUser(state, { payload }) {
      state.user = payload;
      state.loading = false;
      state.requestSucess = true;
      console.log(state.user);
    },
    logoutUser(state) {
      state.user = null;
      state.loading = false;
      state.requestSucess = true;
    },
  },
});

export default user.reducer;

export const { loadRequest, authUser, logoutUser, loadRequestFailed } =
  user.actions;

export function loginUser({ email, password }: IForm) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(loadRequest());
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userData = dataStructureUser(user);
      return dispatch(authUser(userData));
    } catch (error) {
      const { message } = error as FirebaseError;

      dispatch(loadRequestFailed(message));
    }
  };
}

export function registerUser({ email, password, name }: IForm) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(loadRequest());
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      const userData = dataStructureUser(user, name);
      return dispatch(authUser(userData));
    } catch (error) {
      console.log(error);
    }
  };
}

export function asyncLogoutUser() {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(loadRequest());
      const response = await signOut(auth);
      console.log(response);
      return dispatch(logoutUser());
    } catch (error: any) {
      console.log(error);
    }
  };
}
