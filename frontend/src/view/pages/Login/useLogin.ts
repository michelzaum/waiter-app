import { useState } from 'react';
import { PASSWORD_FIELD_TYPE } from './model';

export function useLogin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordFieldType, setPasswordFieldType] = useState(PASSWORD_FIELD_TYPE.PASSWORD);

  const isErrorMessageVisible = false;

  function handlePasswordFieldType(): void {
    if (passwordFieldType === PASSWORD_FIELD_TYPE.PASSWORD) {
      setPasswordFieldType(PASSWORD_FIELD_TYPE.TEXT);
      setIsPasswordVisible(true);
    } else {
      setPasswordFieldType(PASSWORD_FIELD_TYPE.PASSWORD);
      setIsPasswordVisible(false);
    }
  }

  return {
    isErrorMessageVisible,
    isPasswordVisible,
    handlePasswordFieldType,
    passwordFieldType,
  };
}
