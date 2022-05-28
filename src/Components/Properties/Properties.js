import React, { Fragment } from "react";
import {
  Header,
  Wrapper,
  SecondWrapper,
  Title,
  Description,
  SmallTitle,
  SmallDescription,
} from "./Propeties.elements";
import { FaEye, FaDatabase, FaCode, FaUserFriends } from "react-icons/fa";
import { Container } from "../../globalStyles";

const Properties = ({ BgColor, TextColor, Text }) => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <Header style={{ background: BgColor[0], color: TextColor[0] }}>
            <FaEye style={{ fontSize: "20px", margin: "auto" }} />
            {Text}
          </Header>
          <Title>The world's first personal AI stock screener</Title>
          <Description>
            The key to successful investing is knowing which stocks to buy.
            Stocker is an AI powered stock picking mobile app. It uses a
            powerful algorithm to pick the best stocks for the user based on his
            investing style and provides realtime financials, news, analysis.
          </Description>
        </Wrapper>
        <SecondWrapper>
          <Wrapper>
            <Header style={{ background: BgColor[0], color: TextColor[0] }}>
              <FaDatabase style={{ fontSize: "20px" }} />
            </Header>
            <SmallTitle>
              Real-Time
              <br />
              stocks data
            </SmallTitle>
            <SmallDescription>
              Collect realtime financial stock data on over 10,000 tickers across the US stock market.
            </SmallDescription>
          </Wrapper>
          <Wrapper>
            <Header style={{ background: BgColor[1], color: TextColor[1] }}>
              <FaCode style={{ fontSize: "20px" }} />
            </Header>
            <SmallTitle>
              Powerful AI
              <br />
              Algorithm
            </SmallTitle>
            <SmallDescription>
              Our advanced powerful AI algorithm will learn your investing style
              based on the stocks you like in order to pick the best stocks for
              you.
            </SmallDescription>
          </Wrapper>
          <Wrapper>
            <Header style={{ background: BgColor[2], color: TextColor[2] }}>
              <FaUserFriends style={{ fontSize: "20px" }} />
            </Header>
            <SmallTitle>
              User friendly
              <br />
              experience
            </SmallTitle>
            <SmallDescription>
              User experience upon the top of our values. Our goal is to make
              stock investing in the most friendly and comfortable way.
            </SmallDescription>
          </Wrapper>
        </SecondWrapper>
      </Container>
    </Fragment>
  );
};

export default Properties;
