import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyle";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyle";

interface NavbarProps {
  toggle: () => void;
}
function Navbar({ toggle }: NavbarProps) {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "1.5rem" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome} >
              Mo
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItems>
                <NavLinks
                  to='/about'
                >
                  About
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to='/projects'
                >
                  Projects
                </NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks
                  to='services'
                >
                  Services
                </NavLinks>
              </NavItems>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='signin'>Resume</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
