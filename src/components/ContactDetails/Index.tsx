import { Image, ImageWrapper, Main, Section } from "./ContactDetails";
import Email from "../Email";
import { Container } from "../../globalStyle";
 
interface InfoSectionProps {
  img?: string;
  topLine?: string;
  title?: string;
}

const Contacts = ({ img ,title, topLine}: InfoSectionProps) => {
  console.log(img);
  return (
    <Main>
      <Container>
        <Section>
          <ImageWrapper>
            <Image src={img} alt={title} />
          </ImageWrapper>
          <Email title={title} topLine={topLine} />
        </Section>
       </Container>
    </Main>
  );
};

export default Contacts;
