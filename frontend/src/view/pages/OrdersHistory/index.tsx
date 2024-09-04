import { FilterIcon } from '../../../assets/images/Icons/FilterIcon';
import { OpenEyeIcon } from '../../../assets/images/Icons/OpenEyeIcon';
import { TrashIcon } from '../../../assets/images/Icons/TrashIcon';
import { formatCurrency } from '../../../utils/formatCurrency';
import { OrderDetailsModal } from './OrderDetailsModal';
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
  ActionsContainer,
} from './styles';
import { Order } from './types';
import { useOrderHistory } from './useOrderHistory';

const ordersHistoryColumns = [
  'Mesa', 'Data', 'Nome', 'Categoria', 'Total', 'Ações',
];

const ordersHistoryMockData: Order[] = [
  {
    id: "1",
    table: 1,
    date: '07/12/2022',
    products: [
    {
      id: '2',
      imagePath: '1706326587096-frango-catupiry.png',
      name: 'Frango com Catupiry',
      price: 30,
      quantity: 1,
    },
    {
      id: '3',
      imagePath: '1686095987313-quatro-queijos.png',
      name: 'Quatro queijos',
      price: 27,
      quantity: 1,
    },
  ],
    category: 'Pizza',
  },
];

export function OrdersHistory() {
  const {
    orderData,
    isOrderDetailsModalOpen,
    openOrderDetailsModal,
    closeOrderDetailsModal,
    handleDeleteOrderRegister,
    deleteOrder,
  } = useOrderHistory();

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
              <TableData>
                {tableData.products.map(product => (
                  product.name
                )).join(', ')}
              </TableData>
              <TableData>{tableData.category}</TableData>
              <TableData>
                {formatCurrency(tableData.products.reduce((total, product) => {
                  return total + product.price;
                }, 0))}
              </TableData>
              <TableData>
                <ActionsContainer>
                  <button type='button' onClick={() => openOrderDetailsModal(tableData)}>
                    <OpenEyeIcon />
                  </button>
                  <button type='button' onClick={() => handleDeleteOrderRegister(() => deleteOrder(tableData.id))}>
                    <TrashIcon style={{ color: '#D73035' }} />
                  </button>
                </ActionsContainer>
              </TableData>
            </TableRowData>
          ))}
        </tbody>
      </Table>
      <OrderDetailsModal
        visible={isOrderDetailsModalOpen}
        data={orderData}
        onClose={closeOrderDetailsModal}
        onDelete={() => handleDeleteOrderRegister(() => deleteOrder(orderData.id))}
      />
    </Container>
  )
}
