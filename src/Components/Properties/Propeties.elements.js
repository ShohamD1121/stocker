import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: fadeInAnimation ease 2s;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SecondWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Header = styled.div`
  border-radius: 25px;
  display: flex;
  gap: 10px;
  text-align: center;
  width: fit-content;
  padding: 10px 15px;
  margin: 64px auto 30px;
  font-size: 17px;
  @media screen and (max-width: 425px) {
    font-size : 20px;
  }
`;

export const Title = styled.h1`
  color: #000;
  margin-bottom: 15px;
  font-size: var(--fs-h1);
  max-width: 70%;
  align-self: center;
  text-align: center;
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

export const SmallTitle = styled.h1`
  color: #000;
  margin-bottom: 15px;
  font-size: 24px;
  max-width: 70%;
  align-self: center;
  text-align: left;
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Description = styled.p`
  color: gray;
  font-size: 18px;
  max-width: 50%;
  align-self: center;
  text-align: left;
  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
`;

export const SmallDescription = styled.p`
  color: gray;
  font-size: 16px;
  max-width: 75%;
  align-self: center;
  text-align: left;
  @media screen and (max-width: 991px) {
    max-width: 90%;
  }
`;
