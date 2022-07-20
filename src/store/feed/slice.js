import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFeeds: [],
  feedDetails: null,
  myChildFeedDetails: null,
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setallFeed: (state, action) => {
      const allSortedFeeds = [...action.payload].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      state.allFeeds = allSortedFeeds;
    },
    newFeedSucess: (state, action) => {
      state.feedDetails = action.payload;
    },
    myChildFeed: (state, action) => {
      state.myChildFeedDetails = action.payload;
    },
  },
});

export const { setallFeed, newFeedSucess, myChildFeed } = feedSlice.actions;
export default feedSlice.reducer;
