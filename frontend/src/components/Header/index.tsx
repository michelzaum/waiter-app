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
import homeLogo from '../../assets/images/home-icon.svg';
import restartIcon from '../../assets/images/restart-icon.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <PageDetails>
          <Title>
            <img src={homeLogo} alt="Home icon" height={32} width={32}/>
            <PageName>Home</PageName>
          </Title>
          <PageDescription>Acompanhe os pedidos dos clientes</PageDescription>
        </PageDetails>
        <RestartDay>
          <img src={restartIcon} alt="Restart the day" />
          <RestartDayText>Reiniciar o dia</RestartDayText>
        </RestartDay>
      </Content>
    </Container>
  )
}
