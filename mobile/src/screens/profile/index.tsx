import { Button } from "../../components/Button";
import { Text } from "../../components/Text";

import { ProfileContainer, ProfileHeader, ProfileFormContainer, FormField, Input, SubmitContainer } from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <Text size={24} weight="Semibold" color="#333333">Meu perfil</Text>
      </ProfileHeader>
      <ProfileFormContainer>
        <FormField>
          <Text size={14} color="#666666">Nome</Text>
          <Input value="Joãozinho" editable={false} />
        </FormField>
        <FormField>
          <Text size={14} color="#666666">E-mail</Text>
          <Input value="name@gmail.com" editable={false} />
        </FormField>
        <FormField>
          <Text size={14} color="#666666">Senha</Text>
          <Input value="*****" editable={false} />
        </FormField>
        <FormField>
          <Text size={14} color="#666666">Confirmação da senha</Text>
          <Input value="*****" editable={false} />
        </FormField>
      </ProfileFormContainer>
      <SubmitContainer>
        <Button onPress={() => {}} disabled>
          Salvar alterações
        </Button>
      </SubmitContainer>
    </ProfileContainer>
  )
}
