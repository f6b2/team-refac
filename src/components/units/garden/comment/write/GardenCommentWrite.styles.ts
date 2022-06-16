import styled from '@emotion/styled';

export const CommentWriteBox = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CommentWriteProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 15px;
  background-color: white;
`;

export const CommentWriteInputBox = styled.div`
  width: 385px;
  height: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
`;

export const CommentWriteInput = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  margin-left: 3.5px;
  font-weight: 400;
  font-size: 12px;
  padding-left: 9.5px;
`;

export const CommentWriteBtn = styled.div`
  width: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 8px;
`;

export const SubmitBtn = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 25px;
  cursor: pointer;
  @media (max-width: 767px) {
    margin: 0px;
    margin-right: 15px;
    padding: 0px;
  }
`;

export const ImgBtn = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 25px;
  cursor: pointer;
  margin-left: 13px;
  @media (max-width: 767px) {
    margin: 0px;
    margin-right: 15px;
    padding: 0px;
  }
`;

export const VideoBtn = styled.button`
  border: none;
  background: none;
  color: black;
  font-size: 25px;
  cursor: pointer;
  margin-left: 13px;
  @media (max-width: 767px) {
    margin: 0px;
    margin-right: 15px;
    padding: 0px;
  }
`;

export const ImageThumbnail = styled.img`
  width: 300px;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 10px;
`;

export const VideoThumbnail = styled.video`
  width: 300px;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 10px;
`;

export const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
