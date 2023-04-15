import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// #FFFFFF
// #E2E2E2
interface NavStyleProps {
  scrollNav?: boolean;
}
export const Nav = styled.nav<NavStyleProps>`
  background-color: ${({ scrollNav }) => (scrollNav ? "#2D4263" : "#191919")};
   height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  z-index: 1;
  padding: 0 24px;
  max-width: 1300px;
`;

export const NavLogo = styled(LinkR)`
  color: #ECDBBA;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 24px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ECDBBA;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  /* align-items: center ; */ // commented out because bootstrap effects
  list-style: none;
  margin-right: -22px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: #ECDBBA;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #ECDBBA;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  text-decoration: none;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  &:hover {
    transition: 0.2s all ease-in-out;
    background-color: #fff;
    color: #010601;
  }
`;
