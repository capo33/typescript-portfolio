import Snippets from "../Sinppets/Index";
import Qualification from "../Qualification/Index";
import Technologies from "../Technologies/Index";
import { Container } from "../../globalStyle";

import "./AboutDetails";
import { Main } from "./AboutDetails";

const AboutDetails = () => {
  return (
    <Main>
      <Container>
        <Snippets />
        <Qualification />
        <Technologies />
      </Container>
    </Main>
  );
};

export default AboutDetails;
