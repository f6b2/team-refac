import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { useRouter } from 'next/router';

const explore = keyframes`
  0% {
    color: white;
    transform: scale(1);
    opacity: 0.5;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
  50% {
    color: white;
    transform: scale(1.05);
    opacity: 1;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
  100% {
    color: white;
    transform: scale(1);
    opacity: 0.5;
    text-shadow: 15px 30px 6px rgba(0, 0, 0, 0.25);
  }
`;

const Main = styled.div`
  background-color: #3a3939;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Hive = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 767px) {
    height: 100%;
    object-fit: cover;
  }
`;

const HivetextWrapper = styled.div`
  position: absolute;
  top: 45%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Hivetext = styled.img`
  width: 80%;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

const MoveGarden = styled.div`
  font-size: 35px;
  font-family: sans-serif;
  font-weight: 700;
  text-align: center;
  color: #fff;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 25%;
  animation: ${explore} 2s 3s linear infinite;
  cursor: pointer;
  :hover {
    animation-play-state: paused;
  }
  @media (max-width: 767px) {
    width: 100%;
    font-size: 35px;
  }
`;

export default function Landing3() {
  const router = useRouter();
  const onClickMoveToGarden = () => {
    router.push('/garden');
  };

  return (
    <Main>
      {/* <Container> */}
      <Hive src='/landing/hive.png' />
      <HivetextWrapper>
        <Hivetext src='/landing/hivetext.png' />
      </HivetextWrapper>
      <MoveGarden
        onClick={onClickMoveToGarden}
        style={{ animationDelay: '0.3' }}
      >
        Click to explore
      </MoveGarden>
      {/* </Container> */}
    </Main>
  );
}
