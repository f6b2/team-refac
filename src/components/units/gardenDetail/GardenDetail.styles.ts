import styled from '@emotion/styled';
import { RiFileEditLine, RiDeleteBinLine } from 'react-icons/ri';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { IoChatbubbleOutline } from 'react-icons/io5';

export const Outer = styled.div`
  margin-top: 150px;
  width: 860px;
  @media all and (max-width: 768px) {
    margin-top: 50px;
    width: 100%;
  }
`;

export const GardenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 860px;
  height: 500px;
  border: 1px solid #dbdbdb;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  @media all and (max-width: 768px) {
    width: 80%;
    height: auto;
    padding: 0px 20px;
  }
`;

export const GardenListBox = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 29px;
  @media all and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-right: 0px;
    width: 100%;
  }
`;

export const ContentsImg = styled.div`
  width: 430px;
  height: 500px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: 380px;
    object-fit: cover;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: auto;
  padding: 20px 0px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const WriterInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding-right: 5px;
  }
`;

export const WriterInfo = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const WriterProfile = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const WriterName = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin: 0px 5px;
`;

export const CreatedAt = styled.time`
  font-size: 8px;
  color: #65676b;
`;

export const ContentsBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: auto;
    height: 70%;
  }
`;

export const Contents = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
  margin-left: 15px;
`;

export const ContentsTranslateBox = styled.article`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gray;
  padding: 5px;
`;

export const ContentsTranslate = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #a4b1da;
`;

export const LikeAndCommentCountBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Like = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  margin-right: 10px;
`;

export const CommentCount = styled.div`
  font-weight: 400;
  font-size: 12px;
`;

export const CommentListBtn = styled.button`
  border: none;
  background: none;
  font-weight: 400;
  font-size: 12px;
  color: gray;
  cursor: pointer;
`;

export const LikeAndCommentCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// 수정버튼
export const IconWrapper = styled.button`
  color: white;
  border: none;
  background-color: white;

  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0));
  cursor: pointer;
`;

export const EditIcon = styled(RiFileEditLine)`
  color: black;
  width: 24px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  :hover {
    color: #ffb950;
  }
`;
export const DeleteIcon = styled(RiDeleteBinLine)`
  color: black;
  width: 24px;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  :hover {
    color: #ffb950;
  }
`;
export const CommentBox = styled.div`
  width: 100%;
  height: 250px;
  overflow: auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

export const LikeOn = styled(BsHeartFill)`
  font-size: 13px;
  color: red;
`;

export const LikeOff = styled(BsHeart)`
  font-size: 13px;
`;

export const CommentIcon = styled(IoChatbubbleOutline)`
  font-size: 13px;
  margin-right: 3px;
`;
