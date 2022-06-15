import styled from '@emotion/styled';

interface IHeaderStyle {
  isOpen?: boolean;
  isMenu?: string;
  isHidden?: boolean;
  currentPage?: any;
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

  @media (max-width: 767px) {
    display: ${(props: IHeaderStyle) => props.isHidden && 'none'};
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1200px;
  height: 100%;
  @media (max-width: 767px) {
    width: 100%;
    padding: 0px 36px;
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
    display: none;
  }
`;

export const BtnHeader = styled.button`
  width: auto;
  height: 100%;
  border: none;
  color: white;
  background-color: #3a3939;
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: ${(props: IHeaderStyle) =>
    props.currentPage ? '#ffb950' : '#ffffff'};

  border-bottom: ${(props: IHeaderStyle) =>
    props.currentPage ? '2px solid #ffb950' : 'none'};

  padding: 0px 20px;

  :hover {
    color: #ffb950;
    cursor: pointer;
    border-bottom: 2px solid #ffb950;
  }

  @media (max-width: 767px) {
    padding: 3% 0%;
  }
`;

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
    width: auto;
  }
`;

export const SpanPoint = styled.span`
  width: 100%;
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  margin-right: 5px;
`;

export const SpanLogin = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  margin-right: 20px;
  :hover {
    cursor: pointer;
    color: #ffb950;
  }
`;

export const SpanP = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  margin-right: 10px;
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
