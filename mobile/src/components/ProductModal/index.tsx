import { FlatList, Modal } from "react-native";
import { Text } from "../Text";
import { Product } from "../../types/Product";
import { Image, CloseButton, ModalBody, Header, IngredientsContainer, Ingredient, Footer, FooterContainer, PriceContainer } from "./styles";
import { Close } from "../Icons/Close";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";

interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ visible, onClose, product, onAddToCart }: ProductModalProps) {
  if (!product) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://172.18.0.1:3001/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>
      <ModalBody>
        <Header>
          <Text size={24} weight="Semibold">{product.name}</Text>
          <Text color="#666" style={{ marginTop: 8 }}>{product.description}</Text>
        </Header>
        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight="Semibold" color="#666">Ingredientes</Text>
            <FlatList
              style={{ marginTop: 16 }}
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="Semibold">{formatCurrency(product.price)}</Text>
          </PriceContainer>
          <Button onPress={handleAddToCart}>
              Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  )
};
