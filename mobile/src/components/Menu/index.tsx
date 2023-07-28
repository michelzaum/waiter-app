import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { Text } from '../Text';
import { PlusCircle } from '../Icons/PlusCircle';

import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { ProductModal } from '../ProductModal';
import { useState } from 'react';
import { Product } from '../../types/Product';

interface MenuProps {
  onAddToCart: (product: Product) => void;
}

export function Menu({ onAddToCart }: MenuProps) {
  const [isModalVIsible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVIsible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://172.18.0.1:3001/uploads/${product.imagePath}`,
              }}
            />

            <ProductDetails>
              <Text weight='Semibold'>
                {product.name}
              </Text>
              <Text size={14} color='#666' style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight='Semibold'>
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>
            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      />
    </>
  );
}
