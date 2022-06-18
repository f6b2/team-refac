import * as Header from './header.style';
import React from 'react';
import { IHeaderUI } from './header.type';

export default function LayoutHeaderUI(props: IHeaderUI) {
  return (
    <Header.Wrapper isHidden={props.isHiddenHeader}>
      <Header.WrapperHeader>
        <Header.WrapperLogo id={'garden'} onClick={props.onClickRoute}>
          <Header.PLogoLang>Lang</Header.PLogoLang>
          <Header.PLogoB>B</Header.PLogoB>
        </Header.WrapperLogo>
        <Header.WrapperHeaderMenu>
          <Header.BtnHeader
            id={'garden'}
            onClick={props.onClickRoute}
            currentPage={props.currentPage.garden}
          >
            Garden
          </Header.BtnHeader>
          <Header.BtnHeader
            id={'community'}
            onClick={props.onClickRoute}
            currentPage={props.currentPage.community}
          >
            Community
          </Header.BtnHeader>
          <Header.BtnHeader
            id={'chat'}
            onClick={props.onClickRoute}
            currentPage={props.currentPage.chat}
          >
            Chat
          </Header.BtnHeader>
          <Header.BtnHeader
            id={'charge'}
            onClick={props.onClickRoute}
            currentPage={props.currentPage.charge}
          >
            Charge
          </Header.BtnHeader>
          <Header.BtnHeader
            id={'mypage'}
            onClick={props.onClickMoveMypage}
            currentPage={props.currentPage.profile}
          >
            MyPage
          </Header.BtnHeader>
        </Header.WrapperHeaderMenu>
        <Header.WrapperHeaderInfo>
          {props.isToken ? (
            <>
              <Header.WrapperPoint>
                <Header.SpanPoint>
                  {props.data?.fetchUser.points.toLocaleString('ko-KR')}
                </Header.SpanPoint>
                <Header.SpanP>P</Header.SpanP>
              </Header.WrapperPoint>
              <Header.BtnHeader onClick={props.onClickLogOut}>
                LogOut
              </Header.BtnHeader>
            </>
          ) : (
            <>
              <Header.SpanLogin id={'signup'} onClick={props.onClickRoute}>
                SignUp
              </Header.SpanLogin>
              <Header.SpanLogin id={'signin'} onClick={props.onClickRoute}>
                Login
              </Header.SpanLogin>
            </>
          )}
        </Header.WrapperHeaderInfo>
      </Header.WrapperHeader>
    </Header.Wrapper>
  );
}
