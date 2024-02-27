import { TouchableOpacity, View } from 'react-native';
import { Text } from '../Text';
import { Container, HeaderContainer, NotificationContainer, Content, OrderHeader, Table } from './styles';
import { Notification } from '../Icons/Notification';
import { HeaderProps } from './types';

export function Header({ selectedTable, onCancelOrder, navigationProps }: HeaderProps) {
  return (
    <Container>
      {!selectedTable && (
        <HeaderContainer>
          <View>
            <Text size={14} opacity={0.9}>Bem vindo(a) ao</Text>
            <Text size={24} weight='Bold'>
              WAITER
              <Text size={24}>APP</Text>
            </Text>
          </View>
          <NotificationContainer onPress={() => navigationProps.navigation.navigate('Notifications')}>
            <Notification />
          </NotificationContainer>
        </HeaderContainer>
      )}

      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight='Semibold'>Pedido</Text>
            <TouchableOpacity onPress={onCancelOrder}>
              <Text color='#D73035' size={14} weight='Semibold'>
                cancelar pedido
              </Text>
            </TouchableOpacity>
          </OrderHeader>
          <Table>
            <Text color='#666'>Mesa {selectedTable}</Text>
          </Table>
        </Content>
      )}
    </Container>
  )
};
