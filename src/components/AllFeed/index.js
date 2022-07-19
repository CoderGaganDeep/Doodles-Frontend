import React from "react";
import "../AllFeed/styles.scss";
import { Image } from "../../styled/Image";
import { FeedContainer } from "../../styled/FeedContainer";

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
      <FeedContainer>
        <span>
          <p>
            {props.feed},{" "}
            <span style={{ color: "orange", justifyItems: "end" }}>
              {new Date(props.createdAt).toLocaleDateString("en-US", setdate)}
            </span>
            {/* <p>Child:{props.childId} </p> */}
          </p>
        </span>

        <Image src={props.imageUrl} alt="" />
      </FeedContainer>
      {/* <p>Teacher{props.teacherId} </p> */}
      {/* <img src={props.imageUrl} alt="" /> */}
      {/* <span>Time:{props.updatedAt} </span> */}
    </div>
  );
};

export { AllFeed };
