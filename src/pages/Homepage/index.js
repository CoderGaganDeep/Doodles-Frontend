// import { Title } from "../styled";
// import { Link } from "react-router-dom";
// import { LinkWord } from "../styled";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <Container>
      <img
        src="https://kids.cmsmasters.net/wp-content/uploads/2016/07/slide2-1.jpg"
        alt=""
        width={1300}
      ></img>
      <h2>Why Us</h2>
      <ul>
        <li>Building communication skills</li>
        <li>Encouraging positive peer interaction </li>
        <li>Theme based Concept Time</li>
        <li>Language Readiness</li>
        <li>Opportunities for fine and gross motor development</li>
        <li>Promoting cognitive development</li>
      </ul>

      <h2>About Doodles</h2>
      <h5>
        Doodles is a private Pre School serving children between the age group
        of 2.4 to 6 years. The management of Doodles feels that children need
        the benefits of having individual attention, as the first formative
        years are very crucial and also difficult from the perspective of the
        child. The environment at Doodles has been designed to allow children to
        move around freely and it also provides a spacious work and play area.
        Cleanliness and Hygiene play a very important role in the Doodles
        Environment. With regard to the adults/teachers at PreSchool / Afternoon
        care,we have a 1:8 ratio i.e each adult has 8 children to observe and
        present.
      </h5>
      <h2>Our Courses</h2>
      <table>
        <tr>
          <td>Pre school</td>
          <td>Afternoon care</td>
        </tr>
        <tr>
          <td>Age Group - 2.4 years to 4 years</td>
          <td>Age Group : 2.4 years to 6 years</td>
        </tr>

        <tr>
          <td>Duration : 2.5 Hours ( 1000 - 1230)</td>
          <td>Duration : 4 hours (1300 to 1700)</td>
        </tr>
        <tr>
          <td>
            The Pre School has a well structured , age appropriate curriculum
            for the early years .Doodles Preschool takes children only after
            they turn 2.4 years, as we are of the firm belief that a child less
            than this age does need the security of their immediate family and
            it is after 2.4 years that they will be more open to take on the
            third environment i.e., the Preschool. Preschool maintains a ratio
            of children to adult as 8:1
          </td>
          <td>
            Doodles Afternoon Care is from 1 pm to 5 pm, wherein children from
            our Pre school and other schools between the age group 3 to 6 years
            can spend time doing various activities like sketching, craftwork,
            clay work and dancing . For those requiring additional guidance in
            school work, help will also be given with regard to that.. The
            Afternoon Care facility is equipped with various games. Facility has
            a microwave; the food and milk provided by the parents will be given
            to the child after it is warmed. The goal is to make our children
            feel at home away from home.
          </td>
        </tr>
        <tr>
          <td>
            <button>Contact Us</button>
          </td>
          <td>
            <button>Contact Us</button>
          </td>
        </tr>
      </table>
      <h2>Activities Involved</h2>
      <ul>
        <li>Sensory Time</li>
        <li>Story Time</li>
        <li>Water Play</li>
        <li>Sand Play</li>
        <li>Creative Time</li>
        <li>Library Time</li>
        <li>Celebration of festivals and special days</li>
      </ul>
      <h2>Meet Our Teachers</h2>
      <p>
        Mrs.Vidya Ravikrishnan (Director), is a Graduate from Bangalore
        University, India with one of her major's being Financial Accounting.
        She is a trained Montessori Teacher with more than 5 years of teaching
        experience. She also holds a diploma in Child Psychology from the UK.
        After completing her course successfully she started
        <strong> Doodles</strong>- a place where children could get nurturing
        and care in September 2017.
      </p>
      <h2>What Parents say</h2>
      <p>Reviews</p>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
`;
