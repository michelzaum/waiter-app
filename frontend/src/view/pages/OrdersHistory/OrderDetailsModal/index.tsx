import { CloseIcon } from '../../../../assets/images/Icons/CloseIcon';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { Order } from '../types';
import {
  OrderDetails,
  OrderDetailsModalBody,
  OrderDetailsModalContent,
  OrderDetailsModalHeader,
  OrderDetailsModalOverlay,
  DeleteOrderRegister,
} from './styles';

interface OrderDetailsModalProps {
  visible: boolean;
  data: Order;
  onClose(): void;
  onDelete: () => void;
}

export function OrderDetailsModal({ visible, onClose, onDelete, data }: OrderDetailsModalProps) {
  if (!visible) {
    return null;
  }

  return (
    <OrderDetailsModalOverlay>
      <OrderDetailsModalBody>
        <OrderDetailsModalHeader>
          <span>{`Mesa ${data.table}`}</span>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </OrderDetailsModalHeader>
        <OrderDetailsModalContent>
          <div className='order-date'>
            <span>Data do pedido</span>
            <span>{data.date}</span>
          </div>
          <OrderDetails>
            <span>Itens</span>
            <div className="order-items">
              {
                data.products.map((item) => (
                  <div className="item" key={item.id}>
                    <img
                     width='56'
                     height='36'
                     src={`http://localhost:3001/uploads/${item.imagePath}`}
                    />
                    <span className="quantity">{item.quantity}x</span>
                    <div className="product-details">
                      <strong>{item.name}</strong>
                      <span>{formatCurrency(item.price)}</span>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="total">
              <span>total</span>
              <strong>
                {formatCurrency(data.products.reduce((total, product) => {
                  return total + product.price;
                }, 0))}
              </strong>
            </div>
            <DeleteOrderRegister onClick={onDelete}>
              Excluir registro
            </DeleteOrderRegister>
          </OrderDetails>
        </OrderDetailsModalContent>
      </OrderDetailsModalBody>
    </OrderDetailsModalOverlay>
  )
}
