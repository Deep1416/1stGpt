import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  coinBalance: 0
};

const addSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addCoins: (state, action) => {
      state.data = action.payload; // Correctly update state.data
    },
   
  },
});

// Exporting the action creator
export const { addCoins } = addSlice.actions;

// Exporting the reducer
export default addSlice.reducer;
