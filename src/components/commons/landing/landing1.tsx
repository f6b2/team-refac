import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: none;
  position: relative;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  width: 300px;
  @media (max-width: 767px) {
    width: 40%;
  }
`;

export default function Landing1() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Logo src='/landing/logo.png' />
      </ImgWrapper>
    </Wrapper>
  );
}
