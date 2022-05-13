import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
        box-sizing : border-box;
        margin : 0;
        padding : 0;
        font-family : 'Poppins', sans-serif;
    }
    :root {
      --fs-h1 : 2.25rem;
      --fs-p : 1rem;
    }
    @media screen and (min-width : 640px) {
      :root{
        --fs-h1 : 2.5rem;
        --fs-p : 1.10rem;
      }
    }
    @media screen and (min-width : 1024px) {
      :root{
        --fs-h1 : 3rem;
        --fs-p : 1.25rem;
      }
    }
    @media screen and (min-width : 1281px) {
      :root{
        --fs-h1 : 3.5rem;
        --fs-p : 1.5rem;
      }
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 90vw;
  min-height : 65vh;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 1080px) {
    padding-right: 30px;
    padding-left: 30px;
    max-width : 90vw;
  }
`;

export const Button = styled.button`
  border-radius: 25px;
  background: ${({ primary }) => (primary ? "transparent" : "#24d878")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${({BtnTextcolor}) => BtnTextcolor ? "#24d878" : "#fff"};
  font-size: ${({ fontBig }) => (fontBig ? "1.5rem" : "1.25rem")};
  outline: none;
  border: 1px solid #24d878;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#24d878" : "transparen")};
    color: ${({BtnTextcolor}) => BtnTextcolor ? "#fff" : "#24d878"};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
`;

export default GlobalStyle;
