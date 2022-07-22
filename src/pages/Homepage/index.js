import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "../../styled/Button";
import { Button1 } from "../../styled/Button1";
import { DividerImg } from "../../styled/DividerImg";
import { Image } from "../../styled/Image";

import styled from "styled-components";
import "../Homepage/styles.scss";
import Footer from "../../components/Footer/index";
import { FeedContainer } from "../../styled/FeedContainer";

export const Homepage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleClickToOpen1 = () => {
    setOpen1(true);
  };

  const handleToClose1 = () => {
    setOpen1(false);
  };

  return (
    <Container>
      <div>
        <div class="containera">
          <div class="wrapper">
            <img
              class="img1"
              src="https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/Banner1.png"
              alt=""
            ></img>

            <img
              class="img3"
              src="https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/banner5.png"
              alt=""
            ></img>

            <img
              class="img4"
              src="https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/Banner3.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className="icons">
          <div className=""></div>
        </div>

        <div
          className="aboutus"
          style={{
            display: "flex",
            direction: "row",
            paddingLeft: "50px",
            paddingRight: "50px",

            color: "#EDEDE3",
          }}
        >
          <h2
            className="chewy"
            id="welcome"
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            A Warm Welcome
          </h2>
          <p
            className="lato"
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              textAlign: "justify",
            }}
          >
            Doodles is a private Pre School serving children between the age
            group of 2.4 to 6 years. The management of Doodles feels that
            children need the benefits of having individual attention, as the
            first formative years are very crucial and also difficult from the
            perspective of the child. The environment at Doodles has been
            designed to allow children to move around freely and it also
            provides a spacious work and play area. Cleanliness and Hygiene play
            a very important role in the Doodles Environment. With regard to the
            adults/teachers at PreSchool / Afternoon care, we have a 1:8 ratio,
            means each teacher has upto 8 children to observe and present.
          </p>
          <p className="lato"></p>
        </div>
        <div>
          <DividerImg
            styles={{ width: "10px" }}
            src="https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/divider.png"
            alt=""
          ></DividerImg>
        </div>
        <div
          className="whyus"
          style={{
            display: "flex",
            direction: "row",
            paddingLeft: "50px",
            paddingRight: "50px",

            justifyContent: "center",
            textAlign: "center",
            margin: "10px",
          }}
        >
          <h2
            className="chewy"
            // style={{
            //   paddingLeft: "20px",
            //   paddingRight: "20px",
            //   justifyContent: "center",
            //   textAlign: "center",
            //   margin: "10px",
            // }}
          >
            Why Us{" "}
          </h2>
          <Button1>Building communication skills</Button1>
          <Button1>Encouraging positive peer interaction</Button1>
          <Button1>Theme based Concept Time</Button1>
          <Button1>Language Readiness</Button1>
          <Button1>Opportunities for fine and gross motor development</Button1>
          <Button1>Promoting cognitive development</Button1>{" "}
        </div>
        <div className="programa">
          <div>
            <h2 className="chewy" id="about-us">
              Our Programs
            </h2>

            <div class="row">
              <div class="column">
                <div class="card">
                  <div className="program-play">
                    <img
                      class="img1"
                      src="https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/akid.jpeg"
                      alt=""
                    ></img>
                    <h5 className="h">-------</h5>
                    <h4 className="chewy-small">Playschool</h4>{" "}
                    <h5 className="h">-------</h5>
                    <p>Age Group: 2.4 years to 4 years</p>
                    <h5 className="h">-------</h5>
                    <p>Duration: 2.5 Hours (10:00 - 12:30)</p>
                    <h5 className="h">-------</h5>
                    <p>Days: 5 Days a week</p>
                    <h5 className="h">-------</h5>
                    {/* */}
                    <div stlye={{}}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickToOpen1}
                      >
                        Read More
                      </Button>
                      <Dialog open={open1} onClose={handleToClose1}>
                        <DialogTitle>{"Play School"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            <p className="lato">
                              The Play School has a well structured , age
                              appropriate curriculum for the early years
                              .Doodles Preschool takes children only after they
                              turn 2.4 years, as we are of the firm belief that
                              a child less than this age does need the security
                              of their immediate family and it is after 2.4
                              years that they will be more open to take on the
                              third environment i.e., the Preschool. Preschool
                              maintains a ratio of children to adult as 8:1
                            </p>{" "}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={handleToClose1}
                            color="primary"
                            autoFocus
                          >
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  {" "}
                  <div className="program-after">
                    <img
                      class="img1"
                      src="https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/after.jpeg"
                      alt=""
                    ></img>
                    <h5 className="h">-------</h5>
                    <h4 className="chewy-small">Afterschool Care</h4>
                    <h5 className="h">-------</h5>
                    <p>Age Group: 2.4 years to 6 years</p>
                    <h5 className="h">-------</h5>
                    <p>Duration: 4 hours (13:00 to 17:00)</p>
                    <h5 className="h">-------</h5>
                    <p>Days: 5 Days a week</p>
                    <h5 className="h">-------</h5>
                    <div stlye={{}}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickToOpen}
                      >
                        Read More
                      </Button>
                      <Dialog open={open} onClose={handleToClose}>
                        <DialogTitle>{"Afternoon Care"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            <p className="lato">
                              Doodles Afternoon Care is from 1 pm to 5 pm,
                              wherein children from our Pre school and other
                              schools between the age group 3 to 6 years can
                              spend time doing various activities like
                              sketching, craftwork, clay work and dancing . For
                              those requiring additional guidance in school
                              work, help will also be given with regard to
                              that.. The Afternoon Care facility is equipped
                              with various games. Facility has a microwave; the
                              food and milk provided by the parents will be
                              given to the child after it is warmed. The goal is
                              to make our children feel at home away from home.
                            </p>{" "}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={handleToClose}
                            color="primary"
                            autoFocus
                          >
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {" "}
          <div
            style={{
              display: "flex",
              direction: "row",
              paddingBlock: "50px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <h2
              className="chewy"
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",

                justifyContent: "center",
                textAlign: "center",
                margin: "10px",
              }}
            >
              Activities Involved
            </h2>
            <Button1>Sensory Play</Button1>
            <Button1>Story Time</Button1>
            <Button1>Water Play</Button1>
            <Button1>Sand Play</Button1>
            <Button1>Library Time</Button1>
            <Button1>Festival Celebration</Button1>{" "}
          </div>
        </div>
        <div className="program">
          <div className="teacher">
            <p>
              <img
                class="img1"
                src="https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/vidya.jpeg"
                alt=""
              ></img>
            </p>

            <p className="lato" id="teacher">
              <h3 className="teacher-heading">Meet Our Teacher</h3>
              <strong>
                {" "}
                Mrs.Vidya Ravikrishnan (Director), trained Montessori Teacher
                with more than 5 years of teaching experience.
              </strong>{" "}
              <br />
              <br />
              She is a Graduated from Bangalore University, India with one of
              her major's being Financial Accounting.
              <br />
              <br />
              She also holds a diploma in Child Psychology from the UK. After
              completing her course successfully she started
              <strong>
                {" "}
                <br />
                Doodles- a place where children could get nurturing and care{" "}
              </strong>
              in September 2017.
            </p>
          </div>
        </div>
        <div>
          <h2 className="chewy" style={{ paddingBlock: "50px" }}>
            What Parents say about Us
          </h2>
          <div style={{ display: "flex", paddingBlock: "30px" }}>
            <FeedContainer className="lato" style={{ height: "650px" }}>
              <strong>Parent Review</strong> <br /> Thank you for all the extra
              miles that you went for imparting good education to Deepanshi. She
              is going to miss everything. Wish she could be here longer. Keep
              on your good wishes and blessings with her. Doodles is the best
              Play School!!
              <br /> <br />
              <strong className="lato">
                From Sikata and Sandeep- Parents of Deepanshi
              </strong>
            </FeedContainer>
            <FeedContainer className="lato" style={{ height: "650px" }}>
              <strong>Parent Review</strong> <br /> It's mixed feelings that my
              child will not be in doodles anymore. I just want to say thank you
              for an amazing year full of happiness, colors, arts, fun, stories,
              wonderful outings, and awesome get-togethers! Kriwin had learned a
              lot and groomed well. He will definitely miss all his little
              friends. All the best to each one of them😊 I as a parent enjoyed
              the same as Kriwin.We both will miss you both so much. Keep up the
              good work😊 <br /> <br />
              <strong className="lato">From Kalai - Parent of Kriwin</strong>
            </FeedContainer>
            <FeedContainer className="lato" style={{ height: "650px" }}>
              {" "}
              <strong>Parent Review</strong> <br /> Thank youDoodles. It has
              been so much fun. We will think about & treasure everything you
              have done today, tomorrow & always.{" "}
              <strong className="lato">
                <br /> <br />
                From Priyanka and Shripad- Parents of Shriyaan
              </strong>{" "}
            </FeedContainer>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        <Footer />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
