import { Order } from '../../../types/Order';
import { Board, OrdersContainer } from './styles';
import { OrderModal } from '../OrderModal';
import { useOrdersBoard } from './useOrdersBoard';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardProps) {
  const {
    isModalVisible,
    isLoading,
    handleOpenModal,
    handleCloseModal,
    handleChangeOrderStatus,
    handleCancelOrder,
    selectedOrder,
  } = useOrdersBoard();

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={() => handleCancelOrder(onCancelOrder)}
        isLoading={isLoading}
        onChangeOrderStatus={() => handleChangeOrderStatus(onChangeOrderStatus)}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => {
            return (
              <button key={order._id} type='button' onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            )
          })}
        </OrdersContainer>
      )}
    </Board>
  )
}
