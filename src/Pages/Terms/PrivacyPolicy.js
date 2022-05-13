import React, { Fragment } from "react";
import GlobalStyle from "../../globalStyles";
import ScrollToTop from "../../Components/ScrollToTop";
import { Navbar } from "../../Components";
import { Footer } from "../../Components";
import { Container } from "../../globalStyles";
import { Title, P, UL, LI, A } from "./Terms.elements";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <br />
      <br />
      <Container>
        <Title>Privacy Policy</Title>
        <P>
          Stocker's Team built the Stocker app as a Freemium app. This SERVICE
          is provided by Stocker's Team at no cost and is intended for use as
          is.
        </P>
        <P>
          This page is used to inform visitors regarding my policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use my Service. If you choose to use my Service, then you
          agree to the collection and use of information in relation to this
          policy. The Personal Information that I collect is used for providing
          and improving the Service. I will not use or share your information
          with anyone except as described in this Privacy Policy.
        </P>
        <P>
          The terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, which are accessible at Stocker unless otherwise
          defined in this Privacy Policy.
        </P>
        <Title>Information Collection and Use</Title>
        <P>
          For a better experience, while using our Service, I may require you to
          provide us with certain personally identifiable information. The
          information that I request will be retained on your device and is not
          collected by me in any way. The app does use third-party services that
          may collect information used to identify you.
        </P>
        <P>
          Link to the privacy policy of third-party service providers used by
          the app
        </P>
        <UL>
          <LI>
            <A href="https://policies.google.com/terms">Google Play Services</A>
          </LI>
          <LI>
            <A href="https://developers.google.com/admob/terms">AdMob</A>
          </LI>
          <LI>
            <A href="https://firebase.google.com/terms/analytics">
              Google Analytics for Firebase
            </A>
          </LI>
          <LI>
            <A href="https://www.revenuecat.com/terms/">RevenueCat</A>
          </LI>
        </UL>
        <Title>Log Data</Title>
        <P>
          I want to inform you that whenever you use my Service, in a case of an
          error in the app I collect data and information (through third-party
          products) on your phone called Log Data. This Log Data may include
          information such as your device Internet Protocol (“IP”) address,
          device name, operating system version, the configuration of the app
          when utilizing my Service, the time and date of your use of the
          Service, and other statistics.
        </P>
        <Title>Cookies</Title>
        <P>
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory.
        </P>
        <P>
          This Service does not use these “cookies” explicitly. However, the app
          may use third-party code and libraries that use “cookies” to collect
          information and improve their services. You have the option to either
          accept or refuse these cookies and know when a cookie is being sent to
          your device. If you choose to refuse our cookies, you may not be able
          to use some portions of this Service.
        </P>
        <Title>Service Providers</Title>
        <P>
          I may employ third-party companies and individuals due to the
          following reasons:
        </P>
        <UL>
          <LI>To facilitate our Service.</LI>
          <LI>To provide the Service on our behalf.</LI>
          <LI>To perform Service-related services.</LI>
          <LI>To assist us in analyzing how our Service is used.</LI>
        </UL>

        <P>
          I want to inform users of this Service that these third parties have
          access to their Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </P>

        <Title>Security</Title>
        <P>
          I value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and I cannot
          guarantee its absolute security.
        </P>
        <Title>Links to Other Sites</Title>
        <P>
          This Service may contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by me. Therefore, I strongly advise
          you to review the Privacy Policy of these websites. I have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </P>
        <Title>Children's Privacy</Title>
        <P>
          These Services do not address anyone under the age of 13. I do not
          knowingly collect personally identifiable information from children
          under 13 years of age. In the case I discover that a child under 13
          has provided me with personal information, I immediately delete this
          from our servers. If you are a parent or guardian and you are aware
          that your child has provided us with personal information, please
          contact me so that I will be able to do the necessary actions.
        </P>
        <Title>Changes to This Privacy Policys</Title>
        <P>
          I may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. I will
          notify you of any changes by posting the new Privacy Policy on this
          page. This policy is effective as of 2022-05-07
        </P>
        <Title>Contact Us</Title>
        <P>
          If you have any questions or suggestions about my Privacy Policy, do
          not hesitate to contact me at support@stockermobileapp.com.
        </P>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default PrivacyPolicy;
