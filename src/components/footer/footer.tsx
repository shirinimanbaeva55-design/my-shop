import { Stack, Text } from "@mantine/core";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Stack align="center">
          <Text size="sm" color="dimmed">
            Создано с любовью на React и Mantine.
          </Text>
          <Text size="sm" color="dimmed">
            © 2026 My Shop. Все права защищены.
          </Text>
        </Stack>
      </div>
    </footer>
  );
};
