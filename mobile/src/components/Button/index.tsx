import { Container } from './styles';
import { Text } from '../Text';
import { ActivityIndicator } from 'react-native';
import { ButtonProps } from './types';

export function Button({ children, onPress, disabled, loading }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight='Semibold' color='#FFF'>
          {children}
        </Text>
      )}
      {loading && (
        <ActivityIndicator color="#FFF" />
      )}
    </Container>
  )
};
