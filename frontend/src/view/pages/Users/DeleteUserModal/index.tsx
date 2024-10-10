import { CloseIcon } from "../../../../assets/images/Icons/CloseIcon";
import { DeletedUser } from "../types";
import {
  DeleteUserModalContent,
  DeleteUserModalHeader,
  DelteUserModalBody,
  DelteUserModalOverlay,
  FormFieldGroup,
} from "./styles";

interface DeleteUserModalProps {
  isVisible: boolean;
  onClose(): void;
  onDeleteUser(): void;
  data: DeletedUser;
}

export function DeleteUserModal({ isVisible, onClose, data, onDeleteUser }: DeleteUserModalProps) {
  if (!isVisible) {
    return;
  }

  return (
    <DelteUserModalOverlay>
      <DelteUserModalBody>
        <DeleteUserModalHeader>
          <span>Excluir usuário</span>
            <button onClick={onClose}>
              <CloseIcon />
            </button>
        </DeleteUserModalHeader>
        <DeleteUserModalContent>
          <span>Tem certeza que deseja excluir o usuário?</span>
          <FormFieldGroup>
            <label>Nome</label>
            <input type="text" value={data.name} disabled />
          </FormFieldGroup>
          <FormFieldGroup>
            <label>E-mail</label>
            <input type="text" value={data.email} disabled />
          </FormFieldGroup>
          <div className="actions-container">
            <button className='secondary' onClick={onClose}>
              Manter usuário
            </button>
            <button onClick={onDeleteUser}>
              Excluir usuário
            </button>
          </div>
        </DeleteUserModalContent>
      </DelteUserModalBody>
    </DelteUserModalOverlay>
  )
}
