import { EditIcon } from '../../../assets/images/Icons/EditIcon';
import { TrashIcon } from '../../../assets/images/Icons/TrashIcon';
import { DeleteUserModal } from './DeleteUserModal';
import {
  ActionsContainer,
  Container,
  DataCount,
  DataCountContainer,
  RightAction,
  Table,
  TableData,
  TableHeader,
  TableRowData,
  TableRowHeader,
  Title,
  TitleContainer,
} from './styles';
import { usersColumns, usersMockData } from './types';
import { useUsers } from './useUsers';

export function Users() {
  const {
    handleOpenDeleteUserModal,
    handleCloseDeleteUserModal,
    isDeleteUserModalVisible,
    deletedUserData,
    onDeleteUser,
  } = useUsers();

  return (
    <Container>
      <TitleContainer>
        <DataCountContainer>
          <Title>Usuários</Title>
          <DataCount>{usersMockData.length}</DataCount>
        </DataCountContainer>
        <RightAction>
          Novo usuário
        </RightAction>
      </TitleContainer>
      <Table cellSpacing={0}>
        <thead>
          <TableRowHeader>
            {usersColumns.map(column => (
              <TableHeader key={column}>
                {column}
              </TableHeader>
            ))}
          </TableRowHeader>
        </thead>
        <tbody>
          {usersMockData.map(tableData => (
            <TableRowData key={tableData.id}>
              <TableData>{tableData.name}</TableData>
              <TableData>{tableData.email}</TableData>
              <TableData>{tableData.role}</TableData>
              <TableData>
                <ActionsContainer>
                  <button type='button'>
                    <EditIcon />
                  </button>
                  <button type='button' onClick={() => handleOpenDeleteUserModal(tableData)}>
                    <TrashIcon style={{ color: '#D73035' }} />
                  </button>
                </ActionsContainer>
              </TableData>
            </TableRowData>
          ))}
        </tbody>
      </Table>
      <DeleteUserModal
        isVisible={isDeleteUserModalVisible}
        onClose={handleCloseDeleteUserModal}
        data={deletedUserData}
        onDeleteUser={onDeleteUser}
      />
    </Container>
  )
}
