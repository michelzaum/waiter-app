import { useState } from 'react';
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
import { RestartDayModal } from '../RestartDayModal';

export function Header() {
  const [isRestartDayModalOpen, setIsRestartDayModalOpen] = useState(false);

  function openRestartDayModal() {
    setIsRestartDayModalOpen(true);
  }

  function closeRestartDayModal() {
    setIsRestartDayModalOpen(false);
  }

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
        <RestartDay onClick={openRestartDayModal}>
          {<RestartIcon style={{ color: '#D73035' }} />}
          <RestartDayText>Reiniciar o dia</RestartDayText>
        </RestartDay>
      </Content>
      <RestartDayModal
        isVisible={isRestartDayModalOpen}
        onClose={closeRestartDayModal}
      />
    </Container>
  )
}
