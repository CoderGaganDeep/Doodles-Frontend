import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectToken } from "../store/user/selectors";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/user/slice";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const user = useSelector(selectUser);

  function logmeOut() {
    dispatch(logOut());
    navigate("/");
  }

  return (
    <Nav>
      <Logo href="/">
        Doodles<span> Play School</span>
      </Logo>
      {/* <Hamburger onClick={() => setOpen(!open)}>
        <span />
      </Hamburger> */}

      <Menu open={open}>
        {/* {!token || !user || !user.isTeacher? (
          <MenuLink>
            <MenuLink href="#welcome">About Us</MenuLink>
            <MenuLink href="#about-us">Our Services</MenuLink>
            <MenuLink href="#teacher">Our Teacher</MenuLink>
            <MenuLink href="/login"> Login Portal</MenuLink>
          </MenuLink>
        ) : (
          <MenuLink>
            {" "}
            <MenuLink href="/parents">Parents</MenuLink>
            <MenuLink onClick={() => dispatch(logOut())}>Logout</MenuLink>
          </MenuLink>
        ): (  <MenuLink>
          {" "}
          <MenuLink href="/teachers">Teachers</MenuLink>
          <MenuLink onClick={() => dispatch(logOut())}>Logout</MenuLink>
        </MenuLink>)
        
        
        
        }

        ; */}
        {/* 
        {!token && !user.isTeacher ? (
          <span className="bg-green-100">
            <MenuLink>
              <MenuLink href="#welcome">About Us</MenuLink>
              <MenuLink href="#about-us">Our Services</MenuLink>
              <MenuLink href="#teacher">Our Teacher</MenuLink>
              <MenuLink href="/login"> Login Portal</MenuLink>
                <MenuLink href="/parents">Parents</MenuLink>
              <MenuLink onClick={() => dispatch(logOut())}>Logout</MenuLink>
            </MenuLink>
          </span>
        ) : !user.isTeacher ? (
          <span className="bg-teal-100">
            <MenuLink>
              {" "}
            
            </MenuLink>
          </span>
        ) : (
          <span className="bg-red-100">
            <MenuLink>
              {" "}
              <MenuLink href="/teachers">Teachers</MenuLink>
              <MenuLink onClick={() => dispatch(logOut())}>Logout</MenuLink>
            </MenuLink>
          </span>
        )} */}
        {/* {token && !user.isTeacher ? (
          <MenuLink href="/parents">Parents</MenuLink>
        ) : (
          <MenuLink href="/teachers">Teachers</MenuLink>
        )} */}
        {/* {token ? (
          <MenuLink href="/parents">Parents</MenuLink>
        ) : (
          <MenuLink>
            <MenuLink href="#welcome">About Us</MenuLink>
            <MenuLink href="#about-us">Our Services</MenuLink>
            <MenuLink href="#teacher">Our Teacher</MenuLink>
          </MenuLink>
        )} */}

        {token ? (
          <MenuLink onClick={() => logmeOut()}>Logout</MenuLink>
        ) : (
          <MenuLink>
            <MenuLink href="/login">Portal Login</MenuLink>
            <MenuLink href="/#welcome">About Us</MenuLink>
            <MenuLink href="/#about-us">Our Services</MenuLink>
            <MenuLink href="/#teacher">Our Teacher</MenuLink>
          </MenuLink>
        )}

        {token && user && user.isTeacher ? (
          <MenuLink href="/teachers">Teachers</MenuLink>
        ) : (
          ""
        )}

        {token && user && !user.isTeacher ? (
          <MenuLink href="/parents">Parents</MenuLink>
        ) : (
          ""
        )}
      </Menu>
    </Nav>
  );
};

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #ececec;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: #9cc094;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #ee8c3a;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #ececec;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  font-family: "Chewy", cursive;
  span {
    font-family: "Chewy", cursive;
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background-color: #ececec;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 780px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 780px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
