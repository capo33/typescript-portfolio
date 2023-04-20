import styled from "styled-components";
 import { Link as LinkR } from "react-router-dom";

import { FaTimes } from "react-icons/fa";
interface SidebarContainerStyleProps {
  isOpen?: boolean;
}
export const SidebarContainer = styled.aside<SidebarContainerStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s all ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  background: transparent;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #22A39F;
    transition: 0.2s ease-in-out;
  }
 
`;


