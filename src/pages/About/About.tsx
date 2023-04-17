import React from "react";
import styled from "styled-components";

import { Container } from "../../globalStyle";
import AboutInfo from "../../components/AboutInfo/Index";
import Technologies from "../../components/Technologies/Index";
import Qualification from "../../components/Qualification/Qualification";

const Main = styled.main`
  padding: 5% 0 0;
  color: #000; 
  height:100vh ;
 
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 1%;
  }

  @media screen and (min-width: 768px) {
    img {
      height: 100%;
    }
    @media screen and (max-width: 425px) {
      .image {
        margin-bottom: 20px;
      }
    }
  }

   .p_link {
    line-height: 1.7;
  color: #464646;
  font-size: 1rem;

 
  }
  @media screen and (max-width: 768px), (max-width: 1024px) {
    .p_link {
      font-size: 1rem;
    }
  }
`;

const About = () => {
  return (
    <Main>
      <Container>
        <AboutInfo />
        <Qualification />
        <Technologies />
      </Container>
    </Main>
  );
};

export default About;