import styled from '@emotion/styled';

interface IChargeStationStyle {
  isSelect?: any;
  isClicked?: any;
}

export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 900px;
  height: 500px;
  padding: 37px 91px 42px 91px;
  margin-top: 95px;
  border: 1px solid #dbdbdb;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-image: url('/image/paybg.png');
  background-repeat: no-repeat;
  object-fit: cover;

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    margin-top: 0px;
    border-radius: 0px;
    border: none;
  }
`;

export const H2Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  text-align: center;
  color: #000000;
  margin: 0px;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

export const WrapperColCurPoint = styled.div`
  width: 120px;
  height: 120px;
  background: #3a3939;
  border-radius: 50%;
  margin-bottom: 47px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperRowCurPoint = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: auto;
  margin-top: 10px;
`;

export const PCurPointText = styled.p`
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 11px;
  text-align: center;
  color: #ffffff;
  height: auto;
`;

export const PCurPointNum = styled.p`
  margin: 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 25px;
  text-align: center;
  color: #ffb950;
  height: auto;
  padding-top: 10px;
  margin-bottom: 3px;
`;

export const WrapperRowDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
  margin-top: 51px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 20px;
  }
`;

export const WrapperColDetail = styled.div`
  width: 267px;
  height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 37px 14px 42px 14px;
  background: #3a3939;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0px 50px;

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }
`;

export const PDetail = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  color: #ffffff;
  margin: 0px;
  text-align: center;
  width: 50%;
  padding-left: 20px;
`;

export const Divider = styled.div`
  width: 220px;
  border-bottom: 1px solid white;
  margin: 6px 0px;
`;

export const WrapperRowItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;

export const PChargePoint = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  color: #ffb950;
  margin: 0px;
  width: 50%;
`;

export const WrapperColBtn = styled.div`
  width: 340px;
  height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
    margin-top: 25px;
  }
`;

export const WrapperRowBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 90px;
`;

export const WrapperRowBtn2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 90px;
  position: relative;
  top: -20px;
  /* top: 370px; */
`;

export const WrapperRowBtn3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 90px;
  position: relative;
  top: -40px;
  /* position: absolute;
  top: 450px; */
`;

export const BthHexa = styled.button`
  width: 80px;
  height: 44px;
  background: white;
  position: relative;
  border: 1px solid #dbdbdb;

  :before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 40px solid #dbdbdb;
    border-right: 39px solid transparent;
    border-bottom: 20px solid white;
  }

  :after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 20px solid white;
  }

  :hover {
    background-color: #ffb950;
  }
`;

export const BtnCharge = styled.button`
  font-family: 'Noto Sans';
  width: 100%;
  height: 54px;
  background: #3a3939;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  border: none;
  :hover {
    background: #ffb950;
  }
`;

/* prettier-ignore */
export const BtnHexa = styled.button`
  width: 80px;
  height: 89px;
  background-color: transparent;
  padding: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  background-image: url(${(props : IChargeStationStyle) => props.isClicked ? '/image/point_b.svg' : '/image/point_a.svg'});
  color: ${(props) => (props.isClicked ? 'white' : 'black')};

  :hover {
    background-image: url('/image/point_b.svg');
    color: white;
  }
`;

/* prettier-ignore */
export const BtnHexaCharge = styled.button`
  width: 80px;
  height: 89px;
  background-color:transparent;
  padding: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  background-image: url(${(props: IChargeStationStyle) => props.isSelect ? '/image/charge_b.svg' : '/image/charge_a.svg'});
  
  color: ${(props : IChargeStationStyle) => props.isSelect ? 'white' : 'black'};

`;

export const SpanChargeText = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  position: relative;
  left: -5px;
  top: -5px;
`;

export const Span100 = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: black;
  position: relative;
  left: -3px;
  top: -1px;
`;
