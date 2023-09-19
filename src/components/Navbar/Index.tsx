import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
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
import { links } from "../../Data/NavbarData/Index";
import CV from "../../assets/pdf/CV.pdf";

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
    <IconContext.Provider value={{ color: "#fff", size: "1.5rem" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            Mo
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {links.map((link) => {
              return (
                <NavItems key={link.id}>
                  <NavLinks scrollNav={scrollNav} to={link.to}>
                    {link.text}
                  </NavLinks>
                </NavItems>
              );
            })}
          </NavMenu>
          <NavBtn>
            <NavBtnLink scrollNav={scrollNav} download href={CV}>
              Download CV
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
