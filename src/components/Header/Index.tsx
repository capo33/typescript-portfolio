import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavBtnLink,
  NavBtn,
} from "./HeaderStyle";
import CV from "../../assets/pdf/CV.pdf";
import { NavItems } from "../Navbar/NavbarStyle";
import { links } from "../../Data/NavbarData/Index";
import "./nav.css";
const Header = () => {
  const [click, setClick] = useState(false);
     
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#fff", size: "1.5rem" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={closeMobileMenu}>
            Mo
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            {links.map((link) => {
              return (
                <NavItems key={link.id}>
                  <NavLinks to={link.to} onClick={closeMobileMenu}>
                    {link.text}
                  </NavLinks>
                </NavItems>
              );
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink download href={CV}>
              Download CV
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Header;
