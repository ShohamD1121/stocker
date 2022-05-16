import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #fff;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 960px){
    height : 70px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 2300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const NavLogo = styled(Link)`
  color: #006eec;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.25rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-right : 2rem;
  @media screen and (max-width: 960px){
    font-size : 1.75rem;
  }
`;

export const Dot = styled.span`
  color : #24d878;
`


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.75rem;
    margin : auto;
    cursor: pointer;
  }
  /* @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  } */
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 70px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  font-size : 1.25rem;

  &:hover {
    border-bottom: 2px solid #006eec;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size : 1.25rem;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #006eec;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
 @media screen and (max-width : 960px){
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;
    height : 120px;
 }
`

export const NavBtnLink = styled(Link)`
    display : flex;
    justify-content: center;
    align-items : center;
    text-decoration : none;
    padding : 8px 16px;
    height : 100%;
    width : 100%;
    border : none;
    outline : none;
`