import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const products = createSlice({
  name: "products",
  initialState: {
    products: [],
    singleProduct: {},
    loading: false,
  },
  reducers: {
    loadRequest(state) {
      state.loading = true;
    },

    loadProductsSucess(state, { payload }) {
      console.log(payload);
      state.loading = false;
      state.products = payload;
    },
  },
});

export default products.reducer;

export const { loadProductsSucess, loadRequest } = products.actions;

export function asyncLoadProducts(idUser: string) {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadRequest());
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("id_usuario", "==", idUser));
    const querySnapshot = await getDocs(q);

    const allProducts = querySnapshot.docs.map((doc) => doc.data());
    return dispatch(loadProductsSucess(allProducts));
  };
}
