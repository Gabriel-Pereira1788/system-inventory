import { AnyAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import { api } from "../../api/api";

import {
  IRelevantStatistics,
  IStatiticsPerMonth,
  IStatiticsTotal,
} from "../../interfaces/IStatistics/IStatistics";

type Slice = {
  loading: boolean;
  statisticsTotal: IStatiticsTotal | null;
  statisticsMonths: { [index: string]: IStatiticsPerMonth } | null;
  statisticsYear: Object;
  relevantStatistics: IRelevantStatistics | null;
  lastSale: Object;
  updated: boolean;
};

const initialState: Slice = {
  loading: false,
  statisticsTotal: null,
  statisticsMonths: null,
  statisticsYear: {},
  relevantStatistics: null,
  lastSale: {},
  updated: false,
};

export const sales = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    loadRequest(state) {
      state.loading = true;
      state.updated = false;
    },
    getStatistics(state, { payload }) {
      // console.log(data_month);
      state.loading = false;
      state.statisticsTotal = payload.dataTotal;
      state.statisticsMonths = payload.dataMonth;
      state.relevantStatistics = payload.relevantStatistics;
    },
    returnDefaultState() {
      return {
        loading: false,
        statisticsTotal: null,
        statisticsMonths: null,
        statisticsYear: {},
        relevantStatistics: null,
        lastSale: {},
        updated: false,
      };
    },
  },
});

export default sales.reducer;

export const { loadRequest, getStatistics, returnDefaultState } = sales.actions;

export function asyncGetStatistics(idUser: string) {
  return async function (dispatch: Dispatch<AnyAction>) {
    dispatch(loadRequest());
    const { data } = await api.get(`/get-statistics/${idUser}`);
    console.log(data);
    return dispatch(getStatistics(data));
  };
}
