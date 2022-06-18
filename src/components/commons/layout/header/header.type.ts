export interface IHeaderUI {
  isHiddenHeader: boolean;
  onClickMoveMypage: () => void;
  isToken: string;
  data: any;
  onClickLogOut: () => void;
  currentPage: any;
  onClickRoute: (event: { currentTarget: { id: any } }) => void;
}
