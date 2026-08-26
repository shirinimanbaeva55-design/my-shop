import { useNavigate } from "react-router-dom";
import {
  Button,
  Title,
  Text,
  SimpleGrid,
  Paper,
  Stack,
  Group,
} from "@mantine/core";
import {
  Truck,
  ShieldTick,
  Call,
  ShoppingBag,
  DiscountCircle,
} from "iconsax-reactjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./home-page.module.css";
import { ROUTES } from "../../routes/routes";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Stack gap="xl">
        <section>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img
                  src="src/assets/sliders/1.avif"
                  alt="Скидки на электронику"
                  className={styles.slider}
                />
                <div className={styles.slideContent}>
                  <Title order={1} c="white">
                    Летняя распродажа!
                  </Title>
                  <Text size="xl" c="white" fw={500}>
                    Скидки до 50% на главные товары сезона
                  </Text>
                  <Button
                    size="lg"
                    c={"#333"}
                    color="#fff"
                    leftSection={<ShoppingBag size={20} />}
                    onClick={() => navigate(ROUTES.PRODUCTS)}
                    mt="md"
                  >
                    Перейти к покупкам
                  </Button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div style={{ position: "relative" }}>
                <img
                  src="src/assets/sliders/2.jpg"
                  alt="Новая коллекция"
                  className={styles.slider}
                />
                <div className={styles.slideContent}>
                  <Title order={1} c="white">
                    Новое поступление
                  </Title>
                  <Text size="xl" c="white" fw={500}>
                    Только оригинальная продукция с гарантией
                  </Text>
                  <Button
                    size="lg"
                    c={"#333"}
                    color="#fff"
                    leftSection={<ShoppingBag size={20} />}
                    onClick={() => navigate(ROUTES.PRODUCTS)}
                    mt="md"
                  >
                    Смотреть каталог
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <Paper p="lg" radius="md" withBorder style={{ textAlign: "center" }}>
            <Group justify="center" mb="xs">
              <Truck size={32} color="green" />
            </Group>
            <Text fw={600} size="lg">
              Бесплатная доставка
            </Text>
            <Text size="sm" c="dimmed">
              При заказе на сумму от $50
            </Text>
          </Paper>

          <Paper p="lg" radius="md" withBorder style={{ textAlign: "center" }}>
            <Group justify="center" mb="xs">
              <ShieldTick size={32} color="green" />
            </Group>
            <Text fw={600} size="lg">
              Гарантия качества
            </Text>
            <Text size="sm" c="dimmed">
              100% оригинальные товары
            </Text>
          </Paper>

          <Paper p="lg" radius="md" withBorder style={{ textAlign: "center" }}>
            <Group justify="center" mb="xs">
              <Call size={32} color="green" />
            </Group>
            <Text fw={600} size="lg">
              Поддержка 24/7
            </Text>
            <Text size="sm" c="dimmed">
              Всегда на связи для решения вопросов
            </Text>
          </Paper>
        </SimpleGrid>

        <Paper
          p="xl"
          radius="md"
          style={{
            background: "linear-gradient(90deg, green 0%, #22b8cf 100%)",
            color: "white",
          }}
        >
          <Group justify="space-between" align="center" className={styles.promoContent}>
            <Stack gap="xs">
              <Group gap="xs">
                <DiscountCircle size={28} />
                <Title order={2}>Промокод на первый заказ!</Title>
              </Group>
              <Text size="lg">
                Используйте промокод{" "}
                <b style={{ textDecoration: "underline" }}>START10</b> и
                получите скидку 10%
              </Text>
            </Stack>
            <Button
              size="md"
              variant="white"
              color="dark"
              onClick={() => navigate("/products")}
            >
              В каталог
            </Button>
          </Group>
        </Paper>
      </Stack>
    </div>
  );
};

export default HomePage;
