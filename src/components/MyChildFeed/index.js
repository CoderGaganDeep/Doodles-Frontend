import React from "react";
import { Image } from "../../styled/Image";
import { FeedContainer } from "../../styled/FeedContainer";

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
          <FeedContainer>
            <p key={index}>
              {item.feed},{" "}
              <span style={{ color: "orange", justifyItems: "end" }}>
                {" "}
                {new Date(props.createdAt).toLocaleDateString("en-US", setdate)}
              </span>
              <br />
            </p>
            <Image src={item.imageUrl} alt="" />
          </FeedContainer>
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
