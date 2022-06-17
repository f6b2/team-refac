import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { BsChevronCompactDown } from 'react-icons/bs';

const Slide = keyframes`
	0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const textScale = keyframes`
  0% {
    color: white;
    transform: scale(1);
    opacity: 0;
  }
  50% {
    color: white;
    transform: scale(1);
    opacity: 1;
  }
  100% {
    color: white;
    transform: scale(1);
    opacity: 0;
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
  margin-left: 5px;
  animation: ${Slide} 3s 2s ease-out forwards;
	@media (max-width: 767px){
		width: 85%;
	}
`;

const SwipeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 5%;
  animation: ${textScale} 2s infinite;
`;

const SwipeText = styled.div`
  color: gray;
  font-size: large;
  font-family: sans-serif;
  font-weight: 700;
  text-align: center;
`;

const SwipeIcon = styled(BsChevronCompactDown)`
  color: gray;
  font-size: 50px;
`;

export default function Landing21() {
  return (
    <Wrapper>
      <Landing src='/landing/21.png' />
      <SwipeWrapper>
        <SwipeText>Swipe Down</SwipeText>
        <SwipeIcon />
      </SwipeWrapper>
    </Wrapper>
  );
}
