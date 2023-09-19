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
    isModalOpen: false,
    isEditing: false,
    currentUser: null,
    currentTeam: null,
    isAuth: false,
  } as AppState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isAppLoading = payload;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setIsEditing: (state, { payload }) => {
      state.isEditing = payload;
    },
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
    setCurrentTeam: (state, { payload }) => {
      state.currentTeam = payload;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(appThunks.getUsers.pending, (state, { payload }) => {
      state.isAppLoading = true;
    });

    builder.addCase(appThunks.getUsers.fulfilled, (state, { payload }) => {
      state.isAppLoading = false;
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

    builder.addCase(appThunks.signIn.rejected, (state, { payload }) => {
      state.isAppLoading = true;
    });

    builder.addCase(appThunks.signIn.pending, (state) => {
      state.isAppLoading = true;
    });

    builder.addCase(appThunks.signIn.fulfilled, (state, data) => {
      state.isAppLoading = false;
      state.isAuth = true;
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
  isModalOpen: (state: RootState) => state.app.isModalOpen,
};

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
