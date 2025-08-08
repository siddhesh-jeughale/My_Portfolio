import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeSlice";    

export  const store = configureStore({
  reducer: {    
    theme: storeReducer,
  },
});