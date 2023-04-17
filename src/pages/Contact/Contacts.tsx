import { RiMailSendFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { Container, Button } from "../../globalStyle";
import {
  InfoSec,
  Heading,
  Paragraph,
  Span,
  InfoRow,
  InfoColumn,
  TopLine,
  ImgWrapper,
  Img,
  Form,
  Input,
  TextArea,
  Label,
  SocialIcons,
} from "./contactStyle";

interface InfoSectionProps {
  id?: string;
  primary?: boolean;
  lightBg?: boolean;
  topLine?: string;
  img?: string;
  alt?: string;
  start?: string;
  title?: string;
}

const Contacts = ({
  id,
  primary,
  lightBg,
  topLine,
  img,
  alt,
  start,
  title,
}: InfoSectionProps) => {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
        
          <Heading>
            Get in <Span>Touch</Span>
          </Heading>
          <Paragraph>{title}</Paragraph>
          <InfoRow>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <TopLine>{topLine}</TopLine>
              <Form>
                <Label htmlFor='name'>Name</Label>
                <Input type='text' className='' />
                <Label htmlFor='email'>Email</Label>
                <Input type='email' className='' />
                <Label htmlFor='message'>Message</Label>
                <TextArea rows={5}></TextArea>
                <Button primary={primary}>
                  Send <RiMailSendFill />
                </Button>{" "}
              </Form>
            </InfoColumn>
          </InfoRow>
          <SocialIcons >

          <AiFillLinkedin
          style={{
            width: "2rem",
            height: "2rem",
            fontSize: "3rem",
            color: "black",
          }}
          />
          <AiFillLinkedin
          style={{
            width: "2rem",
            height: "2rem",
            fontSize: "3rem",
            color: "black",
          }}
          />
          <AiFillLinkedin
          style={{
            width: "2rem",
            height: "2rem",
            fontSize: "3rem",
            color: "black",
          }}
          />
          </SocialIcons>
        </Container>
      </InfoSec>
    </>
  );
};

export default Contacts;
