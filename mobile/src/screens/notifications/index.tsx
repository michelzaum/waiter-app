import { Text } from "../../components/Text";
import { Arrow } from "../../components/Icons/Arrow";
import { Empty } from "../../components/Icons/Empty";
import { NotificationItem } from "./notificationItem";
import { INotificationItem } from "./types/Notification";
import { Container, Header, EmptyStateContainer } from './styles';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, screenNames } from "../../routes";
import { TouchableOpacity } from "react-native";

const notificationsMock: INotificationItem[] = [
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

type NavigationProps = NativeStackScreenProps<RootStackParamList, screenNames>

export function Notifications(navigationProps: NavigationProps) {
  return (
    <Container>
      <Header>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}
          onPress={() => navigationProps.navigation.navigate('Home')}
        >
          <Arrow />
          <Text size={24} weight="Semibold">Notifications</Text>
        </TouchableOpacity>
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
