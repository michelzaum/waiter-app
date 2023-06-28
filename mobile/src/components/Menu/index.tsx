import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { Text } from '../Text';
import { PlusCircle } from '../Icons/PlusCircle';

import {
  Product,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(product) => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
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
          <AddToCartButton>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
