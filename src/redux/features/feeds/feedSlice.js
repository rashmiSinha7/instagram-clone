// features/feeds/feedSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

// Async thunk for API call
export const fetchUserFeeds = createAsyncThunk("user/feeds", async () => {
  const response = await axios.get("/user/feeds");
  return response.data;
});

const feedSlice = createSlice({
  name: "feeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserFeeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserFeeds.fulfilled, (state, action) => {
        state.loading = false;
        state.feeds = action.payload;
      })
      .addCase(fetchUserFeeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default feedSlice.reducer;
