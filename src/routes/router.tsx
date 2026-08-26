import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "../layout/layout";
import HomePage from "../pages/home-page/home-page";
import ProductsPage from "../pages/products-page/products-page";
import CartPage from "../pages/cart-page/cart-page";
import ContactsPage from "../pages/contacts-page/contacts-page";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.PRODUCTS,
        element: <ProductsPage />,
      },
      {
        path: ROUTES.CART,
        element: <CartPage />,
      },
      {
        path: ROUTES.CONTACTS,
        element: <ContactsPage />,
      },
    ],
  },
]);
