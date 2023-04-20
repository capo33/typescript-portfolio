import styled from "styled-components";

export const Section = styled.section`
  padding: 3% 0;
  /* height: 100vh; */
  @media screen and (max-width: 320px) {
    padding: 5% 0 20%;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const MenuBarItems = styled.div`
  color: #222222;
  margin: 30px 10px 10px;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #22a39f;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    margin: 10px 5px 0px;
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    margin: 10px 0px 0px;
  }
`;

export const Row = styled.div`
  display: grid;
  padding-top: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(150px, auto);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;

  border-radius: 6px;
  color: rgba(0, 0, 0, 0.87);
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;

export const CardImage = styled.div`
  position: relative;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -30px;
  border-radius: 6px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 6px;
  pointer-events: none;
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

export const Table = styled.div`
  padding: 15px 30px;
  margin-bottom: 0px;
  border-radius: 0 0 6px 6px;
`;

export const Category = styled.h6`
  position: relative;
  line-height: 0;
  margin: 15px 0;
  color: #2d4263;
`;

export const Description = styled.p`
  font-size: 12px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
`;
