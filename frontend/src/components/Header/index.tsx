import {
  Container,
  Content,
  PageDetails,
  PageName,
  PageDescription,
  Title,
  RestartDay,
  RestartDayText,
} from './styles';
import { HomeIcon } from '../../assets/images/Icons/HomeIcon';
import { RestartIcon } from '../../assets/images/Icons/RestartIcon';

export function Header() {
  return (
    <Container>
      <Content>
        <PageDetails>
          <Title>
            {<HomeIcon style={{
              height: 32,
              width: 32
            }} />}
            <PageName>Home</PageName>
          </Title>
          <PageDescription>Acompanhe os pedidos dos clientes</PageDescription>
        </PageDetails>
        <RestartDay>
          {<RestartIcon />}
          <RestartDayText>Reiniciar o dia</RestartDayText>
        </RestartDay>
      </Content>
    </Container>
  )
}
