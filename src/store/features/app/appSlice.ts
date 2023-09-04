import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type RootState } from "../../store";
import { type AppState } from "./typings";
import { appThunks } from "./appThunks";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isAppLoading: false,
    users: [],
  } as AppState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isAppLoading = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(appThunks.getUsers.fulfilled, (state, { payload }) => {
      console.log(payload);

      //@ts-ignore
      state.users = payload;
    });
  },
});

export const appSelectors = {
  all: (state: RootState) => state.app,
  isAppLoading: (state: RootState) => state.app.isAppLoading,
  users: (state: RootState) => state.app.users,
};

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
