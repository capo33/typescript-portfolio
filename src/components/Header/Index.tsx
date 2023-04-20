import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

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
import CV from "../../assets/pdf/Mo-CV.pdf";
import { NavItems } from "../Navbar/NavbarStyle";
import { links } from "../../Data/NavbarData/Index";

const Header = () => {
  const [click, setClick] = useState(false);
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
  const handleClick = () => {
    setClick(!click);
    scroll.scrollToTop();
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: "#fff", size: "1.5rem" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={closeMobileMenu}>
            Mo
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click} scrollNav={scrollNav}>
            {links.map((link) => {
              return (
                <NavItems key={link.id}>
                  <NavLinks
                    to={link.to}
                    onClick={closeMobileMenu}
                    scrollNav={scrollNav}
                  >
                    {link.text}
                  </NavLinks>
                </NavItems>
              );
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink download href={CV} scrollNav={scrollNav}>
              Download CV
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Header;
