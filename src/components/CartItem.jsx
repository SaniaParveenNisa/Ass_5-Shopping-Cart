import styled from "styled-components";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <Item>
      <ProductInfo>
        <Image src={item.image} alt={item.name} />

        <Info>
          <Name>{item.name}</Name>
          <MobilePrice>₹{item.price.toLocaleString("en-IN")}</MobilePrice>

          <RemoveButton onClick={() => removeFromCart(item.id)}>
            Remove
          </RemoveButton>
        </Info>
      </ProductInfo>

      <DesktopPrice>
        ₹{item.price.toLocaleString("en-IN")}
      </DesktopPrice>

      <Quantity>
        <QuantityButton onClick={() => decreaseQuantity(item.id)}>
          <FiMinus />
        </QuantityButton>

        <span>{item.quantity}</span>

        <QuantityButton onClick={() => increaseQuantity(item.id)}>
          <FiPlus />
        </QuantityButton>
      </Quantity>

      <Total>
        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
      </Total>
    </Item>
  );
};

export default CartItem;

const Item = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #e6dfd1;

  @media (max-width: 700px) {
    grid-template-columns: 1fr auto;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Image = styled.img`
  width: 55px;
  height: 55px;
  object-fit: contain;
  background: #f5f2ea;
  border-radius: 7px;
`;

const Info = styled.div``;

const Name = styled.h3`
  font-size: 13px;
  margin: 0 0 5px;
  color: #14283d;
`;

const MobilePrice = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
    font-size: 12px;
  }
`;

const RemoveButton = styled.button`
  border: none;
  padding: 0;
  background: none;
  color: #e44729;
  font-size: 10px;
  cursor: pointer;
`;

const DesktopPrice = styled.div`
  font-size: 12px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  span {
    font-size: 12px;
  }
`;

const QuantityButton = styled.button`
  width: 25px;
  height: 25px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Total = styled.div`
  font-size: 12px;
  font-weight: 600;

  @media (max-width: 700px) {
    text-align: right;
  }
`;