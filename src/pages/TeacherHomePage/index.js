import AddChildForm from "../../components/AddChildForm";
import { AllFeed } from "../../components/AllFeed";
import AddFeedForm from "../../components/AddFeed";
import { React, useEffect } from "react";
import { getallFeed } from "../../store/feed/thunks";
import { selectorAllFeeds } from "../../store/feed/selector";
import { useDispatch, useSelector } from "react-redux";
import "../TeacherHomePage/styles.scss";

export default function ParentsHomePage() {
  const dispatch = useDispatch();
  const feeds = useSelector(selectorAllFeeds);

  useEffect(() => {
    dispatch(getallFeed());
  }, [dispatch]);

  const allSortedFeeds = [...feeds].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  if (!feeds)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  return (
    <>
      <div className="forms">
        <AddChildForm />
        <AddFeedForm />
      </div>
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        <div className=""></div>{" "}
      </h1>
      {allSortedFeeds.map((f) => {
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
