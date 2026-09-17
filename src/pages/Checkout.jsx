import styled from "styled-components";
import Navbar from "../components/Navbar";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleOrder = () => {
    alert("Order placed successfully!");
    clearCart();
    navigate("/empty-cart");
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <Empty>
          <h2>No items to checkout</h2>
          <Link to="/products">Continue Shopping</Link>
        </Empty>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <Page>
        <Content>
          <Title>Checkout</Title>

          <SectionTitle>Delivery Details</SectionTitle>

          <Form>
            <Field>
              <Label>Full Name</Label>
              <Input placeholder="Enter your full name" />
            </Field>

            <Field>
              <Label>Phone Number</Label>
              <Input placeholder="Enter phone number" />
            </Field>

            <Field>
              <Label>Address</Label>
              <Input placeholder="Enter your address" />
            </Field>

            <TwoFields>
              <Field>
                <Label>City</Label>
                <Input placeholder="City" />
              </Field>

              <Field>
                <Label>Pincode</Label>
                <Input placeholder="Pincode" />
              </Field>
            </TwoFields>

            <SectionTitle>Payment Method</SectionTitle>

            <Payment>
              <label>
                <input type="radio" name="payment" />
                UPI
              </label>

              <label>
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />
                Credit / Debit Card
              </label>

              <label>
                <input type="radio" name="payment" />
                Cash on Delivery
              </label>
            </Payment>
          </Form>
        </Content>

        <Side>
          <OrderSummary checkout />

          <PlaceOrder onClick={handleOrder}>
            Place Order
          </PlaceOrder>
        </Side>
      </Page>
    </>
  );
};

export default Checkout;

const Page = styled.main`
  min-height: calc(100vh - 70px);
  padding: 40px 5%;
  background: #fffaf0;

  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.section`
  max-width: 700px;
`;

const Title = styled.h1`
  color: #172b40;
  font-size: 25px;
`;

const SectionTitle = styled.h3`
  color: #172b40;
  font-size: 14px;
  margin: 25px 0 15px;
`;

const Form = styled.div``;

const Field = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 10px;
  color: #444;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid #ddd5c8;
  border-radius: 5px;
  background: #fffdf8;
  outline: none;

  &:focus {
    border-color: #ef8700;
  }
`;

const TwoFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  label {
    font-size: 12px;
    color: #333;
  }

  input {
    margin-right: 10px;
    accent-color: #ef8700;
  }
`;

const Side = styled.aside`
  align-self: start;
`;

const PlaceOrder = styled.button`
  width: 100%;
  padding: 13px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  background: #06233a;
  color: white;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: #ef5b2a;
  }
`;

const Empty = styled.div`
  min-height: calc(100vh - 70px);
  background: #fffaf0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: #172b40;
  }

  a {
    color: #ef8700;
  }
`;