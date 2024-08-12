// src/redux/modelSlice.js
import { createSlice } from '@reduxjs/toolkit';

const modelSlice = createSlice({
  name: 'model',
  initialState: {
    selectedModel: null,
  },
  reducers: {
    selectModel: (state, action) => {
      state.selectedModel = action.payload;
    },
  },
});

export const { selectModel } = modelSlice.actions;
export default modelSlice.reducer;
