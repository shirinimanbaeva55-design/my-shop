import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Stack } from "@mantine/core";

const Layout = () => {
  return (
    <Stack justify="space-between" h={'100vh'}>
      <Header />
      <Outlet />
      <Footer />
    </Stack>
  );
};

export default Layout;
