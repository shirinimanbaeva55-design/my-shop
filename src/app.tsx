import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { CartProvider } from "./context/cart-context";

export const App = () => {
  return (
    <CartProvider>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </CartProvider>
  );
};
