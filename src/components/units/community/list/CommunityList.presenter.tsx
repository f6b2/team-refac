import * as S from './CommunityList.styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { getDate } from '../../../../commons/libraries/utils';
import { ICommunityListUIProps } from './CommunityList.types';

// 캐러셀 커스터마이징
const Slider1 = styled(Slider)`
  width: 100%;
  padding: 0px 30px;

  .slick-prev:before {
    color: black;
    font-size: 25px;
  }
  .slick-next:before {
    color: black; // arrow 색상 변경
    font-size: 25px; // arrow 크기 변경
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 85%;
    margin: 0px 15px;
    padding-left: 20px;
  }
  @media screen and (max-width: 767px) {
    width: 85%;
    margin: 0px 15px;
    padding-left: 30px;
    .slick-prev:before {
      color: black;
      font-size: 20px;
    }
    .slick-next:before {
      color: black; // arrow 색상 변경
      font-size: 20px; // arrow 크기 변경
    }
  }
`;

export default function CommunityListUI(props: ICommunityListUIProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    rows: 2,
    slidesPerRow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          speed: 800,
          rows: 2,
          slidesPerRow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <S.Wrapper>
      <S.Header>
        <S.PageName>Community</S.PageName>
        <S.Button onClick={props.onClickMoveToWrite}>Post</S.Button>
      </S.Header>

      <S.Body>
        <Slider1 {...settings}>
          {props.data?.fetchCommunityBoards.map((el) => (
            <S.ContentsWrapper key={el.id}>
              <S.Img
                id={el.id}
                onClick={props.onClickContent}
                src={
                  el.image.includes('http')
                    ? el.image
                    : '/community/default.png'
                }
              />

              <S.InfoWrapper>
                <S.Info>
                  <S.Title>{el.title}</S.Title>
                  <S.Writer>{el.writer.name}</S.Writer>
                  <S.Date>{getDate(el.createdAt)}</S.Date>
                </S.Info>
                <S.LikesWrapper>
                  <S.HeartsWrapper>
                    <S.GiHeartsIcon />
                  </S.HeartsWrapper>
                  <S.Likes>{el.likes}</S.Likes>
                </S.LikesWrapper>
              </S.InfoWrapper>
            </S.ContentsWrapper>
          ))}
        </Slider1>
      </S.Body>
    </S.Wrapper>
  );
}
