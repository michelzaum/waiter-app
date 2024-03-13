import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './Main';
import { Profile } from './screens/profile';
import { Notifications } from './screens/notifications';
import { Orders } from './screens/orders';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Notifications: undefined;
  Orders: undefined;
};

export type screenNames = 'Profile' | 'Home' | 'Notifications' | 'Orders';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Main} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Notifications' component={Notifications} />
        <Stack.Screen name='Orders' component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
