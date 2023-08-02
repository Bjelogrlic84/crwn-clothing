import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const cartRef = useRef();
  const dispatch = useDispatch();

  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  const goToCheckoutHandler = () => {
    setIsCheckoutClicked(true);
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!cartRef.current.contains(event.target) && !isCheckoutClicked) {
        dispatch(setIsCartOpen(false));
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch, isCheckoutClicked]);

  return (
    <CartDropdownContainer ref={cartRef}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
