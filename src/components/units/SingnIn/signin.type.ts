import { FormEvent } from 'react';
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form';

export interface ISingninPresenter {
  onClickSignin: (event: FormEvent<HTMLFormElement>) => void;
  onClickMoveSignUp: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: Function;
  formState: FormState<FieldValues>;
}
