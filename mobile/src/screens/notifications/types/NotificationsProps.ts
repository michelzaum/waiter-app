import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, screenNames } from "../../../routes";
import { INotificationItem } from "./Notification";

export interface INotificationItemsProps {
  notifications: INotificationItem[];
};

export type NavigationProps = {
  navigationProps?: NativeStackScreenProps<RootStackParamList, screenNames>;
};

export type NotificationProps = {
  data?: INotificationItem[];
};

// TODO: Remove after API integration
export const notificationsMock: INotificationItem[] = [
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
