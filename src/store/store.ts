import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todo"; 

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer, // ✅ use reducer here
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
