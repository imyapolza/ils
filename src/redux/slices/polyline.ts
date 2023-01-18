import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  polyline: [],
};

const polylineSlice = createSlice({
  name: "polyline",
  initialState,
  reducers: {
    getPolyline: (state, { payload }) => {
      state.polyline = payload;
    },
  },
});

export const { getPolyline } = polylineSlice.actions;

export default polylineSlice.reducer;
