import styled from '@emotion/styled';

import { GiHamburgerMenu } from 'react-icons/gi';

interface IHeaderStyle {
  isOpen?: boolean;
  isMenu?: string;
}

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #3a3939;
  position: fixed;
  z-index: 100;
  padding: 12px 0px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;
  height: 100%;
  @media (max-width: 767px) {
    width: 100%;
    /* justify-content: space-between; */
    padding: 0px 36px;
    flex-direction: column;
  }
`;

export const WrapperLogo = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

// const LogoImg = styled.img`
//   width: 74px;
//   height: auto;
//   cursor: pointer;
// `;

export const PLogoLang = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #ffffff;
`;

export const PLogoB = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #ffb950;
`;

export const WrapperHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  height: 100%;
  padding: 0% 10%;

  @media (max-width: 767px) {
    flex-direction: column;
    display: ${(props: IHeaderStyle) => (props.isOpen ? 'flex' : 'none')};
  }
`;

export const BtnHeader = styled.button`
  width: auto;
  height: 100%;
  border: none;
  color: white;
  background-color: #3a3939;
  font-family: 'Istok Web';
  /* margin: 0px 35px; */
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  padding: 0px 20px;
  border-bottom: 2px solid #ffb950;

  :hover {
    color: #ffb950;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    padding: 3% 0%;
  }
`;

// const MyBee = styled(CgBee)`
//   font-size: 18px;
//   text-align: center;
//   color: #ffffff;
//   :hover {
//     color: #ffb950;
//     cursor: pointer;
//   }
// `;

// const MyPoint = styled(BsFlower1)`
//   font-size: 18px;
//   text-align: center;
//   color: #ffffff;
//   :hover {
//     cursor: pointer;
//     color: #ffb950;
//   }
// `;

export const WrapperHeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  color: white;
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  @media (max-width: 767px) {
    flex-direction: column;
    display: ${(props: IHeaderStyle) => (props.isOpen ? 'flex' : 'none')};
    padding: 3% 0%;
  }
`;

export const SpanPoint = styled.span`
  width: 100%;
  /* height: auto; */
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  text-overflow: ellipsis;
`;

export const SpanLogin = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

export const WrapperPoint = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  :hover {
    cursor: pointer;
    color: #ffb950;
  }
`;

export const IconToggle = styled(GiHamburgerMenu)`
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  display: none;
  :hover {
    color: #ffb950;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    display: flex;
    position: absolute;
    top: 20px;
    right: 10px;
  }
`;
