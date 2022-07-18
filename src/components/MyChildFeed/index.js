import React from "react";

const MyChildFeed = (props, index) => {
  var setdate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  console.log(props);
  return (
    <div
      style={{ diplay: "flex", direction: "column" }}
      className="spaceholder-h"
      key={index}
    >
      {props?.feed?.map((item, index) => {
        return (
          <div>
            <p key={index}>
              Feed:{item.id},{item.feed},{" "}
              <span style={{ fontSize: "12px", color: "red" }}>
                {" "}
                {new Date(props.createdAt).toLocaleDateString("en-US", setdate)}
              </span>
            </p>
            <img style={{ width: "auto" }} src={item.imageUrl} alt="" />
          </div>
        );
      })}
      {/* <img src={props.imageUrl} alt="" />
      <p>Child{props.childId} </p>
      <p>Teacher{props.teacherId} </p>
      <p>Date:{props.createdAt} </p>
      <p>Time:{props.updatedAt} </p>{" "} */}
    </div>
  );
};

export { MyChildFeed };
