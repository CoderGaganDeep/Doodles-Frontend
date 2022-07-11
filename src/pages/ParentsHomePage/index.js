import AddChildForm from "../../components/AddChildForm";
import { AllFeed } from "../../components/AllFeed";
import AddFeedForm from "../../components/AddFeed";
import { React, useEffect } from "react";
import { getallFeed } from "../../store/feed/thunks";
import { selectorAllFeeds } from "../../store/feed/selector";
import { useDispatch, useSelector } from "react-redux";

export default function ParentsHomePage() {
  const dispatch = useDispatch();
  const feeds = useSelector(selectorAllFeeds);

  useEffect(() => {
    dispatch(getallFeed());
  }, [dispatch]);

  if (!feeds)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  return (
    <>
      <AddChildForm />
      <AddFeedForm />
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        My Child
      </h1>
      {feeds.map((f) => {
        return (
          <AllFeed
            key={f.id}
            id={f.id}
            feed={f.feed}
            imageUrl={f.imageUrl}
            createdAt={f.createdAt}
            updatedAt={f.updatedAt}
            childId={f.childId}
            teacherId={f.teacherId}
            showLink={true}
          />
        );
      })}
    </>
  );
}
