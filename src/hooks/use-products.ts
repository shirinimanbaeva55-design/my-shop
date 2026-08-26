import { notifications } from "@mantine/notifications";

export const useFetchProducts = async (url: string): Promise<any[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
    }
    const data: any[] = await response.json();
    return data;
  } catch (error: any) {
    notifications.show({
      title: "Ошибка при получении товаров:",
      message: error.message,
      color: "red",
    });
    return [];
  }
};
