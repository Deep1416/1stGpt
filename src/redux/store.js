import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./addSlice";
import chatSlice from "./chatSlice";
import modelSlice from "./modelSlice";

export const store = configureStore({
  reducer: {
    coins: addSlice,
    chat: chatSlice,
    model: modelSlice,
  },
});
