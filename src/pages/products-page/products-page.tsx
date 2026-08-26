import { useState, useEffect } from "react";
import {
  Title,
  TextInput,
  Stack,
  Grid,
  Card,
  Text,
  Button,
  AspectRatio,
  Loader,
  Center,
  Flex,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { SearchNormal1, Add } from "iconsax-reactjs";
import { api } from "../../api/api";
import styles from "./products-page.module.css";
import type { Product } from "../../types";
import { useCart } from "../../context/cart-context";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { addToCart } = useCart();

  const fetchProducts = async (query: string) => {
    setLoading(true);
    try {
      const endpoint = query ? `/products/search?q=${query}` : "/products";
      const response = await api.get(endpoint);
      setProducts(response.data.products);
    } catch (error: any) {
      notifications.show({
        title: "Ошибка при получении товаров",
        message: error.message || "Не удалось загрузить список",
        color: "red",
      });
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="container">
      <Stack gap="lg">
        <Flex align={"center"} justify={"space-between"} className={styles.toolbar}>
          <Title order={2} className={styles.title}>
            Каталог товаров
          </Title>

          <TextInput
            placeholder="Поиск товаров..."
            leftSection={<SearchNormal1 size={18} />}
            size="md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.search}
          />
        </Flex>

        {loading ? (
          <Center py="xl">
            <Loader />
          </Center>
        ) : (
          <Grid>
            {products.map((product) => (
              <Grid.Col key={product.id} span={{ base: 12, sm: 6, md: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ objectFit: "contain", padding: "10px" }}
                      />
                    </AspectRatio>
                  </Card.Section>

                  <Stack gap="xs" mt="md">
                    <Text fw={500} lineClamp={1}>
                      {product.title}
                    </Text>
                    <Text size="sm" c="dimmed" lineClamp={2}>
                      {product.description}
                    </Text>
                    <Text fw={700} size="lg">
                      ${product.price}
                    </Text>

                    <Button
                      fullWidth
                      leftSection={<Add size={18} />}
                      variant="light"
                      color="green"
                      onClick={() => addToCart(product)}
                    >
                      Добавить в корзину
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Stack>
    </div>
  );
};

export default ProductsPage;