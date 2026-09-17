import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderSummary = ({ checkout = false }) => {
  const {
    subtotal,
    discount,
    gst,
    grandTotal,
  } = useCart();

  return (
    <Wrapper>
      <Heading>
        {checkout ? "Order Summary" : "Cart Summary"}
      </Heading>

      <Row>
        <span>Subtotal</span>
        <span>₹{subtotal.toLocaleString("en-IN")}</span>
      </Row>

      {discount > 0 && (
        <Row>
          <span>Discount</span>
          <Discount>
            - ₹{discount.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}
          </Discount>
        </Row>
      )}

      <Row>
        <span>GST (18%)</span>
        <span>
          ₹
          {gst.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </span>
      </Row>

      <Divider />

      <GrandTotal>
        <span>Grand Total</span>
        <strong>
          ₹
          {grandTotal.toLocaleString("en-IN", {
            maximumFractionDigits: 2,
          })}
        </strong>
      </GrandTotal>

      {!checkout && (
        <CheckoutButton to="/checkout">
          Proceed to Checkout
        </CheckoutButton>
      )}

      <Secure>🔒 Secure Checkout</Secure>
    </Wrapper>
  );
};

export default OrderSummary;

const Wrapper = styled.div`
  background: #fffaf1;
  border: 1px solid #e5ddcf;
  border-radius: 9px;
  padding: 22px;
`;

const Heading = styled.h3`
  margin: 0 0 22px;
  color: #172b40;
  font-size: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  font-size: 12px;
`;

const Discount = styled.span`
  color: #ef402b;
`;

const Divider = styled.div`
  height: 1px;
  background: #ddd4c5;
  margin: 20px 0;
`;

const GrandTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 13px;
    font-weight: 700;
  }

  strong {
    color: #ef402b;
    font-size: 17px;
  }
`;

const CheckoutButton = styled(Link)`
  display: block;
  margin-top: 20px;
  padding: 12px;
  text-align: center;
  background: #06233a;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 12px;

  &:hover {
    background: #ef5b2a;
  }
`;

const Secure = styled.div`
  text-align: center;
  margin-top: 15px;
  font-size: 10px;
  color: #777;
`;