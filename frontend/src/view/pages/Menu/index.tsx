import { EditIcon } from '../../../assets/images/Icons/EditIcon';
import { TrashIcon } from '../../../assets/images/Icons/TrashIcon';
import { formatCurrency } from '../../../utils/formatCurrency';
import { DeleteProductModal } from './DeleteProductModal';
import { NewProduct } from './NewProduct';
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
import { useMenu } from './useMenu';

const menuColumns = [
  'Imagem', 'Nome', 'Categoria', 'Preço', 'Ações',
];

const menuMockData = [
  {
    id: '2',
    imagePath: '1706326587096-frango-catupiry.png',
    name: 'Frango com Catupiry',
    price: 30,
    category: 'Pizza',
  },
  {
    id: '3',
    imagePath: '1686095987313-quatro-queijos.png',
    name: 'Quatro queijos',
    price: 27,
    category: 'Pizza',
  },
];

export function Menu() {
  const {
    isNewProductModalOpen,
    openNewProductModal,
    closeNewProductModal,
    isDeleteProductModalOpen,
    openDeleteProductModal,
    closeDeleteProductModal,
    productData,
  } = useMenu();

  return (
    <Container>
      <TitleContainer>
        <DataCountContainer>
          <Title>Produtos</Title>
          <DataCount>{menuMockData.length}</DataCount>
        </DataCountContainer>
        <RightAction onClick={openNewProductModal}>
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
              <TableData>
                <img
                  src={`http://localhost:3001/uploads/${tableData.imagePath}`}
                  height={32}
                  width={48}
                  style={{ borderRadius: '4px' }}
                />
              </TableData>
              <TableData>{tableData.name}</TableData>
              <TableData>{tableData.category}</TableData>
              <TableData>{formatCurrency(tableData.price)}</TableData>
              <TableData>
                <ActionsContainer>
                  <button type='button'>
                    <EditIcon />
                  </button>
                  <button type='button' onClick={() => openDeleteProductModal(tableData)}>
                    <TrashIcon style={{ color: '#D73035' }} />
                  </button>
                </ActionsContainer>
              </TableData>
            </TableRowData>
          ))}
        </tbody>
      </Table>
      <NewProduct
        isVisible={isNewProductModalOpen}
        onClose={closeNewProductModal}
      />
      <DeleteProductModal
        isVisible={isDeleteProductModalOpen}
        onClose={closeDeleteProductModal}
        productData={productData}
      />
    </Container>
  )
}
