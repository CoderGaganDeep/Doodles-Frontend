import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allChildren: [],
  childDetails: null,
};

export const childSlice = createSlice({
  name: "child",
  initialState,
  reducers: {
    setallChildren: (state, action) => {
      state.allChildren = action.payload;
    },

    newChildSucess: (state, action) => {
      state.childDetails = action.payload;
    },
  },
});

export const { setallChildren, newChildSucess } = childSlice.actions;
export default childSlice.reducer;
