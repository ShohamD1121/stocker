import React, { Fragment, useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  Dot
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button , Logo} from "../../globalStyles";
import logoFinal from '../../images/logoFinal.svg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Fragment>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <Logo src={logoFinal} alt="image" />
              Stocker<Dot>.</Dot>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/features" onClick={closeMobileMenu}>Features</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/faq" onClick={closeMobileMenu}>FAQ</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact-us" onClick={closeMobileMenu}>Contact Us</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/download">
                    <Button primary BtnTextcolor>Download Now</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/download" onClick={closeMobileMenu}>
                    <Button fontBig primary BtnTextcolor>
                      Download Now
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
