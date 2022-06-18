import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployeesFromApi } from "../../api";

const initials = {
  employees: [],
  status: "idle",
  error: null,
};

export const fetchEmployees = createAsyncThunk(
  "data/fetchEmployees",
  async () => {
    const response = await getEmployeesFromApi();
    return response;
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
});
