import { FilterIcon } from '../../assets/images/Icons/FilterIcons';
import {
  Container,
  Title,
  DataCount,
  TitleContainer,
  Table,
  TableHeader,
  TableData,
  TableRowHeader,
  TableRowData,
} from './styles';

const ordersHistoryColumns = [
  'Mesa', 'Data', 'Nome', 'Categoria', 'Total', 'Ações',
];

const ordersHistoryMockData = [
  {
    id: 1,
    table: 1,
    date: '07/12/2022',
    name: 'Frango com catupiry, Quatro queijos',
    category: 'Pizza',
    total: 'R$ 40,00',
    actions: 'ver/excluir',
  },
  {
    id: 2,
    table: 2,
    date: '07/12/2022',
    name: 'Frango com catupiry, Quatro queijos',
    category: 'Pizza',
    total: 'R$ 40,00',
    actions: 'ver/excluir',
  },
];

export function OrdersHistory() {
  return (
    <Container>
      <TitleContainer>
        <Title>Pedidos</Title>
        <DataCount>{ordersHistoryMockData.length}</DataCount>
      </TitleContainer>
      <Table cellSpacing={0}>
        <thead>
          <TableRowHeader>
            {ordersHistoryColumns.map(column => (
              <TableHeader key={column}>
                {column}
                {column === 'Data' && <FilterIcon />}
              </TableHeader>
            ))}
          </TableRowHeader>
        </thead>
        <tbody>
          {ordersHistoryMockData.map(tableData => (
            <TableRowData key={tableData.id}>
              <TableData>{tableData.table}</TableData>
              <TableData>{tableData.date}</TableData>
              <TableData>{tableData.name}</TableData>
              <TableData>{tableData.category}</TableData>
              <TableData>{tableData.total}</TableData>
              <TableData>{tableData.actions}</TableData>
            </TableRowData>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
