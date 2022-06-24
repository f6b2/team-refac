import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Image } from 'antd';
import 'antd/dist/antd.css';

const Wrapper = styled.div`
  width: 430px;
  height: 500px;
  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
  }
`;

const SliderGarden = styled(Slider)`
  width: 430px;
  height: 500px;

  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
  }
`;

const SliderChild = styled.div`
  width: 430px;
  height: 500px;
  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
  }
`;

const Image1 = styled(Image)`
  width: 430px;
  height: 500px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`;

const Video = styled.video`
  width: 430px;
  height: 500px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default function GardenDetailImgUI(props: any) {
  const settings: any = {
    dots: true,
    arrows: false,
    lazyLoad: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: boolean) => (
      <ul style={{ marginBottom: '-10px' }}> {dots} </ul>
    ),
  };

  return (
    <Wrapper>
      {props.video !== '' || props.data?.fetchBoardImage.length > 0 ? (
        <SliderGarden {...settings}>
          {props.video !== '' ? (
            <SliderChild>
              <Video src={props.video} controls />
            </SliderChild>
          ) : (
            ''
          )}
          {props.data?.fetchBoardImage.map((el: any, index: any) => (
            <div key={index}>
              {props.data?.fetchBoardImage.length > 0 && (
                <SliderChild>
                  <Image1 src={el.image} />
                </SliderChild>
              )}
            </div>
          ))}
        </SliderGarden>
      ) : (
        <Image1 src='/image/default3.jpg' />
      )}
    </Wrapper>
  );
}
