import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 69px;
  @media (max-width: 767px) {
    margin-top: 12.5%;
  }
`;

export const SignUpTitle = styled.h1`
  width: 72px;
  height: 27px;
  font-weight: 500;
  font-size: 20px;
  margin-top: 47px;
  margin-bottom: 30px;
`;

export const SignUpBox = styled.main`
  width: 390px;
  height: 580px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 30px 30px 10px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border: 1px solid #dbdbdb;
  @media (max-width: 767px) {
    width: 90%;
    box-shadow: none;
  }
`;

export const EmailInputBox = styled.section`
  width: 300.54px;
  height: 45px;
  border-bottom: 2px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 12px;
  border: none;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
  :disabled {
    background: none;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const AuthCallBtn = styled.button`
  width: 66px;
  height: 20px;
  background: #ffb950;
  border-radius: 10px;
  /* margin-top: 30px; */
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 400;
  font-size: 10px;

  :disabled {
    background: gray;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    height: 22px;
  }
`;

export const AuthInputBox = styled.section`
  width: 300px;
  height: 45px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 400;
  font-size: 12px;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
  :disabled {
    background: none;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const AuthSubmitBtn = styled.button`
  width: 66px;
  height: 20px;
  background: #ffb950;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 400;
  font-size: 10px;

  :disabled {
    background: gray;
  }

  @media (max-width: 767px) {
    font-size: 13px;
    height: 22px;
  }
`;

export const PasswordInputBox = styled.section`
  width: 300px;
  height: 45px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 400;
  font-size: 12px;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const RePasswordInputBox = styled.section`
  width: 300px;
  height: 45px;
  border-bottom: 2px solid #dbdbdb;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RePasswordInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 400;
  font-size: 12px;
  :focus {
    outline: none;
  }
  :focus::-webkit-input-placeholder {
    opacity: 0;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const LangSelectBox = styled.section`
  width: 300px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const SelectBox1 = styled.article`
  border: none;
`;

export const Select1 = styled.select`
  width: 120px;
  height: 58px;
  border: none;
  font-weight: 400;
  font-size: 12px;
  border-bottom: 2px solid #dbdbdb;
  :focus {
    outline: none;
  }
  color: #767676;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const SelectList = styled.option``;

export const SelectBox2 = styled.article``;

export const Select2 = styled.select`
  width: 120px;
  height: 58px;
  border: none;
  font-weight: 400;
  font-size: 12px;
  border-bottom: 2px solid #dbdbdb;
  :focus {
    outline: none;
  }
  color: #767676;
  cursor: pointer;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const SignUpBtn = styled.button`
  margin-top: 40px;
  width: 300px;
  height: 41px;
  border: 1px solid #dbdbdb;
  background: none;
  background: #ffb950;
  border-radius: 10px;
  font-weight: 400;
  font-size: 12px;
  color: white;
  cursor: pointer;

  :disabled {
    background: gray;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    margin-top: 60px;
  }
`;

export const VisibleBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const Error = styled.div`
  width: 300px;
  height: 13px;
  font-weight: 400;
  font-size: 8px;
  color: #ed1c24;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const SelectError = styled.div`
  height: 13px;
  font-weight: 400;
  font-size: 8px;
  color: #ed1c24;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
