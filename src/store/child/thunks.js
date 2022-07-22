import { apiUrl } from "../../config/constants";
import axios from "axios";
import { setallChildren, newChildSucess } from "./slice";

// 1. Write a thunk to get all children
export const getallChildren = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/child`);
    console.log("GOT CHILD " + response.data);
    dispatch(setallChildren(response.data));
  } catch (error) {
    console.log("error from getAllChildren thunk: ", error.message);
  }
};

//2. write a thunk to submit new child form
export const setNewChild =
  (name, age, branch, group, userId) => async (dispatch, getState) => {
    try {
      // const token = getState().user.token;
      const response = await axios.post(
        `${apiUrl}/child`,
        { name, age, branch, group, userId }

        // { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(name, age, branch, group, userId);

      dispatch(newChildSucess(response.data));
    } catch (error) {
      console.log("Thunk newChildSucess: ", error.message);
    }
  };
