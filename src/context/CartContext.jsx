import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  coupon: null,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "APPLY_COUPON":
      return {
        ...state,
        coupon: action.payload,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        coupon: null,
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  const applyCoupon = (coupon) => {
    dispatch({
      type: "APPLY_COUPON",
      payload: coupon,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = state.coupon
    ? subtotal * (state.coupon.discount / 100)
    : 0;

  const gst = (subtotal - discount) * 0.18;

  const grandTotal = subtotal - discount + gst;

  const cartCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        coupon: state.coupon,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        applyCoupon,
        clearCart,
        subtotal,
        discount,
        gst,
        grandTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}