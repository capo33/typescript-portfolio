import styled from "styled-components";

export const Row = styled.div`
  display: grid;
  padding-top: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardImage = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  grid-area: 1 / 2 / 2 / 4;

  @media screen and (max-width: 768px) {
    grid-area: 2 / 1 / 2 / 1;
  }
`;

// =================== List =================== //
export const OL = styled.ol`
  list-style: none; /* Remove default numbering */
  font: 1em "trebuchet MS", "lucida sans";
  padding: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
`;

export const LI = styled.li`
  color: #444;
  border-top: 1px solid #dcdcdc;
`;

export const Span = styled.span`
  position: relative;
  display: block;
  padding: 0.4em 0.4em 0.4em 0.8em;
  margin: 0.5em 0 0.5em 2.5em;
  /* background: #f5f3f3;
  color: #444; */
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:hover {
    background: #eee;
  }

  &:before {
    content: "🦾";
    color: #222222;
    counter-increment: li;
    position: absolute;
    left: -2.5em;
    top: 50%;
    margin-top: -1em;
    background: #22a39f;
    height: 2em;
    width: 2em;
    line-height: 2em;
    text-align: center;
    font-weight: bold;
  }

  &:after {
    position: absolute;
    content: "";
    border: 0.5em solid transparent;
    left: -1em;
    top: 50%;
    margin-top: -0.5em;
    transition: all 0.3s ease-out;
  }

  &:hover:after {
    left: -0.5em;
    border-left-color: #22a39f;
  }
`;
