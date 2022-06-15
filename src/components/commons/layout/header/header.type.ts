export interface IHeaderUI {
  isHiddenHeader: boolean;
  onClickLogo: () => void;
  onClickGarden: () => void;
  onClickCommunity: () => void;
  onClickChat: () => void;
  onClickCharge: () => void;
  onClickMoveMypage: () => void;
  isToken: string;
  data: any;
  onClickLogOut: () => void;
  onClickSignUp: () => void;
  onClickSignIn: () => void;
  currentPage: any;
}
