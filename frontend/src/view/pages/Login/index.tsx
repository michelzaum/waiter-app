import { AlertIcon } from '../../../assets/images/Icons/AlertIcon';
import { OpenEyeIcon } from '../../../assets/images/Icons/OpenEyeIcon';
import { LoginContainer, Approach, Form, FormFieldGroup, LoginButton, ErrorMessageContainer } from './styles';
import { useLogin } from './useLogin';

export function Login() {
  const { isErrorMessageVisible } = useLogin();

  return (
    <LoginContainer>
      <Approach>
        <span>Bem vindo(a) ao</span>
        <h1>WAITER<span>APP</span></h1>
      </Approach>
      <Form>
        <FormFieldGroup>
          <label htmlFor="inputEmail">E-mail</label>
          <input id='inputEmail' type="text" placeholder='Seu e-mail de acesso' />
        </FormFieldGroup>
        <FormFieldGroup>
          <label htmlFor="inputPassword">Senha</label>
          <div>
            <input id='inputPassword' type="password" placeholder='Informe sua senha' />
            <button>
              <OpenEyeIcon style={{ height: 14, width: 18 }} />
            </button>
          </div>
          <ErrorMessageContainer>
            {
              isErrorMessageVisible && (
                <>
                  <AlertIcon style={{ color: 'rgba(215, 48, 53, 1)' }} />
                  <span>Usuário ou senha inválidos</span>
                </>
              )
            }
          </ErrorMessageContainer>
        </FormFieldGroup>
        <LoginButton>Fazer Login</LoginButton>
      </Form>
    </LoginContainer>
  )
}
