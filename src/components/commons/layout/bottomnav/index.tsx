import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { accessTokenState, userInfoState } from '../../../../commons/store';
import { useRecoilState } from 'recoil';

interface IBottomNavProps {
  handdleNav: boolean;
}

export const WapperBottonNav = styled.div`
  width: 100%;
  height: auto;
  display: none;
  @media (max-width: 767px) {
    display: ${(props: IBottomNavProps) =>
      props.handdleNav ? 'none' : 'flex'};
  }
`;

export default function BottomNav() {
  const [value, setValue] = useState('Garden');
  const [isToken] = useRecoilState(accessTokenState);
  const [userInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const MOBIL_CHAT = ['/chat/[chatInfo]'];
  const isChatRoom = MOBIL_CHAT.includes(router.pathname);

  const useStyles = makeStyles(() => ({
    root: {
      color: '#3a3939',
      '&$selected': {
        color: '#ffb950',
      },
    },
    selected: {},
  }));
  const classes = useStyles();

  // eslint-disable-next-line no-undef
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onClickHome = () => {
    router.push('/garden');
  };

  const onClickCommunity = () => {
    router.push('/community');
  };

  const onClickChat = () => {
    router.push('/chat');
  };

  const onClickCharge = () => {
    if (!isToken) {
      alert('Please Login');
      router.push('/signin');
    } else router.push('/charge');
  };

  const onClickMoveMypage = () => {
    if (!isToken) {
      alert('Please Login');
      router.push('/signin');
    } else {
      router.push(`/profile/${userInfo.id}`);
    }
  };

  return (
    <WapperBottonNav handdleNav={isChatRoom}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 20 }}
        elevation={5}
      >
        <BottomNavigation
          sx={{ width: '100%', paddingLeft: 15, paddingRight: 15 }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            classes={classes}
            label='Garden'
            value='Garden'
            icon={<HomeIcon />}
            onClick={onClickHome}
          />
          <BottomNavigationAction
            classes={classes}
            label='Community'
            value='Community'
            icon={<LocalLibraryIcon />}
            onClick={onClickCommunity}
          />
          <BottomNavigationAction
            classes={classes}
            label='Chat'
            value='Chat'
            icon={<MarkChatUnreadIcon />}
            onClick={onClickChat}
          />
          <BottomNavigationAction
            classes={classes}
            label='Charge'
            value='Charge'
            icon={<StoreIcon />}
            onClick={onClickCharge}
          />
          <BottomNavigationAction
            classes={classes}
            label='My'
            value='My'
            icon={<AccountCircleIcon />}
            onClick={onClickMoveMypage}
          />
        </BottomNavigation>
      </Paper>
    </WapperBottonNav>
  );
}
