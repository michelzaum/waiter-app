import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container }  from './styles';

const orders: Order[] = [
  {
    _id: "123",
    table: "2",
    status: "WAITING",
    products: [
      {
        _id: "456",
        quantity: 2,
        product: [
          {
            name: "Pizza mussarela",
            imagePath: "Image path here",
            price: 40.00
          }
        ]
      }
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em produção"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pront!"
        orders={[]}
      />
    </Container>
  )
}
