import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PASSWORD_FIELD_TYPE } from './model';

const loginFormSchema = z.object({
  email:
    z.string()
    .min(1, "E-mail é obrigatório")
    .max(40, "E-mail deve conter no máximo 40 caracteres"),
  password:
    z.string()
    .min(8, "Senha deve conter mais de 8 caracteres")
    .max(16, "Senha deve conter no máximo 16 caracteres"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export function useLogin() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordFieldType, setPasswordFieldType] = useState(PASSWORD_FIELD_TYPE.PASSWORD);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = () => {
    navigate('/');
  }

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
    isPasswordVisible,
    handlePasswordFieldType,
    passwordFieldType,
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
}
