import { Modal } from 'react-native';
import { Container, OkButton } from './styles';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal visible={visible} animationType='fade'>
      <Container>
        <CheckCircle />
        <Text size={20} weight='Semibold' color='#FFF' style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>
        <Text color='#FFF' opacity={0.9} style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>
        <OkButton onPress={onOk}>
          <Text color='#D73035' weight='Semibold'>OK</Text>
        </OkButton>
      </Container>
    </Modal>
  )
}
