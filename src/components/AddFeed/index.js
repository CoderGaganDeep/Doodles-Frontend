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

export default function AddFeedForm() {
  const dispatch = useDispatch();
  const [feed, setFeed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [childId, setChildId] = useState("");

  const allChildren = useSelector(selectorAllChildren);

  // const [open1, setOpen1] = React.useState(false);

  // const handleClickToOpen1 = () => {
  //   setOpen1(true);
  // };

  // const handleToClose1 = () => {
  //   setOpen1(false);
  // };

  function childSelected(event) {
    setChildId(event.target.value);
  }

  useEffect(() => {
    dispatch(getallChildren());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setNewFeed(feed, imageUrl, childId));
    dispatch(
      showMessageWithTimeout("success", true, "New Feed Created!", 15000)
    );

    dispatch(getallFeed());
    window.location.reload(false);
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
  return (
    <div
      className="formm"
      style={{
        display: "block",
        justifyContent: "center",
        paddingLeft: "30px",
        paddingRight: "40px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1 style={{ paddingBlock: "30px" }}>Add New Journal</h1>
        <label>What would you like to share today?</label>
        <Input
          className="form-i"
          type="text"
          name="Feed"
          value={feed}
          onChange={(event) => setFeed(event.target.value)}
          style={{ paddingBlock: "30px" }}
        />
        <div style={{ paddingBlock: "30px" }}>
          <label>Add Photos:</label>
          <div style={{ textAlign: "center" }}>
            <br />
            <input type="file" onChange={uploadImage} />
          </div>
          <div>
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              }
              alt=""
              style={{ width: "70%", alignContent: "center" }}
            />
            {imageUrl ? (
              <Title style={{ fontSize: 20 }}>Succesfully uploaded!</Title>
            ) : (
              ""
            )}
          </div>
        </div>
        <div style={{ paddingBlock: "30px" }}>
          <label>Tag Child: </label>
          <select value={childId} onChange={childSelected}>
            {allChildren.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <hr />​ ​<Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
