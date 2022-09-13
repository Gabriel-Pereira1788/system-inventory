import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { IProduct } from "../../interfaces/IProduct/IProduct";
import {
  IStatiticsPerMonth,
  IStatiticsTotal,
} from "../../interfaces/IStatistics/IStatistics";
import { dataC, dataTestPurhcased } from "../../mock/data";
import { Sale } from "../../modules/Sale/Sale";
import { calculatePerMonth } from "../../utils/calculatePerMonth";
import { calculateTotal } from "../../utils/calculateTotals";

type Slice = {
  loading: boolean;
  statisticsTotal: IStatiticsTotal | null;
  statisticsMonths: { [index: string]: IStatiticsPerMonth } | null;
  statisticsYear: Object;
  lastSale: Object;
  updated: boolean;
};

const initialState: Slice = {
  loading: false,
  statisticsTotal: null,
  statisticsMonths: null,
  statisticsYear: {},
  lastSale: {},
  updated: false,
};

export const sales = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    loadRequest(state) {
      state.loading = false;
      state.updated = false;
    },
    getStatistics(state, { payload }) {
      const data_month = calculatePerMonth(
        payload.allSales,
        payload.allPurchases
      );

      const data_total = calculateTotal(data_month, payload.allProducts);
      console.log(data_month);
      state.loading = false;
      state.statisticsTotal = { ...data_total };
      state.statisticsMonths = data_month;
    },
  },
});

export default sales.reducer;

export const { loadRequest, getStatistics } = sales.actions;

export function asyncGetStatistics(idUser: string, allProducts: IProduct[]) {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadRequest());
    const salesRef = collection(db, "sales");
    const purchasesRef = collection(db, "purchases");

    const qSales = query(salesRef, where("id_user", "==", idUser));
    const qPurchases = query(purchasesRef, where("id_user", "==", idUser));

    const querySnapshotSales = await getDocs(qSales);
    const querySnapshotPurchases = await getDocs(qPurchases);

    const allSales = querySnapshotSales.docs.map((doc) => doc.data());
    const allPurchases = querySnapshotPurchases.docs.map((doc) => doc.data());
    return dispatch(getStatistics({ allSales, allPurchases, allProducts }));
  };
}
