import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  coinBalance: 0
};

const addSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addCoins: (state, action) => {
      state.coinBalance = action.payload; // Correctly update state.data
    },
    deductCoin:(state, action) => {
      state.coinBalance -= action.payload;
    }
  },
});

// Exporting the action creator
export const { addCoins,deductCoin } = addSlice.actions;

// Exporting the reducer
export default addSlice.reducer;
