import { createSlice } from "@reduxjs/toolkit";


const gradient=[
     " linear-gradient(rgb(154, 154, 232) 190px,rgb(101, 99, 99)) ",
      "linear-gradient(rgb(241, 157, 227) 190px,rgb(101, 99, 99))",
     "linear-gradient(rgb(243, 153, 160) 190px,rgb(101, 99, 99))",
      "linear-gradient(rgb(240, 153, 237) 190px,rgb(80, 77, 77))",
]
const initialState = {
  currentIndex :0,
  currentGradient :gradient[0],
};

export const storeSlice = createSlice({
  name: "theme",
  initialState,
  reducers:{
    changeGradient: (state) => {
      state.currentIndex = (state.currentIndex + 1) % gradient.length;
      state.currentGradient = gradient[state.currentIndex];
    },
    resetGradient: (state) => {
      state.currentIndex = 0;
      state.currentGradient = gradient[0];
    }
  },
})    
export const { changeGradient, resetGradient } = storeSlice.actions;
export default storeSlice.reducer;