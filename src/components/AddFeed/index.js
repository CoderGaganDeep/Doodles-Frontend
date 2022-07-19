import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { showMessageWithTimeout } from "../../store/appState/thunks";
import { setNewFeed } from "../../store/feed/thunks";
import { Title } from "../../styled/Title";
import { Image } from "../../styled/Image";
import { Input } from "../../styled/Input";
import { Button } from "../../styled/Button";
import { getallFeed } from "../../store/feed/thunks";
import { getallChildren } from "../../store/child/thunks";
import { selectorAllChildren } from "../../store/child/selectors";
import { ShowChildren } from "../ShowChildren/index";

export default function AddFeedForm() {
  const dispatch = useDispatch();
  const [feed, setFeed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [childId, setChildId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const allChildren = useSelector(selectorAllChildren);

  useEffect(() => {
    dispatch(getallChildren());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setNewFeed(feed, imageUrl, childId));
    dispatch(
      showMessageWithTimeout("success", true, "New Feed Created!", 15000)
    );
    setShowForm(false);
    dispatch(getallFeed());
    dispatch(getallChildren());
  };
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "lpsty2kc");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/delvoxvyc/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImageUrl(file.url); //put the url in local state, next step you can send it to the backend

    if (!allChildren)
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
  };
  return showForm ? (
    <div className="formm">
      <form onSubmit={handleSubmit}>
        <label>What would you like to share?</label>
        <Input
          className="form-i"
          type="text"
          name="Feed"
          value={feed}
          onChange={(event) => setFeed(event.target.value)}
        />
        <label>
          Add Photos:
          {/* <input
            className="form-i"
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          /> */}
        </label>
        <div style={{ textAlign: "center" }}>
          <br />
          <input type="file" onChange={uploadImage} />

          <div>
            <Image
              src={
                imageUrl
                  ? imageUrl
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              }
            />
            {imageUrl ? (
              <Title style={{ fontSize: 20 }}>Succesfully uploaded!</Title>
            ) : (
              ""
            )}
          </div>
        </div>
        <label>Tag Children: </label>
        {/* <input
            className="form-i"
            type="text"
            name="ChildId"
            value={childId}
            onChange={(event) => setChildId(event.target.value)}
          /> */}
        {allChildren.map((tag) => {
          return (
            <ShowChildren
              key={tag.id}
              id={tag.id}
              name={tag.name}
              // age={tag.age}
              // branch={tag.branch}
              // userId={tag.userId}
              showLink={true}
            />
          );
        })}{" "}
        <hr />​ ​<Button type="submit">Submit</Button>
      </form>
    </div>
  ) : (
    <Button
      className="button"
      onClick={() => {
        setShowForm(true);
      }}
    >
      Write New Journal
    </Button>
  );
}
