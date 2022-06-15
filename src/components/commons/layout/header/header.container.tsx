import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../../commons/store';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_USER_LOGGED_IN, LOG_OUT } from '../../queries';
import React, { useEffect, useState } from 'react';
import LayoutHeaderUI from './header.presenter';

export default function HeaderContainer() {
  const router = useRouter();
  const [isToken, setIsToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [userLogOut] = useMutation(LOG_OUT);

  // 채팅방에서 헤더 비노출 처리를 위한 코드
  const HIDDEN_HEADER = ['/chat/[chatInfo]'];
  const isHiddenHeader = HIDDEN_HEADER.includes(router.pathname);
  const [currentPage, setCurrentPage] = useState({
    garden: false,
    community: false,
    chat: false,
    charge: false,
    profile: false,
  });

  useEffect(() => {
    setUserInfo(data?.fetchUser);
    setCurrentPage({
      garden: false,
      community: false,
      chat: false,
      charge: false,
      profile: false,
      [router.asPath.split('/')[1]]: true,
    });
  }, [data, router]);

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

  const onClickMoveMypage = () => {
    if (!isToken) {
      alert('Please Login');
      router.push('/signin');
    } else {
      router.push(`/profile/${userInfo.id}`);
    }
  };

  return (
    <LayoutHeaderUI
      isHiddenHeader={isHiddenHeader}
      onClickLogo={onClickLogo}
      onClickGarden={onClickGarden}
      onClickCommunity={onClickCommunity}
      onClickChat={onClickChat}
      onClickCharge={onClickCharge}
      onClickMoveMypage={onClickMoveMypage}
      isToken={isToken}
      data={data}
      onClickLogOut={onClickLogOut}
      onClickSignUp={onClickSignUp}
      onClickSignIn={onClickSignIn}
      currentPage={currentPage}
    />
  );
}
