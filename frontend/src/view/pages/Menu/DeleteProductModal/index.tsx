import { CloseIcon } from '../../../../assets/images/Icons/CloseIcon';
import { formatCurrency } from '../../../../utils/formatCurrency';
import { DeleteProductModalProps } from '../types';
import {
  DeleteProductModalBody,
  DeleteProductModalContent,
  DeleteProductModalOverlay,
  ProductDetails,
} from './styles';

export function DeleteProductModal({ isVisible, onClose, productData }: DeleteProductModalProps) {
  if (!isVisible) {
    return;
  }

  return (
    <DeleteProductModalOverlay>
      <DeleteProductModalBody>
        <header className='delete-product-header'>
          <span>Excluir produto</span>
          <button type='button' onClick={onClose}>
            <CloseIcon />
          </button>
        </header>
        <DeleteProductModalContent>
          <span>Tem certeza que deseja excluir o produto?</span>
          <ProductDetails>
            <img
              src={`http://localhost:3001/uploads/${productData.imagePath}`}
              alt="Product image"
            />
            <div>
              <span>🍕 {productData.category}</span> {/* TODO: Delete hardcoded emoji after having emoji information saved */}
              <span>{productData.name}</span>
              <span>{formatCurrency(productData.price)}</span>
            </div>
          </ProductDetails>
          <div className="actions-container">
            <button className='secondary'>
              Manter Produto
            </button>
            <button>
              Excluir Produto
            </button>
          </div>
        </DeleteProductModalContent>
      </DeleteProductModalBody>
    </DeleteProductModalOverlay>
  )
}
