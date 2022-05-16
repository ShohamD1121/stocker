import React, { Fragment, useState, useRef, useEffect } from "react";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  ButtomLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  Label,
  FormWrapper,
} from "./infoSection.elements";
import { sendEmail } from "../../actions/emails";
import { useDispatch } from "react-redux";
import { Header } from "../Properties/Propeties.elements";
import { FaSearch, FaDollarSign, FaNewspaper } from "react-icons/fa";
import { Form, FormInput } from "../Footer/Footer.elements";
import AfterSumbit from "../AfterSumbit";
import { Slide } from "@mui/material";

const InfoSection = ({
  lightBg,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  start,
  isMain,
  objNum,
}) => {
  const [email, setEmail] = useState({
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [checked, setChecked] = useState(false);
  const containerRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    setChecked(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
    if (email.email.match(mailformat)) {
      dispatch(sendEmail(email));
      setIsEmailSent(true);
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <Fragment>
      <InfoSec lightBg={lightBg} ref={containerRef} isMain={isMain}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              {isMain ? (
                <Slide
                  direction="down"
                  in={checked}
                  container={containerRef.current}
                  timeout={2500}
                  mountOnEnter
                  unmountOnExit
                >
                  <TextWrapper>
                    {!isMain && objNum === 2 && (
                      <Header
                        style={{ background: "#D6FFDE", color: "#00D72B" }}
                      >
                        <FaSearch style={{ fontSize: "20px"}} /> Stock Picking
                      </Header>
                    )}
                    {!isMain && objNum === 3 && (
                      <Header
                        style={{ background: "#D6FFDE", color: "#00D72B" }}
                      >
                        <FaDollarSign style={{ fontSize: "20px" }} /> Financials
                      </Header>
                    )}
                    {!isMain && objNum === 4 && (
                      <Header
                        style={{ background: "#D6FFDE", color: "#00D72B"}}
                      >
                        <FaNewspaper style={{ fontSize: "20px"}} /> News and
                        Analysis
                      </Header>
                    )}
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>
                      {description}
                    </Subtitle>
                    {!isEmailSent && isMain ? (
                      <FormWrapper>
                        <ButtomLine lightTopLine={lightTopLine}>
                          Join The 100+ Stockers on our Waitlist
                        </ButtomLine>
                        <Form onSubmit={handleSubmit}>
                          {isSubmitted ? (
                            <div>
                              <FormInput
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                onChange={(e) => {
                                  setEmail({ ...email, email: e.target.value });
                                  setIsSubmitted(false);
                                }}
                                value=""
                              />
                            </div>
                          ) : (
                            <div>
                              <FormInput
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                onChange={(e) => {
                                  setEmail({ ...email, email: e.target.value });
                                }}
                              />
                            </div>
                          )}
                          <Button
                            fontBig
                            type="submit"
                            onClick={() => setIsSubmitted(true)}
                          >
                            Get Started
                          </Button>
                        </Form>
                        {!isEmailValid && (
                          <Label>Your email is not valid</Label>
                        )}
                      </FormWrapper>
                    ) : (
                      isMain && <AfterSumbit />
                    )}
                  </TextWrapper>
                </Slide>
              ) : (
                <TextWrapper>
                  {!isMain && objNum === 2 && (
                    <Header style={{ background: "#D6FFDE", color: "#00D72B" }}>
                      <FaSearch style={{ fontSize: "20px" }} /> Stock Picking
                    </Header>
                  )}
                  {!isMain && objNum === 3 && (
                    <Header style={{ background: "#D6FFDE", color: "#00D72B" }}>
                      <FaDollarSign style={{ fontSize: "20px" }} /> Financials
                    </Header>
                  )}
                  {!isMain && objNum === 4 && (
                    <Header style={{ background: "#D6FFDE", color: "#00D72B" }}>
                      <FaNewspaper style={{ fontSize: "20px" }} /> News and
                      Analysis
                    </Header>
                  )}
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle lightTextDesc={lightTextDesc}>
                    {description}
                  </Subtitle>
                  {!isEmailSent && isMain ? (
                    <FormWrapper>
                      <ButtomLine lightTopLine={lightTopLine}>
                        Join The 100+ Stockers on our Waitlist
                      </ButtomLine>
                      <Form onSubmit={handleSubmit}>
                        {isSubmitted ? (
                          <div>
                            <FormInput
                              name="email"
                              type="email"
                              placeholder="Enter Your Email"
                              onChange={(e) => {
                                setEmail({ ...email, email: e.target.value });
                                setIsSubmitted(false);
                              }}
                              value=""
                            />
                          </div>
                        ) : (
                          <div>
                            <FormInput
                              name="email"
                              type="email"
                              placeholder="Enter Your Email"
                              onChange={(e) => {
                                setEmail({ ...email, email: e.target.value });
                              }}
                            />
                          </div>
                        )}
                        <Button
                          fontBig
                          type="submit"
                          onClick={() => setIsSubmitted(true)}
                        >
                          Get Started
                        </Button>
                      </Form>
                      {!isEmailValid && <Label>Your email is not valid</Label>}
                    </FormWrapper>
                  ) : (
                    isMain && <AfterSumbit />
                  )}
                </TextWrapper>
              )}
            </InfoColumn>
            <InfoColumn>
              {isMain ? (
                <Slide
                  direction="left"
                  in={checked}
                  container={containerRef.current}
                  timeout={2500}
                  mountOnEnter
                  unmountOnExit
                >
                  <ImgWrapper start={start}>
                    <Img src={img} alt={alt} />
                  </ImgWrapper>
                </Slide>
              ) : (
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              )}
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </Fragment>
  );
};

export default InfoSection;
