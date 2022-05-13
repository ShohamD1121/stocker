import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaMagento} from 'react-icons/fa'

export const FooterContainer = styled.div`
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(217,232,255,1) 100%, rgba(158,195,255,1) 100%);
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #000;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: var(--fs-h1);
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top : 0rem;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    width: 80%;
    margin-left : auto;
    margin-right : auto;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #24d878;
  background-color : transparent;
  &::placeholder {
    color: gray;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    margin: 0 0 16px 0px;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
    margin-bottom : 16px;
`

export const FooterLink = styled.a`
    color : #000;
    text-decoration : none;
    margin-bottom : 0.5rem;
    cursor : pointer;
    &:hover{
        color : #006eec;
        transition : 0.3s ease-out;
    }
`

export const FooterRegularLink = styled(Link)`
    color : #000;
    text-decoration : none;
    margin-bottom : 0.5rem;
    cursor : pointer;
    &:hover{
        color : #006eec;
        transition : 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width : 1000px;
    width : 100%;
`

export const SocialMediaWrap = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 90%;
    max-width : 1000px;
    margin : 40px auto 0 auto;
    @media screen and (max-width : 820px){
        flex-direction : column;
    }
`

export const SocialLogo = styled(Link)`
    color : #000;
    justify-self : start;
    cursor : pointer;
    text-decoration : none;
    font-size : 2rem;
    display : flex;
    align-items : center;
    margin-bottom : 16px;
`

export const SocialIcon = styled(FaMagento)`
    margin-right : 10px;
`

export const WebsiteRights = styled.small`
    color : gray;
    font-size: 20px;
    @media screen and (max-width : 820px) {
      font-size : 15px;
      margin-bottom : 15px;
    }
`

export const SocialIcons = styled.div`
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    width : 240px;
`

export const SocialIconLink = styled.a`
    color : #000;
    font-size : 24px;
`
