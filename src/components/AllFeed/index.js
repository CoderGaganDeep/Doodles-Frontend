import React from "react";

const AllFeed = (props) => {
  var setdate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return (
    <div className="spaceholder-h">
      <span style={{ fontSize: "12px", color: "red" }}>
        <p>{new Date(props.createdAt).toLocaleDateString("en-US", setdate)}</p>
      </span>
      <p>Child:{props.childId} </p>
      <h4>Feed:{props.feed}</h4>
      <img src={props.imageUrl} alt="" />
      {/* <p>Teacher{props.teacherId} </p> */}
      {/* <img src={props.imageUrl} alt="" /> */}
      {/* <span>Time:{props.updatedAt} </span> */}
    </div>
  );
};

export { AllFeed };
