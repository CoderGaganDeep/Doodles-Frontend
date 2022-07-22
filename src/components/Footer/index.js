import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "-50px",
          position: "fixed",
        }}
      >
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#welcome">Welcome</FooterLink>
            <FooterLink href="#about-us">Our Services</FooterLink>
            <FooterLink href="#teacher">Our Teacher</FooterLink>
          </Column>

          {/* <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column> */}
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="">Contact Us: +31644182500</FooterLink>
            <FooterLink href=" ">Location: 1188AM Amstelveen</FooterLink>
            <FooterLink href="">doodlesamstelveen@gmail.com</FooterLink>
          </Column>
          <Column> </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/doodles4kidz/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="https://instagram.com/doodles_amstelveen?igshid=YmMyMTA2M2Y=">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="/login">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Portal Login</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
