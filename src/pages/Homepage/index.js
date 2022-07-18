// import { Title } from "../styled";
// import { Link } from "react-router-dom";
// import { LinkWord } from "../styled";
import styled from "styled-components";
import "../Homepage/styles.scss";

export const Homepage = () => {
  return (
    <Container>
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

      <div className="aboutus">
        <h2 className="chewy" id="welcome">
          A Warm Welcome
        </h2>
        <p className="lato">
          Doodles is a private Pre School serving children between the age group
          of 2.4 to 6 years. The management of Doodles feels that children need
          the benefits of having individual attention, as the first formative
          years are very crucial and also difficult from the perspective of the
          child.{" "}
        </p>
        <p className="lato">
          The environment at Doodles has been designed to allow children to move
          around freely and it also provides a spacious work and play area.
          Cleanliness and Hygiene play a very important role in the Doodles
          Environment. With regard to the adults/teachers at PreSchool /
          Afternoon care, we have a 1:8 ratio, means each teacher has upto 8
          children to observe and present.
        </p>
      </div>
      <div>
        <h2 className="chewy">Why Us</h2>
        <ul className="whyus">
          <li>Building communication skills</li>
          <li>Encouraging positive peer interaction </li>
          <li>Theme based Concept Time</li>
          <li>Language Readiness</li>
          <li>Opportunities for fine and gross motor development</li>
          <li>Promoting cognitive development</li>
        </ul>
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
                  <button className="btn">Read More</button>
                  {/* <p className="lato">
                    The Pre School has a well structured , age appropriate
                    curriculum for the early years .Doodles Preschool takes
                    children only after they turn 2.4 years, as we are of the
                    firm belief that a child less than this age does need the
                    security of their immediate family and it is after 2.4 years
                    that they will be more open to take on the third environment
                    i.e., the Preschool. Preschool maintains a ratio of children
                    to adult as 8:1
                  </p> */}
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
                  <button className="btn">Read More</button>
                  {/* <p className="lato">
                    Doodles Afternoon Care is from 1 pm to 5 pm, wherein
                    children from our Pre school and other schools between the
                    age group 3 to 6 years can spend time doing various
                    activities like sketching, craftwork, clay work and dancing
                    . For those requiring additional guidance in school work,
                    help will also be given with regard to that.. The Afternoon
                    Care facility is equipped with various games. Facility has a
                    microwave; the food and milk provided by the parents will be
                    given to the child after it is warmed. The goal is to make
                    our children feel at home away from home.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="chewy">Activities Involved</h2>
      <ul className="whyus">
        <li>Sensory Time</li>
        <li>Story Time</li>
        <li>Water Play</li>
        <li>Sand Play</li>
        <li>Creative Time</li>
        <li>Library Time</li>
        <li>Celebration of festivals and special days</li>
      </ul>
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
              Mrs.Vidya Ravikrishnan (Director), trained Montessori Teacher with
              more than 5 years of teaching experience.
            </strong>{" "}
            <br />
            <br />
            She is a Graduated from Bangalore University, India with one of her
            major's being Financial Accounting.
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
      <h2 className="chewy">What Parents say about Us</h2>
      <p className="lato">
        It's mixed feelings that my child will not be in doodles anymore. I just
        want to say thank you for an amazing year full of happiness, colors,
        arts, fun, stories, wonderful outings, and awesome get-togethers! Kriwin
        had learned a lot and groomed well. He will definitely miss all his
        little friends. All the best to each one of them😊 I as a parent enjoyed
        the same as Kriwin.We both will miss you both so much. Keep up the good
        work! and my wishes for you people to continue for many more years of
        shaping wonderful kids on your way😊{" "}
      </p>
      <p className="lato"> Kalai - Parent of Kriwin </p>
      {/* <p className="lato">
        Thank you for all the extra miles that you went for imparting good
        education to Deepanshi. She is going to miss everything. Wish she could
        be here longer. Keep on your good wishes and blessings with her. Doodles
        is the best Play School!!
      </p>
      <p className="lato"> Sikata and Sandeep- Parents of Deepanshi</p>
      <p className="lato">
        {" "}
        Thank youDoodles. It has been so much fun. We will think about &
        treasure everything you have done today, tomorrow & always.{" "}
      </p>
      <p className="lato">Priyanka and Shripad- Parents of Shriyaan</p> */}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
