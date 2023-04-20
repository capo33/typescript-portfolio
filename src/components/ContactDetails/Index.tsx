import { Image, ImageWrapper, Main, Section } from "./ContactDetails";
import Email from "../Email";
import { Container } from "../../globalStyle";

interface InfoSectionProps {
  img?: string;
}

const Contacts = ({ img }: InfoSectionProps) => {
  return (
    <Main>
      <Container>
        <Section>
          <ImageWrapper>
            <Image src={img} alt='' />
          </ImageWrapper>
          <Email />
        </Section>
      </Container>
    </Main>
  );
};

export default Contacts;
