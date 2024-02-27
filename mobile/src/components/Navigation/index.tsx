import { useState } from 'react';
import { Text } from '../Text';
import { NavigationContainer, ActiveIndicator, ItemContainer } from './styles';
import { HomeIcon } from '../Icons/HomeIcon';
import { OrdersIcon } from '../Icons/OrdersIcon';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { NavigationItemsProps, NavigationProps } from './types';
import { screenNames } from '../../routes';

function NavigationItem({ onPress, label, Icon, isActive }: NavigationItemsProps) {
  return (
    <ItemContainer onPress={onPress}>
      {Icon}
      <Text color={isActive ? '#D73035' : ''}>{ label }</Text>
      <ActiveIndicator isActive={isActive} />
    </ItemContainer>
  )
};

export function Navigation({ navigationProps }: NavigationProps) {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState<screenNames>('Home');

  const isHomeSelected = selectedNavigationItem === 'Home';
  const isOrdersSelected = selectedNavigationItem === 'Orders';
  const isProfileSelected = selectedNavigationItem === 'Profile';

  function handleSelectedNavigationItem(navigationItem: screenNames) {
    navigationProps.navigation.navigate(navigationItem)
    if (navigationItem === selectedNavigationItem) {
      return;
    }
    setSelectedNavigationItem(navigationItem);
  }

  return (
    <NavigationContainer>
      <NavigationItem
        onPress={() => handleSelectedNavigationItem('Home')}
        Icon={<HomeIcon color={isHomeSelected ? '#D73035' : ''} />}
        label='Home'
        isActive={isHomeSelected}
      />
      <NavigationItem
        onPress={() => handleSelectedNavigationItem('Orders')}
        Icon={<OrdersIcon color={isOrdersSelected ? '#D73035' : ''} />}
        label='Pedidos'
        isActive={isOrdersSelected}
      />
      <NavigationItem
        onPress={() => handleSelectedNavigationItem('Profile')}
        Icon={<ProfileIcon color={isProfileSelected ? '#D73035' : ''} />}
        label='Meu Perfil'
        isActive={isProfileSelected}
      />
    </NavigationContainer>
  )
}
