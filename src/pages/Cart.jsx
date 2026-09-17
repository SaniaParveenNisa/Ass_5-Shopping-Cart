import styled from "styled-components";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import CouponBox from "../components/CouponBox";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <EmptyMessage>
          <h2>Your cart is empty!</h2>
          <p>Add some products to your cart.</p>
          <ShopLink to="/products">Continue Shopping</ShopLink>
        </EmptyMessage>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Page>
        <Main>
          <Title>
            Your Cart <span>({cart.length} Items)</span>
          </Title>

          <Header>
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </Header>

          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Main>

        <Side>
          <OrderSummary />

          <CouponLink to="/coupon">
            Have a coupon code? Apply Coupon
          </CouponLink>
        </Side>
      </Page>
    </>
  );
};

export default Cart;

const Page = styled.main`
  min-height: calc(100vh - 70px);
  padding: 40px 5%;
  background: #fffaf0;

  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.section`
  min-width: 0;
`;

const Title = styled.h2`
  color: #172b40;
  font-size: 18px;

  span {
    color: #777;
    font-size: 11px;
    font-weight: 400;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 15px 0;
  border-bottom: 1px solid #ddd5c8;
  color: #172b40;
  font-size: 11px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Side = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CouponLink = styled(Link)`
  color: #ef5b2a;
  font-size: 11px;
  text-decoration: none;
  text-align: center;
`;

const EmptyMessage = styled.div`
  min-height: calc(100vh - 70px);
  background: #fffaf0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  h2 {
    color: #172b40;
  }

  p {
    color: #777;
    font-size: 13px;
  }
`;

const ShopLink = styled(Link)`
  margin-top: 15px;
  background: #f39200;
  color: white;
  text-decoration: none;
  padding: 12px 22px;
  border-radius: 5px;
  font-size: 12px;
`;