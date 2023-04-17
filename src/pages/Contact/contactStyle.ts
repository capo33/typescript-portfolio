import styled from "styled-components";

interface InfoStyleProps {
  lightBg?: boolean;
  imgStart?: boolean | string;
  lightText?: boolean | string;
  darkText?: boolean | string;
  start?: string;
  lightTopLine?: boolean;
  lightTextDesc?: boolean;
}

export const InfoSec = styled.div<InfoStyleProps>`
  color: #fff;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ lightBg }) => (lightBg ? "#FFFFFF" : "#222222")};
`;

export const Heading = styled.h2`
  color: #222222;
  text-align: center;
`;

export const Span = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #22a39f;
`;

export const Paragraph = styled.p`
  line-height: 1.7;
  color: #222222;
  font-size: 1rem;
  margin: 20px 0 60px;
  display: flex;
  justify-content: space-around;
  text-align: justify;
`;

export const InfoRow = styled.div<InfoStyleProps>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 750%;
    flex-basis: 75%;
  }
`;

export const ImgWrapper = styled.div<InfoStyleProps>`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div<InfoStyleProps>`
  color: black;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
  color: #222222;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid #22a39f;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;

  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 20px;

  margin-bottom: 20px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border: 1px solid #22a39f;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 240px;
  
  @media screen and (max-width: 768px) {
    margin: 20px 0;
    width: 100%;
  }
`;
