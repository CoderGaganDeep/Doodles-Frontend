import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { showMessageWithTimeout } from "../../store/appState/thunks";
import { setNewFeed } from "../../store/feed/thunks";

export default function AddFeedForm() {
  const dispatch = useDispatch();
  const [feed, setFeed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [childId, setChildId] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setNewFeed(feed, imageUrl, childId));
    dispatch(
      showMessageWithTimeout("success", true, "New Feed Created!", 15000)
    );
  };
  return showForm ? (
    <div className="formm">
      <form onSubmit={handleSubmit}>
        {/* <h1>Add New Feed</h1> */}
        <label>What would you like to share?</label>
        <input
          className="form-i"
          type="text"
          name="Feed"
          value={feed}
          onChange={(event) => setFeed(event.target.value)}
        />
        <label>
          Add Photos:
          <input
            className="form-i"
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </label>
        <label>
          Tag Children:
          <input
            className="form-i"
            type="text"
            name="ChildId"
            value={childId}
            onChange={(event) => setChildId(event.target.value)}
          />
        </label>
        ​
        <hr />​<button type="submit">Submit</button>
      </form>
    </div>
  ) : (
    <button
      className="button"
      onClick={() => {
        setShowForm(true);
      }}
    >
      Write Journal
    </button>
  );
}
