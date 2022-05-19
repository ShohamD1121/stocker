import React from "react";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterRegularLink
} from "./Footer.elements";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Logo } from "../../globalStyles";
import logoFinal from '../../images/logoFinal.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Start your Next Level stock investing journey
        </FooterSubHeading>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Features</FooterLinkTitle>
            <FooterRegularLink to="/features">Stock Picks </FooterRegularLink>
            <FooterRegularLink to="/features">Financials </FooterRegularLink>
            <FooterRegularLink to="/features">News & Analysis</FooterRegularLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Support</FooterLinkTitle>
            <FooterRegularLink to="/contact-us">Contact Us </FooterRegularLink>
            <FooterRegularLink to="/faq">FAQ </FooterRegularLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Legal</FooterLinkTitle>
            <FooterRegularLink to="/privacy-policy">Privacy Policy</FooterRegularLink>
            <FooterRegularLink to="/terms-of-service">Terms of Service</FooterRegularLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink href="https://www.facebook.com/yoav.tzori" target="_blank" aria-label="Facebook">Facebook</FooterLink>
            <FooterLink href="https://www.instagram.com/yoav_tzori" target="_blank" aria-label="Instagram">Instagram</FooterLink>
            <FooterLink href="https://www.linkedin.com/company/stocker-app" target="_blank" aria-label="Linkedin">LinkedIn</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <Logo src={logoFinal} alt="Image"/>
            Stocker
          </SocialLogo>
          <WebsiteRights>Made By @ShohamDouek</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="https://www.facebook.com/yoav.tzori" target="_blank" aria-label="Facebook">
              <FaFacebookSquare />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/yoav_tzori" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/company/stocker-app" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
