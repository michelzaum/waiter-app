import { useState } from "react";
import { DeletedUser } from "./types";

export function useUsers() {
  const [isDeleteUserModalVisible, setIsDeleteUserModalVisible] = useState(false);
  const [deletedUserData, setDeletedUserData] = useState<DeletedUser>({} as DeletedUser);

  function handleOpenDeleteUserModal(userData: DeletedUser): void {
    setDeletedUserData(userData);
    setIsDeleteUserModalVisible(true);
  }

  function handleCloseDeleteUserModal(): void {
    setIsDeleteUserModalVisible(false);
  }

  function onDeleteUser(): void {
    console.log(`Delete ${deletedUserData.name}`)
  }

  return {
    handleOpenDeleteUserModal,
    handleCloseDeleteUserModal,
    isDeleteUserModalVisible,
    deletedUserData,
    onDeleteUser,
  }
}
