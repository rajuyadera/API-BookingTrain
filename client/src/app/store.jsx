import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customerSlice";
import pasenggerReducer from "../features/pasenggerSlice"

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    pasengger: pasenggerReducer,
  },
});
