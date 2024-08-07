import { createPortal } from 'react-dom';
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
import { HomeIcon } from '../../../assets/images/Icons/HomeIcon';
import { RestartIcon } from '../../../assets/images/Icons/RestartIcon';
import { RestartDayModal } from '../RestartDayModal';
import { useHeaderController } from './useHeaderController';

export function Header() {
  const { isRestartDayModalOpen, openRestartDayModal, closeRestartDayModal } = useHeaderController();

  return (
    <Container>
      <Content>
        <PageDetails>
          <Title>
            <HomeIcon style={{ height: 32, width: 32 }} />
            <PageName>Home</PageName>
          </Title>
          <PageDescription>Acompanhe os pedidos dos clientes</PageDescription>
        </PageDetails>
        <RestartDay onClick={openRestartDayModal}>
          {<RestartIcon style={{ color: '#D73035' }} />}
          <RestartDayText>Reiniciar o dia</RestartDayText>
        </RestartDay>
      </Content>
      {
        createPortal(
          <RestartDayModal
            isVisible={isRestartDayModalOpen}
            onClose={closeRestartDayModal}
          />,
          document.getElementById('restart-day-root') ?? document.body
        )
      }
    </Container>
  )
}
