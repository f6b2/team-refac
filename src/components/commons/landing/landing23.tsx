import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Slide = keyframes`
	0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Landing = styled.img`
  width: 70%;
  margin-right: 5px;
  animation: ${Slide} 3s 6s forwards;
  @media (max-width: 767px) {
    width: 85%;
  }
`;

export default function Landing23() {
  return (
    <Wrapper>
      <Landing src='/landing/23.png' />
    </Wrapper>
  );
}
