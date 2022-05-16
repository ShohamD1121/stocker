import React, { Fragment } from "react";
import { Header, Wrapper,SecondWrapper, Title, Description, SmallTitle, SmallDescription } from "./Propeties.elements";
import { FaEye, FaDatabase, FaCode, FaUserFriends } from "react-icons/fa";
import { Container } from "../../globalStyles";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";

const Properties = ({ BgColor, TextColor, Text }) => {

  const innerWidth = useWindowDimensions().width;
  
  const viewPortHandler = () => {
    if (innerWidth < 425) {
      return "24px";
    }else{
      return "20px";
    }
  }

  return (
    <Fragment>
      <Container>
        <Wrapper >
          <Header style={{ background: BgColor[0], color: TextColor[0] }}>
            <FaEye style={{ fontSize: "20px", margin : "auto"}} />
            {Text}
          </Header>
          <Title>The world's first personal AI stock screener</Title>
          <Description>
            Instead of wasting hours on finding the right stocks that fit your
            personal investing style, Stocker's powerful AI algorithm picks
            quickly the best stocks for you in addition to realtime stock market
            financials, News and Analysis.
          </Description>
        </Wrapper>
        <SecondWrapper >
          <Wrapper >
            <Header style={{ background: BgColor[0], color: TextColor[0] }}>
              <FaDatabase style={{ fontSize: "20px" }} />
            </Header>
            <SmallTitle>Real-Time<br/>stocks data</SmallTitle>
            <SmallDescription>
              Collect realtime financial stock data on over 10,0000 tickers all
              over the US stock market.
            </SmallDescription>
          </Wrapper>
          <Wrapper >
            <Header style={{ background: BgColor[1], color: TextColor[1] }}>
              <FaCode style={{ fontSize: "20px" }} />
            </Header>
            <SmallTitle>Powerful AI<br/>Algorithm</SmallTitle>
            <SmallDescription>
              Our advanced powerful AI algorithmwill learn your investing style
              based on the stocks you like in order to pick the best stocks for
              you.
            </SmallDescription>
          </Wrapper>
          <Wrapper >
            <Header style={{ background: BgColor[2], color: TextColor[2] }}>
              <FaUserFriends style={{ fontSize: "20px" }} />
            </Header>
            <SmallTitle>User friendly<br/>experience</SmallTitle>
            <SmallDescription>
              User experience is on the top of our values. Our goal is to make
              stock investing in the most friendly and comfortable way.
            </SmallDescription>
          </Wrapper>
        </SecondWrapper>
      </Container>
    </Fragment>
  );
};

export default Properties;
