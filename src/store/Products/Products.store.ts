import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import {
  IDataEdit,
  IDataPurchased,
  IDataSaled,
  IFormEdit,
} from "../../interfaces/IForm/IFormEdit";
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
    },
    loadRequestFailed(state, { payload }) {
      state.loading = false;
      console.log(payload);
    },
    loadProductsSucess(state, { payload }) {
      console.log(payload);
      state.loading = false;
      state.products = payload;
    },
    updateProduct(state) {
      state.loading = false;
      state.updatedProduct = !state.updatedProduct;
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
    const q = query(productsRef, where("id_user", "==", idUser));
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
      const { storage, id_user, price_purchased, price_saled, id_product } =
        product;
      dispatch(loadRequest());
      // const dataSubmit = {
      //   storage,
      //   id_user,
      //   id_product,
      //   price_purchased,
      //   price_saled,
      //   date: new Date(),
      //   pieces_purchased: storage,
      // };
      await addDoc(collection(db, "products"), product);
      // await addDoc(collection(db, "purchases"), dataSubmit);

      return dispatch(updateProduct());
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}

export function asyncDeleteProduct(idProduct: string) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(loadRequest());
      const response = await deleteDoc(doc(db, "products", idProduct));
      console.log(response);
      return dispatch(updateProduct());
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}

export function asyncUpdateProduct(
  idProduct: string,
  newDataProduct: IDataEdit
) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(loadRequest());
      const response = await updateDoc(doc(db, "products", idProduct), {
        ...newDataProduct,
      });
      console.log(response);
      return dispatch(updateProduct());
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}

export function asyncUpdateStorage(
  data: IDataSaled | IDataPurchased,
  product: IProduct,
  idUser: string,
  collectionDoc: string
) {
  return async function (dispatch: Dispatch<AnyAction>) {
    const { storage, id_product, price_purchased, price_saled } = product;
    const dataSubmit = {
      storage,
      id_user: idUser,
      id_product,
      price_purchased,
      price_saled,
      date: new Date(),
      ...data,
    };

    try {
      dispatch(loadRequest());
      await addDoc(collection(db, collectionDoc), dataSubmit);
      if ("pieces_purchased" in data) {
        const newDataProduct = {
          ...product,
          storage: storage + data.pieces_purchased,
        };
        await updateDoc(doc(db, "products", id_product!), newDataProduct);
      }
      if ("pieces_saled" in data) {
        const newDataSaled = {
          ...product,
          storage: storage - data.pieces_saled,
        };
        await updateDoc(doc(db, "products", id_product!), newDataSaled);
      }
      return dispatch(updateProduct());
    } catch (error: any) {
      dispatch(loadRequestFailed(error.message));
    }
  };
}
