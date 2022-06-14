import styled from '@emotion/styled';
import { GiHearts } from 'react-icons/gi';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  height: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 40px;
  margin-bottom: 55px;
  padding: 30px;
  width: 100%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 95%;
    margin-bottom: 20px;
  }
  @media all and (max-width: 767px) {
    width: 95%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const PageName = styled.div`
  font-size: 40px;
  font-weight: 600;
  @media all and (max-width: 767px) {
    font-size: 30px;
    font-weight: 600;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  padding: 5px 9px;
  background-color: white;
  color: #51261d;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  border: 2px solid #51261d;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    padding: 5px 9px;
    background-color: #51261d;
    color: white;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    border: 2px solid #51261d;
    border-radius: 10px;
    transition: 0.4s;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media all and (max-width: 767px) {
    width: 90%;
  }
`;

export const ContentsWrapper = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  filter: drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25));
  @media all and (max-width: 767px) {
    margin-bottom: 40px;
    filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 0.25));
  }
`;

export const Img = styled.img`
  width: 90%;
  height: 150px;
  object-fit: cover;
  border: 2px solid none;
  border-radius: 10px;
  transition-duration: 1s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  width: 90%;
  @media all and (max-width: 767px) {
    width: 90%;
  }
`;

export const Info = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const Writer = styled.div`
  font-size: 10px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const Date = styled.div`
  font-size: 10px;
  color: #6a6a6a;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const LikesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HeartsWrapper = styled.button`
  color: #ff5b5b;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export const Likes = styled.div`
  font-size: 10px;
  text-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
`;

export const GiHeartsIcon = styled(GiHearts)``;
