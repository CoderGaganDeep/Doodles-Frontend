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
        {/* <label>
          Parent Id:
          <input
            type="text"
            name="UserId"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </label> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
