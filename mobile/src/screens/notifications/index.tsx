import { Text } from "../../components/Text";
import { Arrow } from "../../components/Icons/Arrow";
import { Empty } from "../../components/Icons/Empty";
import { NotificationItem } from "./notificationItem";
import { INotification } from "./types/Notification";
import { Container, Header, EmptyStateContainer } from './styles';

const notificationsMock: INotification[] = [
  {
    id: '1',
    icon: '👨‍🍳️',
    title: 'Mesa 2',
    description: 'Entrou em produção',
    time: 'Há 5 minutos',
    isRead: false,
  },
  {
    id: '2',
    icon: '👨‍🍳️',
    title: 'Mesa 3',
    description: 'Entrou em produção',
    time: 'Há 4 minutos',
    isRead: true,
  }
];

export function Notifications() {
  return (
    <Container>
      <Header>
        <Arrow />
        <Text size={24} weight="Semibold">Notifications</Text>
      </Header>
      {
        notificationsMock.length > 0
        ? (
          <NotificationItem notifications={notificationsMock} />
        ) : (
          <EmptyStateContainer>
            <Empty />
            <Text style={{ maxWidth: 280, textAlign: "center", lineHeight: 24 }}>
              Você não possui nenhuma notificação no momento.
            </Text>
          </EmptyStateContainer>
        )
      }
    </Container>
  )
}
