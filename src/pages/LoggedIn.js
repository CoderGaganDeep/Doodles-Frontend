import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import Button from "react-bootstrap/Button";
import { selectUser, selectToken } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  return (
    <>
      {!token || !user || !user.isTeacher ? (
        ""
      ) : (
        <NavbarItem path="/teachers" linkText="Teacher's Portal" />
      )}

      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user?.email}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
