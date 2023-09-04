import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api";
import { GetUsersRequest } from "./typings";

export const getUsers = createAsyncThunk(
  "users/get",
  async (payload: GetUsersRequest) => {
    const data = await api.getAllUsers(payload);

    return data;
  }
);
export const appThunks = { getUsers };
