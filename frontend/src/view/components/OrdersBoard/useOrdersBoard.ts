import { useState } from "react";
import { Order } from "../../../types/Order";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";

export function useOrdersBoard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus(onChangeOrderStatus: (orderId: string, status: Order['status']) => void) {
    setIsLoading(true);

    const newStatus = selectedOrder?.status === 'WAITING'
    ? 'IN_PRODUCTION'
    : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, {
      status: newStatus,
    });

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);
    onChangeOrderStatus(selectedOrder!._id, newStatus);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder(onCancelOrder: (orderId: string) => void) {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return {
    selectedOrder,
    isModalVisible,
    isLoading,
    handleOpenModal,
    handleCloseModal,
    handleChangeOrderStatus,
    handleCancelOrder,
  }
}
