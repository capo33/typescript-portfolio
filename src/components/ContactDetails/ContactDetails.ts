import styled from "styled-components";

export const Main = styled.div`
  min-height: 100vh;
  padding: 5% 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 320px) {
    padding-bottom: 10%;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1200px) and (min-width: 900px) {
    height: 85vh;
  }
  @media screen and (max-width: 900px) and (min-width: 600px) {
    width: 95%;
    height: 85vh;
  }
  @media screen and (max-width: 600px) {
    width: 98%;
    height: auto;
    flex-direction: column;
    margin: 20px 0px;
    box-shadow: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #00ffca;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    z-index: 1;
  }
  @media screen and (max-width: 600px) {
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;

    &::before {
      height: 200px;
      clip-path: polygon(0% 0%, 100% 0, 100% 81%, 50% 100%, 0 81%);
    }
  }
`;

export const Image = styled.img`
  width: 80%;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  z-index: 1;
  margin-left: 30px;

  @media screen and (max-width: 1200px) and (min-width: 900px) {
    height: 150px;
    margin-left: 30px;
  }
  @media screen and (max-width: 600px) {
    /* height: 150px;
    margin-left: 0px; */
    /* margin-top: -40px; */
  }
`;

export const FormArea = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  @media screen and (max-width: 900px) and (min-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin-top: 10px;
  }

`;

export const Input = styled.input`
  padding: 15px 0;
  border: none;
  border-bottom: 1px solid #ddd;
  outline: none;
`;

export const TextArea = styled.textarea`
  border: none;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  outline: none;
  resize: none;
`;
