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

const menuColumns = [
  'Imagem', 'Nome', 'Categoria', 'Preço', 'Ações',
];

const menuMockData = [
  {
    id: 1,
    image: 'image here',
    name: 'Frango com catupiry, Quatro queijos',
    category: 'Pizza',
    price: 'R$ 40,00',
    actions: 'ver/excluir',
  },
  {
    id: 2,
    image: 'image here',
    name: 'Frango com catupiry, Quatro queijos',
    category: 'Pizza',
    price: 'R$ 40,00',
    actions: 'ver/excluir',
  },
];

export function Menu() {
  return (
    <Container>
      <TitleContainer>
        <ProductsCountContainer>
          <Title>Produtos</Title>
          <DataCount>{menuMockData.length}</DataCount>
        </ProductsCountContainer>
        <RightAction>
          Novo produto
        </RightAction>
      </TitleContainer>
      <Table cellSpacing={0}>
        <thead>
          <TableRowHeader>
            {menuColumns.map(column => (
              <TableHeader key={column}>
                {column}
              </TableHeader>
            ))}
          </TableRowHeader>
        </thead>
        <tbody>
          {menuMockData.map(tableData => (
            <TableRowData key={tableData.id}>
              <TableData>{tableData.image}</TableData>
              <TableData>{tableData.name}</TableData>
              <TableData>{tableData.category}</TableData>
              <TableData>{tableData.price}</TableData>
              <TableData>{tableData.actions}</TableData>
            </TableRowData>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
