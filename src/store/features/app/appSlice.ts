import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type RootState } from "../../store";
import { type AppState } from "./typings";
import { appThunks } from "./appThunks";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isAppLoading: false,
    users: [],
    orders: [],
    customers: [],
    teams: [],
  } as AppState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isAppLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(appThunks.getUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
    });

    builder.addCase(appThunks.getOrders.fulfilled, (state, { payload }) => {
      state.orders = payload;
    });

    builder.addCase(appThunks.getCustomers.fulfilled, (state, { payload }) => {
      state.customers = payload;
    });

    builder.addCase(appThunks.getTeams.fulfilled, (state, { payload }) => {
      state.teams = payload;
    });
  },
});

export const appSelectors = {
  all: (state: RootState) => state.app,
  isAppLoading: (state: RootState) => state.app.isAppLoading,
  users: (state: RootState) => state.app.users,
  orders: (state: RootState) => state.app.orders,
  customers: (state: RootState) => state.app.customers,
  teams: (state: RootState) => state.app.teams,
};

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
