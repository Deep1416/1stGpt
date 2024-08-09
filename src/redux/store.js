import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./addSlice";
import chatSlice from "./chatSlice";

export const store = configureStore({
  reducer: {
    coins: addSlice,
    chat: chatSlice,
  },
});
