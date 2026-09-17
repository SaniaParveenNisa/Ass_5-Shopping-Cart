import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CouponBox from "../components/CouponBox";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../context/CartContext";

const Coupon = () => {
  const { cart } = useCart();

  return (
    <>
      <Navbar />

      <Page>
        <Back to="/cart">← Apply Coupon</Back>

        {cart.length === 0 ? (
          <Empty>
            <h2>Your cart is empty</h2>
            <Link to="/products">Shop Products</Link>
          </Empty>
        ) : (
          <Grid>
            <CouponBox />
            <OrderSummary />
          </Grid>
        )}
      </Page>
    </>
  );
};

export default Coupon;

const Page = styled.main`
  min-height: calc(100vh - 70px);
  background: #fffaf0;
  padding: 35px 5%;
`;

const Back = styled(Link)`
  text-decoration: none;
  color: #172b40;
  font-size: 13px;
`;

const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 20px;
  max-width: 900px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Empty = styled.div`
  text-align: center;
  margin-top: 100px;

  h2 {
    color: #172b40;
  }

  a {
    color: #ef8700;
  }
`;