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
  justify-content: flex-end;
  align-items: center;
`;

const Landing = styled.img`
  width: 70%;
  margin-right: 5px;
  animation: ${Slide} 3s 4s forwards;
  @media (max-width: 767px) {
    width: 85%;
  }
`;

export default function Landing22() {
  return (
    <Wrapper>
      <Landing src='/landing/22.png' />
    </Wrapper>
  );
}
