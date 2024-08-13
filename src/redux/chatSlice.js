// chatSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.chats.push(action.payload);
    },
    updateChatHistory: (state, action) => {
      const { id, message } = action.payload;
      const chat = state.chats.find((chat) => chat.id === id);
      if (chat) {
        chat.history.push(message);
      }
    },
  },
});

export const { addChat, updateChatHistory } = chatSlice.actions;

export default chatSlice.reducer;
