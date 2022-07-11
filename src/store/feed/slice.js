import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFeeds: [],
  feedDetails: null,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setallFeed: (state, action) => {
      state.allFeeds = action.payload;
    },
    newFeedSucess: (state, action) => {
      state.feedDetails = action.payload;
    },
  },
});

export const { setallFeed, newFeedSucess } = feedSlice.actions;
export default feedSlice.reducer;
