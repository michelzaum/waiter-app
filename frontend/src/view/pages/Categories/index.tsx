import {
  Container,
  Title,
  RightAction,
  DataCount,
  TitleContainer,
  DataCountContainer,
  Table,
  TableHeader,
  TableData,
  TableRowHeader,
  TableRowData,
} from './styles';

const categoriesColumns = [
  'Emoji', 'Nome', 'Ações',
];

const categoriesMockData = [
  {
    id: 1,
    emoji: '🍕️',
    name: 'Pizza',
    actions: 'ver/excluir',
  },
  {
    id: 2,
    emoji: '🍔️',
    name: 'Lanches',
    actions: 'ver/excluir',
  },
];

export function Categories() {
  return (
    <Container>
      <TitleContainer>
        <DataCountContainer>
          <Title>Categorias</Title>
          <DataCount>{categoriesMockData.length}</DataCount>
        </DataCountContainer>
        <RightAction>
          Nova categoria
        </RightAction>
      </TitleContainer>
      <Table cellSpacing={0}>
        <thead>
          <TableRowHeader>
            {categoriesColumns.map(column => (
              <TableHeader key={column} isBiggestColumn={column === 'Nome'}>
                {column}
              </TableHeader>
            ))}
          </TableRowHeader>
        </thead>
        <tbody>
          {categoriesMockData.map(tableData => (
            <TableRowData key={tableData.id}>
              <TableData>{tableData.emoji}</TableData>
              <TableData>{tableData.name}</TableData>
              <TableData>{tableData.actions}</TableData>
            </TableRowData>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
