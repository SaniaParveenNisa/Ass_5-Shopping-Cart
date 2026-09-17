import { useState } from "react";
import styled from "styled-components";
import { FiPercent } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const CouponBox = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const { applyCoupon } = useCart();

  const handleApply = () => {
    if (code.toUpperCase() === "SAVE10") {
      applyCoupon({
        code: "SAVE10",
        discount: 10,
      });

      setMessage("Coupon applied successfully!");
    } else {
      setMessage("Invalid coupon code.");
    }
  };

  return (
    <Wrapper>
      <Icon>
        <FiPercent />
      </Icon>

      <Title>Have a coupon code?</Title>

      <Description>
        Enter your code and get exciting discounts!
      </Description>

      <Input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter coupon code"
      />

      <Button onClick={handleApply}>
        Apply Coupon
      </Button>

      {message && (
        <Message success={message.includes("successfully")}>
          {message}
        </Message>
      )}
    </Wrapper>
  );
};

export default CouponBox;

const Wrapper = styled.div`
  border: 1px dashed #dcb46c;
  border-radius: 8px;
  padding: 30px 20px;
  text-align: center;
  background: #fffdf7;
`;

const Icon = styled.div`
  width: 70px;
  height: 55px;
  background: #f39200;
  color: white;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 15px;
  color: #172b40;
`;

const Description = styled.p`
  color: #777;
  font-size: 11px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 11px;
  border: 1px solid #ddd4c5;
  border-radius: 5px;
  outline: none;
  margin-top: 10px;

  &:focus {
    border-color: #f39200;
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 14px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: #06233a;
  color: white;
  cursor: pointer;

  &:hover {
    background: #ef5b2a;
  }
`;

const Message = styled.p`
  font-size: 11px;
  color: ${(props) => (props.success ? "#34873b" : "#e44729")};
`;