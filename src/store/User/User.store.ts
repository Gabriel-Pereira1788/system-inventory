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
import { api } from "../../api/api";
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
      state.messageError = "";
    },
    loadRequestFailed(state, { payload }: { payload: string }) {
      state.loading = false;
      state.requestSucess = false;
      if (payload.includes("user-not-found")) {
        state.messageError = "Usuario não encontrado.";
      }
      if (payload.includes("wrong-password")) {
        state.messageError = "Senha errada.";
      }
      if (payload.includes("email")) {
        state.messageError = "Email ja em uso.";
      }
    },
    authUser(state, { payload }) {
      state.user = payload;
      state.loading = false;
      state.requestSucess = true;
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

        const userData = dataStructureUser(user, name);
        await api.post(`/create-notification`, {
          id_user: userData.uid,
          type_notification: "novo usuario",
          item_alert: "user",
        });

        return dispatch(authUser(userData));
      }
    } catch (error) {
      console.log(error);
      const { message } = error as FirebaseError;
      return dispatch(loadRequestFailed(message));
    }
  };
}

export function asyncLogoutUser() {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(loadRequest());
      const response = await signOut(auth);
      return dispatch(logoutUser());
    } catch (error: any) {
      console.log(error);
    }
  };
}
