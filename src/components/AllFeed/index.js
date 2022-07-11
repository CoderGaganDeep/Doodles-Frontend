import React from "react";

const AllFeed = (props) => {
  return (
    <div className="spaceholder-h">
      <h4>Feed:{props.feed}</h4>
      <img src={props.imageUrl} alt="" />
      <p>Child{props.childId} </p>
      <p>Teacher{props.teacherId} </p>
      <p>Date:{props.createdAt} </p>
      <p>Time:{props.updatedAt} </p>
    </div>
  );
};

export { AllFeed };
