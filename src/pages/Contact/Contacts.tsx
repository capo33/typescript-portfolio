import { Link } from "react-router-dom";
import { RiMailSendFill } from "react-icons/ri";

import { Container, Button } from "../../globalStyle";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./contactStyle";

const styles = {
  width: "100%",
  outline: "none",
  display: "block",
  // height: "50px",
  padding: "10px",
  border: "1px solid black",
  marginBottom: "20px",
};

interface InfoSectionProps {
  id?: string;
  primary?: boolean;
  lightBg?: boolean;
  topLine?: string;
  lightTopLine?: boolean;
  lightText?: boolean;
  lightTextDesc?: boolean;
  headLine?: string;
  description?: string;
  buttonLabel?: string;
  img?: string;
  alt?: string;
  imgStart?: string;
  start?: string;
  topPadding?: boolean;
  bigHeight?: boolean;
}
const Contacts = ({
  id,
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  start,
}: InfoSectionProps) => {
  return (
    <InfoSec lightBg={lightBg} id={id}>
      <Container>
        <section className='contact'>
          <div className='heading text-center'>
            <h2>
              Get in <span>Touch </span>
            </h2>
            <p>
              I am available for freelance work. If you have a project that you
              would like to get started, think you need my help with something
              or just fancy saying hello, then please get in touch.
            </p>
          </div>
          <InfoRow>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <>
                <TopLine>{topLine}</TopLine>
                <form>
                  <input type='text' className='' placeholder='Name' />
                  <input type='email' className='' placeholder='Email' />
                  <textarea rows={5} placeholder='Message'></textarea>
                  <Button primary={primary}>
                    Send <RiMailSendFill />
                  </Button>{" "}
                </form>
              </>
            </InfoColumn>
          </InfoRow>
        </section>
      </Container>
    </InfoSec>

    //   <Container>
    //     <InfoRow imgStart={imgStart}>
    //       <InfoColumn>

    // <Button big primary={primary}>
    //   Send
    // </Button>{" "}
    //       </InfoColumn>
    //       <InfoColumn>
    // <ImgWrapper start={start}>
    //   <Img src={img} alt={alt} />
    // </ImgWrapper>
    //       </InfoColumn>
    //     </InfoRow>
    //   </Container>
  );
};

export default Contacts;
