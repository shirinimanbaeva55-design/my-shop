import {
  Title,
  Stack,
  Paper,
  Text,
  Button,
  Group,
  ActionIcon,
  Center,
  Image,
  Flex,
  Box,
} from "@mantine/core";
import { Trash, ShoppingBag, Minus, Add } from "iconsax-reactjs";
import { useCart } from "../../context/cart-context";
import styles from "./cart-page.module.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();

  if (cart.length === 0) {
    return (
      <Center py={100}>
        <Stack align="center" gap="xs">
          <ShoppingBag size={100} color="gray" />
          <Text size="lg" fw={500} c="dimmed">
            Корзина пуста
          </Text>
        </Stack>
      </Center>
    );
  }

  return (
    <div className="container">
      <Box p="md">
        <Stack gap="lg">
          <Flex align="center" justify="space-between" className={styles.headerRow}>
            <Title order={2}>Раздел корзины</Title>
            <Button
              variant="subtle"
              color="red"
              leftSection={<Trash size={18} />}
              onClick={clearCart}
            >
              Очистить корзину
            </Button>
          </Flex>

          <Stack gap="md">
            {cart.map((item) => (
              <Paper key={item.id} shadow="xs" p="md" radius="md" withBorder>
                <Flex className={styles.cartItem}
                  align="center"
                  justify="space-between"
                  wrap="nowrap"
                  gap="md"
                >
                  <Group gap="md" className={styles.productInfo}>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      w={60}
                      h={60}
                      fit="contain"
                      radius="sm"
                    />
                    <Box className={styles.productTitle}>
                      <Text fw={500} lineClamp={1}>
                        {item.title}
                      </Text>
                      <Text size="sm" c="dimmed">
                        ${item.price} x {item.quantity} = $
                        {(item.price * item.quantity).toFixed(3)}
                      </Text>
                    </Box>
                  </Group>

                  <Group gap="xs" className={styles.quantity}>
                    <ActionIcon
                      variant="default"
                      size="md"
                      disabled={item.quantity <= 1}
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus size={14} />
                    </ActionIcon>

                    <Text fw={600} size="md" w={24} ta="center">
                      {item.quantity}
                    </Text>

                    <ActionIcon
                      variant="default"
                      size="md"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Add size={14} />
                    </ActionIcon>
                  </Group>

                  <ActionIcon
                    className={styles.removeButton}
                    variant="subtle"
                    color="red"
                    size="lg"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash size={20} />
                  </ActionIcon>
                </Flex>
              </Paper>
            ))}
          </Stack>

          <Flex justify="flex-start" align="center" mt="md">
            <Paper p="sm" withBorder shadow="xs" className={styles.total}>
              <Text size="lg" fw={700}>
                Общая сумма: ${totalPrice.toFixed(3)}
              </Text>
            </Paper>
          </Flex>
        </Stack>
      </Box>
    </div>
  );
};

export default CartPage;
