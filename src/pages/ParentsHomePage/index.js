// import AddChildForm from "../../components/AddChildForm";
import { MyChildFeed } from "../../components/MyChildFeed";
// import AddFeedForm from "../../components/AddFeed";
import { React, useEffect } from "react";
import { getMyChildFeed } from "../../store/feed/thunks";
import { selectorMyChildFeed } from "../../store/feed/selector";
import { useDispatch, useSelector } from "react-redux";

export default function ParentsHomePage() {
  const dispatch = useDispatch();
  // const feeds = useSelector(selectorAllFeeds);
  const myFeeds = useSelector(selectorMyChildFeed);
  console.log("my feed", myFeeds);

  useEffect(() => {
    dispatch(getMyChildFeed());
  }, [dispatch]);

  if (!myFeeds)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  console.log(myFeeds, "page");

  const myChildSortedFeeds = [...myFeeds].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        My Child
      </h1>
      {myChildSortedFeeds?.map((f, index) => {
        return (
          <div style={{ display: "flex", direction: "column" }}>
            <MyChildFeed
              key={f.id}
              name={f.name}
              feed={f.feeds}
              avatar={f.avatar}
              imageUrl={f.imageUrl}
              createdAt={f.createdAt}
              updatedAt={f.updatedAt}
              childId={f.childId}
              teacherId={f.teacherId}
              showLink={true}
            />
          </div>
        );
      })}
    </>
  );
}
