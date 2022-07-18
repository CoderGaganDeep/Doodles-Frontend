import React from "react";
import "../AllFeed/styles.scss";
import { Image } from "../../styled/Image";

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
      <div>
        <span style={{ fontSize: "12px", color: "black" }}>
          <p>
            {new Date(props.createdAt).toLocaleDateString("en-US", setdate)}
          </p>

          <p>Feed:{props.feed}</p>
          {/* <p>Child:{props.childId} </p> */}
        </span>
      </div>
      <img src={props.imageUrl} alt="" />
      {/* <p>Teacher{props.teacherId} </p> */}
      {/* <img src={props.imageUrl} alt="" /> */}
      {/* <span>Time:{props.updatedAt} </span> */}
    </div>
  );
};

export { AllFeed };
