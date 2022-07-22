import styled from "styled-components";

export const Button1 = styled.button`
  background: ${(props) => (props.primary ? "#B22727" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-size: 1em;
  margin: 1em;
  padding: 1.25em 1em;
  border: 2px solid orange;
  border-radius: 3px;
  /* background-image: url("https://filedn.com/lNoARe6kYwfHEYXrn4wlGAR/doodles/orangesBd.jpg"); */

  &:hover {
    background-color: orange;
    border: 2px solid #1e3163;
  }
`;
