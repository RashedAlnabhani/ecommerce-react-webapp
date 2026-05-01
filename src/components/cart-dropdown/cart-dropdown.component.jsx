import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items-container">

        </div>
        <Button>Checout</Button>
      </div>
    </>
  );
}

export default CartDropdown;
