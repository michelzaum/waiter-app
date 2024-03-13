import { Animated, FlatList } from "react-native";
import { Text } from "../../components/Text";
import {
  OrderIngredients,
  OrderHeader,
  OrderInfo,
  OrderProgress,
  OrderProgressIndicator,
  OrdersContainer
} from "./styles";
import { statusConfig, ordersMock } from "./types";

export function Orders() {
  return (
    <OrdersContainer style={{ padding: 24 }}>
      <Text size={24} weight="Semibold">Pedidos</Text>
      <FlatList
        data={ordersMock}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: order }) => (
          <>
            <Text size={18} weight="Semibold" color="#666666" style={{ marginTop: 40 }}>{order.type}</Text>
            <FlatList
              data={order.listOfOrders}
              keyExtractor={(item) => String(item.table)}
              renderItem={({ item: orderContent, index }) => (
                <OrderInfo key={orderContent.table} style={{ marginTop: index === 0 ? 24 : 8 }}>
                  <OrderHeader>
                    <Text size={14} weight="Semibold">Mesa {orderContent.table}</Text>
                    <OrderProgress backgroundColor={statusConfig[orderContent.status].backgroundColor}>
                      <Animated.View>
                        <OrderProgressIndicator backgroundColor={statusConfig[orderContent.status].textColor} />
                      </Animated.View>
                      <Text color={statusConfig[orderContent.status].textColor} weight="Semibold" size={14}>{statusConfig[orderContent.status].label}</Text>
                    </OrderProgress>
                  </OrderHeader>

                  <OrderIngredients>
                    <FlatList
                      data={orderContent.ingredients}
                      keyExtractor={(item) => String(item.id)}
                      renderItem={({ item: ingredient }) => (
                        <Text size={14} key={ingredient.id}>
                          <Text  size={14} color="#999999">{ingredient.quantity}x </Text>
                          {ingredient.name}
                        </Text>
                      )}
                    />
                  </OrderIngredients>
                </OrderInfo>
              )}
            />
          </>
        )}
      />
    </OrdersContainer>
  )
}
