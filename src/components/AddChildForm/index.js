import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { showMessageWithTimeout } from "../../store/appState/thunks";
import { setNewChild } from "../../store/child/thunks";
import { Button } from "../../styled/Button";
import { getallChildren } from "../../store/child/thunks";
import { getallUsers } from "../../store/user/thunks";
import { selectorAllUsers } from "../../store/user/selectors";

export default function AddChildForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [branch, setBranch] = useState("Amsterdam");
  const [group, setGroup] = useState("");
  const [userId, setuserId] = useState("");
  //  const [showForm, setShowForm] = useState(false);

  const allUsers = useSelector(selectorAllUsers);

  useEffect(() => {
    dispatch(getallChildren());
    dispatch(getallUsers());
  }, [dispatch]);

  const handleSubmit = (event) => {
    //event.preventDefault();
    console.log("SAVING USERID : " + userId);
    dispatch(setNewChild(name, age, branch, group, userId));
    dispatch(
      showMessageWithTimeout("success", true, "New Child Created!", 15000)
    );
    window.location.reload(false);
    //setShowForm(false);
  };
  return (
    <div
      className="formm"
      style={{ paddingLeft: "100px", paddingRight: "120px" }}
    >
      <form>
        <h1 style={{ paddingBlock: "30px" }}>Add New Student</h1>
        <label> Name:</label>
        <input
          className="form-i"
          type="text"
          name="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label>
          Age:
          <input
            className="form-i"
            type="text"
            name="Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          <br />
        </label>
        <label>
          Branch Name:
          <input
            className="form-i"
            type="text"
            name="Branch"
            value={branch}
            onChange={(event) => setBranch(event.target.value)}
          />
        </label>
        <br />
        <label>
          Current Group:
          <input
            className="form-i"
            type="text"
            name="Group"
            value={group}
            onChange={(event) => setGroup(event.target.value)}
          />
        </label>
        {/* <label>
          Parent ID:
          <input
            className="form-i"
            type="text"
            name="UserId"
            value={userId}
            onChange={(event) => setuserId(event.target.value)}
          />
        </label> */}
        <div style={{ paddingBlock: "30px" }}>
          <label>Choose Parent: </label>
          <select
            value={userId}
            onChange={(event) => setuserId(event.target.value)}
          >
            {allUsers.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        ​
        <hr />​
        <Button
          className="button"
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
