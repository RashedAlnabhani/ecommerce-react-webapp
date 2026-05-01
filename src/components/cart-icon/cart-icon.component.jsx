import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Icon from "../../assets/cart-icon.svg";
import "./cart-icon.styles.scss";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <img src={Icon} alt="shopping icon" className="shopping-icon" />
        <span className="item-count">10</span>
      </div>
    </>
  );
};

export default CartIcon;
