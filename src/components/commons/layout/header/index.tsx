import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../../commons/store';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN, LOG_OUT } from '../../queries';
// import { CgBee } from 'react-icons/cg';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import React, { useEffect, useState } from 'react';
// import { BsFlower1 } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

interface IHeaderStyle {
  isOpen: boolean;
}

const Wrapper = styled.div`
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

const WrapperHeader = styled.div`
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

const WrapperLogo = styled.div`
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

const PLogoLang = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #ffffff;
`;

const PLogoB = styled.span`
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #ffb950;
`;

const WrapperHeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0% 10%;

  @media (max-width: 767px) {
    flex-direction: column;
    display: ${(props: IHeaderStyle) => (props.isOpen ? 'flex' : 'none')};
  }
`;

const BtnHeader = styled.button`
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

const WrapperHeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 10%;
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

const SpanPoint = styled.span`
  height: auto;
  font-family: 'Istok Web';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;

const SpanLogin = styled.span`
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

const WrapperPoint = styled.div`
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

const IconToggle = styled(GiHamburgerMenu)`
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

export default function LayoutHeader() {
  const router = useRouter();
  const [isToken, setIsToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [userLogOut] = useMutation(LOG_OUT);
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setUserInfo(data?.fetchUser);
  }, [data]);

  const onClickLogo = () => {
    router.push('/garden');
  };

  const onClickChat = () => {
    router.push('/chat');
  };

  const onClickGarden = () => {
    router.push('/garden');
  };

  const onClickCommunity = () => {
    router.push('/community');
  };

  const onClickSignIn = () => {
    router.push('/signin');
  };

  const onClickSignUp = () => {
    router.push('/signup');
  };

  const onClickCharge = () => {
    if (!isToken) {
      alert('Please Login');
      router.push('/signin');
    } else router.push('/charge');
  };

  // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const onClickLogOut = async () => {
    try {
      await userLogOut();
      // handleClose();
      setIsToken('');
      router.push('/garden');
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickOpenMenu = () => {
    console.log(openMenu);
    setOpenMenu((prev) => !prev);
  };

  const onClickMoveMypage = () => {
    if (!isToken) {
      alert('Please Login');
      router.push('/signin');
    } else {
      router.push(`/profile/${userInfo.id}`);
    }

    // handleClose();
  };

  return (
    <Wrapper>
      <WrapperHeader>
        <WrapperLogo onClick={onClickLogo}>
          <PLogoLang>Lang</PLogoLang>
          <PLogoB>B</PLogoB>
        </WrapperLogo>
        <WrapperHeaderMenu isOpen={openMenu}>
          <BtnHeader onClick={onClickGarden}>Garden</BtnHeader>
          <BtnHeader onClick={onClickCommunity}>Community</BtnHeader>
          <BtnHeader onClick={onClickChat}>Chat</BtnHeader>
          <BtnHeader onClick={onClickCharge}>Charge</BtnHeader>
          <BtnHeader onClick={onClickMoveMypage}>MyPage</BtnHeader>
        </WrapperHeaderMenu>
        <WrapperHeaderInfo isOpen={openMenu}>
          {/* {isToken ? (
            <>
              <MyBee
                style={{ margin: '5' }}
                // @ts-ignore
                onClick={handleMenu}
              />
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem style={{ fontSize: '12px' }} onClick={onClickLogOut}>
                  Log Out
                </MenuItem>
                <MenuItem
                  style={{ fontSize: '12px' }}
                  onClick={onClickMoveMypage}
                >
                  MyPage
                </MenuItem>
              </Menu>
            </>
          ) : (
            <></>
          )} */}

          {isToken ? (
            <>
              <WrapperPoint>
                {/* <MyPoint style={{ margin: '10' }} onClick={onClickCharge} /> */}

                <SpanPoint>
                  {data?.fetchUser.points.toLocaleString('ko-KR')} P
                </SpanPoint>
              </WrapperPoint>
              <BtnHeader onClick={onClickLogOut}>LogOut</BtnHeader>
            </>
          ) : (
            <>
              <SpanLogin onClick={onClickSignUp}>SignUp</SpanLogin>
              <SpanLogin onClick={onClickSignIn}>Login</SpanLogin>
            </>
          )}
        </WrapperHeaderInfo>
        <IconToggle onClick={onClickOpenMenu} />
      </WrapperHeader>
    </Wrapper>
  );
}
