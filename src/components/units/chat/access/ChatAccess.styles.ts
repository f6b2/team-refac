import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 107px;
  display: flex;
  justify-content: center;
  filter: drop-shadow(15px 15px 10px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  @media (max-width: 767px) {
    margin-top: 0px;
    filter: drop-shadow(0px 0px 0px);
    border-radius: 0px;
    height: 95vh;
  }
`;

export const ChatAccessBox = styled.div`
  width: 900px;
  height: 500px;
  background-image: url('https://cdn.discordapp.com/attachments/974505238029533295/979575695640506408/Screen_Shot_2022-05-26_at_5.47.32_PM.png');
  background-size: 900px;
  @media (max-width: 767px) {
    background: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ChatAccessInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top: 56px;
  font-weight: 700;
  font-size: 30px;
  color: #000000;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  @media (max-width: 767px) {
    margin-top: 0px;
    font-size: 33px;
    color: #fda726;
    text-shadow: none;
  }
`;

export const UserName = styled.div`
  margin-top: 87px;
  width: 283px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const NameInput = styled.input`
  width: 190px;
  border: none;
  background: none;
  border-bottom: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 12px;
  color: #767676;
  :focus {
    outline: none;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const LanguageBox = styled.div`
  margin-top: 29px;
  width: 283px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    width: 80%;
  }
`;

export const SelectLanguage = styled.select`
  width: 190px;
  border: none;
  background: none;
  border-bottom: 1px solid #dbdbdb;
  font-weight: 400;
  font-size: 12px;
  color: #767676;
  :focus {
    outline: none;
  }
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const JoinChatBtn = styled.button`
  margin-top: 73px;
  border: none;
  background: none;
  width: 300px;
  height: 40px;
  background: #ffb950;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  :disabled {
    background: gray;
  }

  @media (max-width: 767px) {
    margin-top: 120px;
    width: 50%;
  }
`;

export const SelectList = styled.option``;
