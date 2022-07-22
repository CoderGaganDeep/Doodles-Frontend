import AddChildForm from "../../components/AddChildForm";
import { AllFeed } from "../../components/AllFeed";
import AddFeedForm from "../../components/AddFeed";
import { React, useEffect, useState } from "react";
import { getallFeed } from "../../store/feed/thunks";
import { selectorAllFeeds } from "../../store/feed/selector";
import { useDispatch, useSelector } from "react-redux";
import "../TeacherHomePage/styles.scss";
import { selectToken, selectUser } from "../../store/user/selectors";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "../../styled/Button";

export default function TeacherHomePage() {
  const dispatch = useDispatch();
  const feeds = useSelector(selectorAllFeeds);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const [open1, setOpen1] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const handleClickToOpen1 = () => {
    setOpen1(true);
  };

  const handleToClose1 = () => {
    setOpen1(false);
  };

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
      <div className="forms">
        {token && user && user.isTeacher ? (
          <div className="forms">
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickToOpen1}
            >
              Add New Student
            </Button>
            <Dialog open={open1} onClose={handleToClose1}>
              {/* <DialogTitle>{"Play School"}</DialogTitle> */}
              <DialogContent>
                <AddChildForm />
              </DialogContent>
            </Dialog>

            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickToOpen}
            >
              Add new Journal
            </Button>
            <Dialog open={open} onClose={handleToClose}>
              <DialogTitle>{"New Journal"}</DialogTitle>
              <DialogContent>
                <AddFeedForm />
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          ""
        )}
      </div>
      <h1 style={{ justifyContent: "center", textAlign: "center" }}>
        <div className=""></div>{" "}
      </h1>
      {feeds.map((f) => {
        return (
          <div key={f.id}>
            {/* works only if user is logged in as teacher*/}
            {!token || !user || !user.isTeacher ? (
              ""
            ) : (
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
            )}
          </div>
        );
      })}
    </>
  );
}
