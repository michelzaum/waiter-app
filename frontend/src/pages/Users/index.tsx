import {
  Container,
  Title,
  RightAction,
  DataCount,
  TitleContainer,
  ProductsCountContainer,
  Table,
  TableHeader,
  TableData,
  TableRowHeader,
  TableRowData,
} from './styles';

const usersColumns = [
  'Nome', 'E-mail', 'Cargo', 'Ações',
];

const usersMockData = [
  {
    id: 1,
    name: 'Fulano de Tal',
    email: 'fulano@gmail.com',
    role: 'Garçom',
    actions: 'ver/excluir',
  },
  {
    id: 2,
    name: 'Fulano de Tal',
    email: 'fulano@gmail.com',
    role: 'Garçom',
    actions: 'ver/excluir',
  },
];

export function Users() {
  return (
    <Container>
      <TitleContainer>
        <ProductsCountContainer>
          <Title>Usuários</Title>
          <DataCount>{usersMockData.length}</DataCount>
        </ProductsCountContainer>
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
              <TableData>{tableData.actions}</TableData>
            </TableRowData>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
