import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  activeChat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    startNewChat: (state) => {
      const newChat = { id: Date.now(), messages: [] };
      state.chats.push(newChat);
      state.activeChat = newChat.id;
    },
    selectChat: (state, action) => {
      state.activeChat = action.payload;
    },
    addMessage: (state, action) => {
      const { chatId, message } = action.payload;
      const chat = state.chats.find((chat) => chat.id === chatId);
      if (chat) {
        chat.messages.push(message);
      }
    },
  },
});

export const { startNewChat, selectChat, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
