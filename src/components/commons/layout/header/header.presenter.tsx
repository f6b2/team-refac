import * as Header from './header.style';
import React from 'react';
import { IHeaderUI } from './header.type';

export default function LayoutHeaderUI(props: IHeaderUI) {
  return (
    <Header.Wrapper isHidden={props.isHiddenHeader}>
      <Header.WrapperHeader>
        <Header.WrapperLogo id={'garden'} onClick={props.onClickLogo}>
          <Header.PLogoLang>Lang</Header.PLogoLang>
          <Header.PLogoB>B</Header.PLogoB>
        </Header.WrapperLogo>
        <Header.WrapperHeaderMenu>
          <Header.BtnHeader id={'garden'} onClick={props.onClickGarden}>
            Garden
          </Header.BtnHeader>
          <Header.BtnHeader id={'community'} onClick={props.onClickCommunity}>
            Community
          </Header.BtnHeader>
          <Header.BtnHeader id={'chat'} onClick={props.onClickChat}>
            Chat
          </Header.BtnHeader>
          <Header.BtnHeader id={'charge'} onClick={props.onClickCharge}>
            Charge
          </Header.BtnHeader>
          <Header.BtnHeader id={'mypage'} onClick={props.onClickMoveMypage}>
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
              <Header.SpanLogin onClick={props.onClickSignUp}>
                SignUp
              </Header.SpanLogin>
              <Header.SpanLogin onClick={props.onClickSignIn}>
                Login
              </Header.SpanLogin>
            </>
          )}
        </Header.WrapperHeaderInfo>
      </Header.WrapperHeader>
    </Header.Wrapper>
  );
}
