import { Link } from "react-router-dom";
import { Indicator } from "@mantine/core";
import { ROUTES } from "../../routes/routes";
import styles from "./header.module.css";
import { useCart } from "../../context/cart-context";

export const Header = () => {
  const { cart } = useCart();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerBlock}>
          <Link to={ROUTES.HOME} className={styles.logo}>
            <h1>My Shop</h1>
          </Link>
          <ul className={styles.navs}>
            <li>
              <Link to={ROUTES.PRODUCTS}>Товары</Link>
            </li>
            <li>
              <Link
                to={ROUTES.CART}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  position: "relative",
                }}
              >
                <Indicator
                  label={cart.length}
                  size={16}
                  color="red"
                  disabled={cart.length === 0}
                  offset={-2}
                  style={{
                    position: "absolute",
                    right: "-3px",
                    top: '5px',
                  }}
                />
                <span>Корзина</span>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.CONTACTS}>Контакты</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
