import { useState } from "react";

export function useHeaderController() {
  const [isRestartDayModalOpen, setIsRestartDayModalOpen] = useState(false);

  function openRestartDayModal() {
    setIsRestartDayModalOpen(true);
  }

  function closeRestartDayModal() {
    setIsRestartDayModalOpen(false);
  }

  return {
    isRestartDayModalOpen,
    openRestartDayModal,
    closeRestartDayModal,
  }
}
