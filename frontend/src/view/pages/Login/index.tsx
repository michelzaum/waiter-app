import { AlertIcon } from '../../../assets/images/Icons/AlertIcon';
import { CloseEyeIcon } from '../../../assets/images/Icons/CloseEyeIcon';
import { OpenEyeIcon } from '../../../assets/images/Icons/OpenEyeIcon';
import { LoginContainer, Approach, Form, FormFieldGroup, LoginButton, ErrorMessageContainer } from './styles';
import { useLogin } from './useLogin';

export function Login() {
  const {
    isPasswordVisible,
    handlePasswordFieldType,
    passwordFieldType,
    register,
    handleSubmit,
    onSubmit,
    errors,
  } = useLogin();

  return (
    <LoginContainer>
      <Approach>
        <span>Bem vindo(a) ao</span>
        <h1>WAITER<span>APP</span></h1>
      </Approach>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldGroup>
          <label htmlFor="inputEmail">E-mail</label>
          <input
            id='inputEmail'
            type="text"
            placeholder='Seu e-mail de acesso'
            {...register('email')}
          />
          {errors.email && (
            <ErrorMessageContainer>
              <AlertIcon style={{ color: 'rgba(215, 48, 53, 1)' }} />
              <span>{errors.email.message}</span>
            </ErrorMessageContainer>
          )}
        </FormFieldGroup>
        <FormFieldGroup>
          <label htmlFor="inputPassword">Senha</label>
          <div>
            <input
              id='inputPassword'
              type={passwordFieldType}
              placeholder='Informe sua senha'
              {...register('password')}
            />
            <button type='button' onClick={handlePasswordFieldType}>
              {isPasswordVisible ? (
                  <CloseEyeIcon />
                ) : (
                  <OpenEyeIcon />
                )
              }
            </button>
          </div>
          {errors.password && (
            <ErrorMessageContainer>
              <AlertIcon style={{ color: 'rgba(215, 48, 53, 1)' }} />
              <span>{errors.password.message}</span>
            </ErrorMessageContainer>
          )}
        </FormFieldGroup>
        <LoginButton>Fazer Login</LoginButton>
      </Form>
    </LoginContainer>
  )
}
