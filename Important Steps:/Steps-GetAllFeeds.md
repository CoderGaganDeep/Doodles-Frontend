## Steps To display all feeds to parents page & apple filter as per child id

## 0. ENDPOINT IN BACKEND -- test it with httpie: http :4000/feed

const { Router } = require("express");
const Feed = require("../models").feed;

const { toData } = require("../auth/jwt");

const router = new Router();

router.get("/", async (request, response, next) => {
try {

    const allFeeds = await Feed.findAll();
    console.log(allFeeds);
    response.send(allFeeds);

} catch (error) {
console.log("error from allFeeds router: ", error.message);
next(error);
}
});

module.exports = router;

## 1. src/store/index.js

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

## 2. Create Component to show the feeds table

import React from "react";

const AllFeed = (props) => {
return (

<div>
<h2>Feed:{props.feed}</h2>
<img src={props.imageUrl} alt="" />
<p></p>

      <p> </p>
    </div>

);};

export { AllFeed };

## 4. Add Route in App js

<Route path="/parents" element={<ParentsHomePage />} />

## 5. New folder feed in Store & Create Slice

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
},
});

export const { setallFeed } = feedSlice.actions;
export default feedSlice.reducer;

## 6. Create thunk to fetch data

import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setallFeed } from "./slice";

export const getallFeed = () => async (dispatch, getState) => {
try {
const response = await axios.get(`${apiUrl}/feed`);

    dispatch(setallFeed(response.data));

} catch (error) {
console.log("error from getAllSpaces thunk: ", error.message);
}
};

## 7. Create selector

export const selectorAllChildren = (state) => state.child.allChildren;

## 7. Create Parents Page where all feeds will be displayed

import AddChildForm from "../../components/AddChildForm";
import { AllFeed } from "../../components/AllFeed";
import { React, useEffect } from "react";
import { getallFeed } from "../../store/feed/thunks";
import { selectorAllFeeds } from "../../store/feed/selector";
import { useDispatch, useSelector } from "react-redux";

export default function ParentsHomePage() {
const dispatch = useDispatch();
const feeds = useSelector(selectorAllFeeds);

useEffect(() => {
dispatch(getallFeed());
}, [dispatch]);

if (!feeds)
return (

<div>
<h3>Loading...</h3>
</div>
);
return (
<>
<AddChildForm />

      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        Feeds from Parent
      </h1>
      {feeds.map((f) => {
        return (
          <AllFeed
            key={f.id}
            id={f.id}
            feed={f.feed}
            imageUrl={f.imageUrl}
            childId={f.childId}
            teacherId={f.teacherId}
            showLink={true}
          />
        );
      })}
    </>

);
}
