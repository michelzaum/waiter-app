import { FlatList, View } from 'react-native';
import { Text } from '../../../components/Text';
import { INotificationItemsProps } from '../types/NotificationsProps';
import {
  NotificationItemContainer,
  NotificationItemContent,
  ReadIndicator,
  NotificationItemDetalis
} from './styles';

export function NotificationItem({ notifications }: INotificationItemsProps) {
  return (
    <FlatList
      data={notifications}
      keyExtractor={notification => notification.id}
      contentContainerStyle={{ marginTop: 24, gap: 8 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: notification }) => (
        <NotificationItemContainer isRead={notification.isRead}>
          <NotificationItemContent>
            <View>
              <Text>{notification.icon}</Text>
            </View>
            <View>
              <Text weight='Semibold' size={14}>{notification.title}</Text>
              <Text color='#666666' size={12} weight='Regular' style={{ marginTop: 4 }}>
                {notification.description}
              </Text>
            </View>
          </NotificationItemContent>
          <NotificationItemDetalis>
            <Text color='#666666' size={12} weight='Regular'>
              {notification.time}
            </Text>
            {!notification.isRead && <ReadIndicator />}
          </NotificationItemDetalis>
        </NotificationItemContainer>
      )}
    />
  );
}
