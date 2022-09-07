import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { IProduct } from "../../interfaces/IProduct/IProduct";
import { Product } from "../../modules/Product/Product";
import { Sale } from "../../modules/Sale/Sale";

interface ISlice {
  products: IProduct[];
  singleProduct: Product;
  loading: boolean;
  updatedProduct: boolean;
}

const initialState: ISlice = {
  products: [],
  singleProduct: {},
  loading: false,
  updatedProduct: false,
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadRequest(state) {
      state.loading = true;
      state.updatedProduct = false;
    },
    loadRequestFailed(state, { payload }) {
      state.loading = false;
      state.updatedProduct = false;
      console.log(payload);
    },
    loadProductsSucess(state, { payload }) {
      console.log(payload);
      state.loading = false;
      state.products = payload;
    },
    updateProduct(state) {
      state.loading = false;
      state.updatedProduct = true;
    },
  },
});

export default products.reducer;

export const {
  loadProductsSucess,
  loadRequest,
  loadRequestFailed,
  updateProduct,
} = products.actions;

export function asyncLoadProducts(idUser: string) {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadRequest());
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("id_usuario", "==", idUser));
    const querySnapshot = await getDocs(q);

    const allProducts = querySnapshot.docs.map((doc) => {
      return Object.assign({ id_product: doc.id }, doc.data());
    });

    return dispatch(loadProductsSucess(allProducts));
  };
}

export function asyncCreateProduct(product: IProduct) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      // console.log(product);
      dispatch(loadRequest());
      await addDoc(collection(db, "products"), product);

      return dispatch(updateProduct());
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}
