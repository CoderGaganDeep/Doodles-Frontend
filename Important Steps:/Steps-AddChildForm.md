### A -- To add new Child to Child Table

## 1. Create Router file in Backend Named:childRouter

const { Router } = require("express");
const Child = require("../models").child;
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const { toData } = require("../auth/jwt");

// add new child

router.post("/", async (request, response, next) => {
try {
const { name, age, branch, group } = request.body; // send the name and userId on thunks to create the mySpace:
const newChild = await Child.create({
name: `${name}'s added`,
age: age,
branch: branch,
group: group,
userId: User.id,
});
response.send(newChild);
} catch (error) {
console.log("error from myChild: ", error.message);
next(error);
}
});

module.exports = router;

// To check answers
// http -v PUT :4000/child/4 name="baby" age="2" branch="a" group="s"
//npx nodemon index.js

## 2. Inside Store folder in frontend, create new folder named Child, add 3 files - thunks, slice, selector.

## 2 A : Slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
allChildren: [],
childDetails: null,
};

export const childSlice = createSlice({
name: "child",
initialState,
reducers: {
newChildSucess: (state, action) => {
state.childDetails = action.payload;
},
},
});

export const { setallChildren, newChildSucess } = childSlice.actions;
export default childSlice.reducer;

## 2 B : Thunk.js

import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setallChildren, newChildSucess } from "./slice";

//2. write a thunk to submit new child form
export const setNewChild =
(name, age, branch, group) => async (dispatch, getState) => {
try {
// const token = getState().user.token;
const response = await axios.post(
`${apiUrl}/child`,
{ name, age, branch, group }

        // { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(name, age, branch, group);

      dispatch(newChildSucess(response.data));
    } catch (error) {
      console.log("Thunk newChildSucess: ", error.message);
    }

};

## 2 B : selector.js

export const selectorAllChildren = (state) => state.child.allChildren;

## 3. create component

// form to add child
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showMessageWithTimeout } from "../../store/appState/thunks";
import { setNewChild } from "../../store/child/thunks";

export default function AddChildForm() {
const dispatch = useDispatch();
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [branch, setBranch] = useState("Amsterdam");
const [group, setGroup] = useState("");
// const [userId, setUserId] = useState("");

const handleSubmit = (event) => {
event.preventDefault();

    // output for submit
    dispatch(setNewChild(name, age, branch, group));
    dispatch(
      showMessageWithTimeout("success", true, "New Child Created!", 15000)
    );

};
return (

<div>
<form onSubmit={handleSubmit}>
<label>
Name of your Child:
<input
type="text"
name="Name"
value={name}
onChange={(event) => setName(event.target.value)}
/>
</label>
<label>
Age of your Child:
<input
type="text"
name="Age"
value={age}
onChange={(event) => setAge(event.target.value)}
/>
</label>
<label>
Branch Name:
<input
type="text"
name="Branch"
value={branch}
onChange={(event) => setBranch(event.target.value)}
/>
</label>
<label>
Current Group:
<input
type="text"
name="Group"
value={group}
onChange={(event) => setGroup(event.target.value)}
/>
</label>
{/_ <label>
Parent Id:
<input
type="text"
name="UserId"
value={userId}
onChange={(event) => setUserId(event.target.value)}
/>
</label> _/}
<button type="submit">Submit</button>
</form>
</div>
);
}

## 4. Create Parents page where there will be a form

import AddChildForm from "../../components/AddChildForm";

import React from "react";

export default function ParentsHomePage() {
return (

<div>
<AddChildForm />
</div>
);
}

## 5. Add routes in App.js

import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import { Login, SignUp } from "./pages";
import { Homepage } from "./pages/Homepage";
import ParentsHomePage from "./pages/ParentsHomePage/index";

function App() {
const dispatch = useDispatch();

useEffect(() => {
dispatch(getUserWithStoredToken());
}, [dispatch]);

return (

<div>
<Navigation />
<MessageBox />
<Routes>
<Route path="/" element={<Homepage />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/login" element={<Login />} />

        <Route path="/parents" element={<ParentsHomePage />} />
      </Routes>
    </div>

);
}

export default App;
