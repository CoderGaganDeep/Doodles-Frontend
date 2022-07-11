import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import childReducer from "./child/slice";
import feedReducer from "./feed/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    child: childReducer,
    feed: feedReducer,
  },
});
