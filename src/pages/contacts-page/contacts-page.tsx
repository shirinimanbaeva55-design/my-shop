import { useState } from "react";
import {
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  SimpleGrid,
  Paper,
  Stack,
  Group,
  ThemeIcon,
  Box,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Call, Sms, Location, Send2, Clock } from "iconsax-reactjs";
import styles from "./contacts-page.module.css";

const ContactsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      notifications.show({
        title: "Ошибка",
        message: "Заполните все поля формы",
        color: "red",
      });
      return;
    }

    notifications.show({
      title: "Сообщение отправлено!",
      message: "Мы свяжемся с вами в ближайшее время.",
      color: "green",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <Stack gap="xl">
        <div>
          <Title order={1}>Контакты</Title>
          <Text c="dimmed" mt={5}>
            Свяжитесь с нами любым удобным способом или оставьте заявку
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Paper p="xl" radius="md" withBorder>
            <Stack gap="lg">
              <Title order={3}>Наши данные</Title>

              <Group align="flex-start">
                <ThemeIcon size={42} radius="md" color="teal" variant="light">
                  <Location size={22} />
                </ThemeIcon>
                <Box className={styles.contactText}>
                  <Text fw={600}>Адрес магазина</Text>
                  <Text size="sm" c="dimmed">
                    г. Нукус, ул. Турткульская, д. 10
                  </Text>
                </Box>
              </Group>

              <Group align="flex-start">
                <ThemeIcon size={42} radius="md" color="teal" variant="light">
                  <Call size={22} />
                </ThemeIcon>
                <Box className={styles.contactText}>
                  <Text fw={600}>Телефон</Text>
                  <Text size="sm" c="dimmed">
                    +998 (99) 000-00-00
                  </Text>
                  <Text size="sm" c="dimmed">
                    +998 (90) 000-00-00 (Бесплатно по городу Нукус)
                  </Text>
                </Box>
              </Group>

              <Group align="flex-start">
                <ThemeIcon size={42} radius="md" color="teal" variant="light">
                  <Sms size={22} />
                </ThemeIcon>
                <Box className={styles.contactText}>
                  <Text fw={600}>Email</Text>
                  <Text size="sm" c="dimmed">
                    my_store@gmail.com
                  </Text>
                </Box>
              </Group>

              <Group align="flex-start">
                <ThemeIcon size={42} radius="md" color="teal" variant="light">
                  <Clock size={22} />
                </ThemeIcon>
                <Box className={styles.contactText}>
                  <Text fw={600}>Режим работы</Text>
                  <Text size="sm" c="dimmed">
                    Пн — Пт: с 9:00 до 18:00
                  </Text>
                  <Text size="sm" c="dimmed">
                    Сб — Вс: Выходной
                  </Text>
                </Box>
              </Group>
            </Stack>
          </Paper>

          <Paper p="xl" radius="md" withBorder>
            <form onSubmit={handleSubmit}>
              <Stack gap="md">
                <Title order={3}>Написать нам</Title>

                <TextInput
                  label="Ваше имя"
                  placeholder="Введите ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <TextInput
                  label="Ваш Email"
                  placeholder="example@mail.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <Textarea
                  label="Сообщение"
                  placeholder="Опишите ваш вопрос..."
                  minRows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <Button
                  type="submit"
                  color="teal"
                  size="md"
                  leftSection={<Send2 size={18} />}
                  mt="xs"
                >
                  Отправить сообщение
                </Button>
              </Stack>
            </form>
          </Paper>
        </SimpleGrid>
      </Stack>
    </div>
  );
};

export default ContactsPage;
