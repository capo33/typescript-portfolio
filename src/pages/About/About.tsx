import React from "react";
import styled from "styled-components";

import { Container } from "../../globalStyle";
import Technologies from "../../components/Technologies/Index";
import Qualification from "../../components/Qualification/Index";
import Snippets from "../../components/Sinppets/Index";
import AboutDetails from "../../components/AboutDetails/Index";

const Main = styled.main`
  padding: 5% 0 0;
  color: #000;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 1%;
  }

  @media screen and (min-width: 768px) {
    img {
      height: 100%;
    }
  }
`;

const About = () => {
  return <AboutDetails />;
};

export default About;
