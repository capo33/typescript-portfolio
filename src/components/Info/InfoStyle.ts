import styled from 'styled-components';

interface InfoStyleProps {
  lightBg?: boolean;
  imgStart?: boolean | string;
  lightText?: boolean | string;
  darkText?: boolean | string;
  start?: string;
  lightTopLine?: boolean;
  lightTextDesc?: boolean;
  topPadding?: boolean;
  bigHeight?: boolean;

}

export const InfoSec = styled.div<InfoStyleProps>`
  color: #fff;
  padding: 160px 0;
  display:flex ;
  justify-content: center ;
  align-items:center ;
   /* padding: ${({ topPadding }) => (topPadding && '160px 0' )}; */
  /* height: ${({ bigHeight }) => (bigHeight && '100vh' )}; */
  background: ${({ lightBg }) => (lightBg ? '#FFFFFF' : '#222222')};

  @media screen and (min-width: 1024px) {
    /* height:100vh ;
    padding: 0 */
  }
`;

export const InfoRow = styled.div<InfoStyleProps>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div<InfoStyleProps>`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div<InfoStyleProps>`
  color: #a9b3c1;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1<InfoStyleProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p<InfoStyleProps>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;
