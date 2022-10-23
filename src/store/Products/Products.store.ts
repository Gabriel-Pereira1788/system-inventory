import { paginationItemClasses } from "@mui/material";
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
import { api } from "../../api/api";
import { db } from "../../firebase/firebase";
import {
  IDataEdit,
  IDataPurchased,
  IDataSaled,
  IFormEdit,
} from "../../interfaces/IForm/IFormEdit";
import { IProduct } from "../../interfaces/IProduct/IProduct";
import { IRelevantStatistics } from "../../interfaces/IStatistics/IStatistics";
import { Product } from "../../modules/Product/Product";
import { Sale } from "../../modules/Sale/Sale";
import { triggerGetList } from "../Notifications/Notifications.store";

interface ISlice {
  products: { relevantStatistics: IRelevantStatistics; product: IProduct }[];
  displayProducts: {
    relevantStatistics: IRelevantStatistics;
    product: IProduct;
  }[];
  singleProduct: Product;
  loading: boolean;
  loadingProducts: boolean;
  updatedProduct: boolean;
}

const initialState: ISlice = {
  products: [],
  displayProducts: [],
  singleProduct: {},
  loading: false,
  loadingProducts: false,
  updatedProduct: false,
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadRequest(state) {
      state.loading = true;
    },
    loadProducts(state) {
      state.loadingProducts = true;
    },
    loadRequestFailed(state, { payload }) {
      state.loading = false;
      state.loadingProducts = false;
      console.log(payload);
    },
    loadProductsSucess(state, { payload }) {
      state.loading = false;
      state.loadingProducts = false;
      state.products = payload;
      state.displayProducts = payload;
    },
    updateProduct(state) {
      state.loading = false;
      state.updatedProduct = !state.updatedProduct;
    },
    updatedStorage(state) {
      state.loading = false;
    },

    searchProduct(state, { payload }) {
      const filteredProducts = state.products.filter(({ product }) =>
        product.name_product.includes(payload)
      );
      state.displayProducts = filteredProducts;
    },
    returnStateProducts() {
      return {
        products: [],
        displayProducts: [],
        singleProduct: {},
        loading: false,
        loadingProducts: false,
        updatedProduct: false,
      };
    },
  },
});

export default products.reducer;

export const {
  loadProductsSucess,
  loadRequest,
  loadProducts,
  loadRequestFailed,
  updateProduct,
  updatedStorage,
  returnStateProducts,
  searchProduct,
} = products.actions;

export function asyncLoadProducts(idUser: string) {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadProducts());
    const { data } = await api.get(`/products/${idUser}`);

    return dispatch(loadProductsSucess(data.dataProduct));
  };
}

export function asyncCreateProduct(product: IProduct) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      // console.log(product);

      dispatch(loadRequest());
      await api.post(`/create-product`, product);

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
      const { data } = await api.delete(`/delete-product/${idProduct}`);
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
      await api.patch(`/edit-product/${idProduct}`, newDataProduct);
      return dispatch(updateProduct());
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}

export function asyncPurchasedProduct(
  data: IDataPurchased,
  product: IProduct,
  idUser: string
) {
  return async function (dispatch: Dispatch<AnyAction>) {
    const { storage, id_product, price_purchased, price_saled } = product;
    try {
      dispatch(loadRequest());
      const dataSubmit = {
        storage,
        id_user: idUser,
        id_product,
        price_purchased,
        price_saled,
        date: new Date(),
        ...data,
      };
      await api.post(`/purchased-product`, dataSubmit);
      product.storage = product.storage + data.pieces_purchased;

      await api.patch(`/edit-product/${id_product}`, product);
      return dispatch(updateProduct());
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}
export function asyncSaledProduct(
  data: IDataSaled,
  product: IProduct,
  idUser: string
) {
  return async function (dispatch: Dispatch<AnyAction>) {
    const { storage, id_product, price_purchased, price_saled } = product;
    try {
      dispatch(loadRequest());
      const dataSubmit = {
        storage,
        id_user: idUser,
        id_product,
        price_purchased,
        price_saled,
        date: new Date(),
        ...data,
      };
      await api.post(`/saled-product`, dataSubmit);
      product.storage = product.storage - data.pieces_saled;

      await api.patch(`/edit-product/${id_product}`, product);
      return dispatch(updateProduct());
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}

export function asyncSearchProduct(text: string) {
  return async function (dispatch: Dispatch<AnyAction>) {
    try {
      dispatch(loadRequest());
      const { data } = await api.get(`/search-product/${text}`);

      return "tet";
    } catch (error: any) {
      return dispatch(loadRequestFailed(error.message));
    }
  };
}
