import { Link } from "react-router-dom";

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
} from "./InfoStyle";
import { Container, Button } from "../../globalStyle";

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
}

function Info({
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
  imgStart,
  start,
}: InfoSectionProps) {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default Info;
