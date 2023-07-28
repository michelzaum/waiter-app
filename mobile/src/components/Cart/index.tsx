import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/CartItem";

import {
  Item,
  ProductContainer,
  Actions,
  Image,
  QuantityContainer,
  ProductDetails,
  Summary,
  TotalContainer,
} from './styles';
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";
import { Button } from "../Button";

interface CartProps {
  cartItems: CartItem[]
}

export function Cart({ cartItems }: CartProps) {
  return (
   <>
    {cartItems.length > 0 && (
      <FlatList
        data={cartItems}
        keyExtractor={cartItem => cartItem.product._id}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20, maxHeight: 150 }}
        renderItem={({ item: cartItem }) => (
          <Item>
            <ProductContainer>
              <Image
                source={{
                  uri: `http://172.18.0.1:3001/uploads/${cartItem.product.imagePath}`,
                }}
              />
              <QuantityContainer>
                <Text size={14} color="#666">
                  {cartItem.quantity}x
                </Text>
              </QuantityContainer>
              <ProductDetails>
                <Text size={14} weight="Semibold">
                  {cartItem.product.name}
                </Text>
                <Text size={14} color="#666" style={{ marginTop: 4 }}>
                  {formatCurrency(cartItem.product.price)}
                </Text>
              </ProductDetails>
            </ProductContainer>
            <Actions>
              <TouchableOpacity style={{ marginRight: 24 }}>
                <PlusCircle />
              </TouchableOpacity>
              <TouchableOpacity>
                <MinusCircle />
              </TouchableOpacity>
            </Actions>
          </Item>
        )}
      />
    )}
    <Summary>
      <TotalContainer>
        {cartItems.length > 0 ? (
          <>
            <Text color="#666">Total</Text>
            <Text size={20} weight="Semibold">{formatCurrency(120)}</Text>
          </>
        ) : (
          <Text color="#999">Seu carrinho está vazio</Text>
        )}
      </TotalContainer>
      <Button onPress={() => {}} disabled={cartItems.length === 0}>
        Confirmar pedido
      </Button>
    </Summary>
   </>
  )
};
