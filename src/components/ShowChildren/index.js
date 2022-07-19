// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getallChildren } from "../../store/child/thunks";
import { React, useState } from "react";
import { Input } from "../../styled/Input";

const ShowChildren = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(true);
  };

  return (
    <div key={props.id}>
      <label>
        <Input type="radio" checked={checked} onChange={handleChange} />
        {props.name}
      </label>

      {/* 
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.branch}</p>
      <p>{props.group}</p>
      <p>{props.userId}</p> */}
    </div>
  );
};
export { ShowChildren };
