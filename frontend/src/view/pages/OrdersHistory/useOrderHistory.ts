import { useState } from "react";
import { Order } from "./types";

export function useOrderHistory() {
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);
  const [orderData, setOrderData] = useState({} as Order);

  function openOrderDetailsModal(data: any): void {
    setIsOrderDetailsModalOpen(true);
    setOrderData(data);
  }

  function closeOrderDetailsModal(): void {
    setIsOrderDetailsModalOpen(false);
  }

  function deleteOrder(orderId: string): void {
    console.log(`delete order ${orderId}?`)
  }

  function handleDeleteOrderRegister(onDeleteOrder: (orderId: string) => void): void {
    onDeleteOrder(orderData.id)
  }

  return {
    orderData,
    isOrderDetailsModalOpen,
    openOrderDetailsModal,
    closeOrderDetailsModal,
    handleDeleteOrderRegister,
    deleteOrder,
  }
}
