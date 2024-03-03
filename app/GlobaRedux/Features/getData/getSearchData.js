 "use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchData = createAsyncThunk(
  "getData/fetchData",
  async (query, thunkAPI) => {
    try {
      // API endpoint details
      const apiKey = "0f3cda79a6da992572e3077bf0e8e329";
      const baseUrl = "https://api.themoviedb.org/3/search/movie";
      const apiUrl = `${baseUrl}?query=${query}&api_key=${apiKey}`;

      // Make the API call
      const response = await axios.get(apiUrl);

      // Return the data from the API call
      return response.data;
    } catch (error) {
      // Handle errors
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// Create a slice
const dataSlice = createSlice({
  name: "getSearchData",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Add reducer functions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

// Export action creators and reducer
export const dataActions = dataSlice.actions;
export default dataSlice.reducer;



