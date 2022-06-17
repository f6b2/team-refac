import styled from '@emotion/styled';
import Landing1 from '../src/components/commons/landing/landing1';
import Landing21 from '../src/components/commons/landing/landing21';
import Landing22 from '../src/components/commons/landing/landing22';
import Landing23 from '../src/components/commons/landing/landing23';
import Landing3 from '../src/components/commons/landing/landing3';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: none;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  /* 스크롤바 안보이게 설정 */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Inner = styled.div`
  scroll-snap-align: start;
  scrollbar-width: none;
  /* 스크롤바 안보이게 설정 */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  -ms-overflow-style: none; /* IE and Edge */
`;

export default function Home() {
  return (
    <Wrapper>
      <Inner>
        <Landing1 />
      </Inner>

      <Inner>
        <Landing21 />
      </Inner>

      <Inner>
        <Landing22 />
      </Inner>

      <Inner>
        <Landing23 />
      </Inner>

      <Inner>
        <Landing3 />
      </Inner>
    </Wrapper>
  );
}
