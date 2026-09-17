import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Navbar from "../components/Navbar";

const EmptyCart = () => {
  return (
    <>
      <Navbar />

      <Page>
        <IconCircle>
          <FiShoppingCart />
        </IconCircle>

        <Title>Your cart is empty!</Title>

        <Text>
          Looks like you haven't added anything to your cart yet.
        </Text>

        <ContinueButton to="/products">
          Continue Shopping
        </ContinueButton>
      </Page>
    </>
  );
};

export default EmptyCart;

const Page = styled.main`
  min-height: calc(100vh - 70px);
  background: #fffaf0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 30px;
`;

const IconCircle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;

  background: #f8e9c9;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #172b40;
  font-size: 55px;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  color: #172b40;
  font-size: clamp(22px, 4vw, 30px);
  margin: 0;
`;

const Text = styled.p`
  color: #777;
  font-size: 12px;
  margin: 10px 0 25px;
`;

const ContinueButton = styled(Link)`
  background: #f39200;
  color: white;
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 12px;

  &:hover {
    background: #e57900;
  }
`;