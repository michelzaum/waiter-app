import { ReactNode, useState } from 'react';
import { Text } from '../Text';
import { NavigationContainer, ActiveIndicator, ItemContainer } from './styles';
import { HomeIcon } from '../Icons/HomeIcon';
import { OrdersIcon } from '../Icons/OrdersIcon';
import { ProfileIcon } from '../Icons/ProfileIcon';

interface NavigationItemsProps {
  label: string;
  Icon: ReactNode;
  onPress: () => void;
  isActive: boolean;
}

function NavigationItem({ onPress, label, Icon, isActive }: NavigationItemsProps) {
  return (
    <ItemContainer onPress={onPress}>
      {Icon}
      <Text color={isActive ? '#D73035' : ''}>{ label }</Text>
      <ActiveIndicator isActive={isActive} />
    </ItemContainer>
  )
};

export function Navigation() {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState('');

  const isHomeSelected = selectedNavigationItem === 'home';
  const isOrdersSelected = selectedNavigationItem === 'orders';
  const isProfileSelected = selectedNavigationItem === 'profile';

  function handleSelectedNavigationItem(navigationItem: string) {
    if (navigationItem === selectedNavigationItem) {
      return;
    }
    setSelectedNavigationItem(navigationItem);
  }

  return (
    <NavigationContainer>
      <NavigationItem
        onPress={() => handleSelectedNavigationItem('home')}
        Icon={<HomeIcon color={isHomeSelected ? '#D73035' : ''} />}
        label='Home'
        isActive={isHomeSelected}
      />
      <NavigationItem
        onPress={() => handleSelectedNavigationItem('orders')}
        Icon={<OrdersIcon color={isOrdersSelected ? '#D73035' : ''} />}
        label='Pedidos'
        isActive={isOrdersSelected}
      />
      <NavigationItem
        onPress={() => handleSelectedNavigationItem('profile')}
        Icon={<ProfileIcon color={isProfileSelected ? '#D73035' : ''} />}
        label='Meu Perfil'
        isActive={isProfileSelected}
      />
    </NavigationContainer>
  )
}
