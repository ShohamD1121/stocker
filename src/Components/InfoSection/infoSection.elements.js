import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: ${({ isMain }) => (isMain ? "80px 0" : "80px 0 0 0")};
  background: ${({ lightBg }) =>
    lightBg
      ? "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(217,232,255,1) 100%, rgba(158,195,255,1) 100%);"
      : "#fff"};
  animation: fadeInAnimation ease 2s;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    padding: ${({ isMain }) => (isMain ? "50px 0" : "30px 0")};
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ButtomLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "gray" : "gray")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 600px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: var(--fs-h1);
  line-height: 1.1;
  font-weight: 700;
  color: #000;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: var(--fs-p);
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "gray" : "gray")};
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  margin-top: 15px;
  color: red;
`;

export const FormWrapper = styled.div`
  padding-top: 3rem;
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`;
