import { useState } from "react";

export function useModal() {
  const [isDeleteMessageModalOpened, setIsDeleteMessageModalOpenedd] = useState(false);
  const [isEditModalOpened, setIsEditModalOpenedd] = useState(false);

  return {
    isDeleteMessageModalOpened,
    isEditModalOpened,
    openDeleteMessageModal: () => setIsDeleteMessageModalOpenedd(true),
    closeDeleteMessageModal: () => setIsDeleteMessageModalOpenedd(false),
    openEditModal: () => setIsEditModalOpenedd(true),
    closeEditModal: () => setIsEditModalOpenedd(false),
  };
}