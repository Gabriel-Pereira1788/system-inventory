import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import {
  IStatiticsPerMonth,
  IStatiticsTotal,
} from "../../interfaces/Date/IDate";
import { dataTestPurhcased } from "../../mock/data";
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
      const data_month = calculatePerMonth(payload, dataTestPurhcased);
      const data_total = calculateTotal(data_month);

      state.loading = false;
      state.statisticsTotal = { ...data_total };
      state.statisticsMonths = data_month;
    },
  },
});

export default sales.reducer;

export const { loadRequest, getStatistics } = sales.actions;

export function asyncGetStatistics(idUser: string) {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadRequest());
    const salesRef = collection(db, "sales");
    const q = query(salesRef, where("id_usuario", "==", idUser));
    const querySnapshot = await getDocs(q);
    const allSales = querySnapshot.docs.map((doc) => doc.data);

    return dispatch(getStatistics(allSales));
  };
}

export function asyncSaleProduct(sale: Sale) {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadRequest());
  };
}
