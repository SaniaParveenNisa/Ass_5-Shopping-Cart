import styled from "styled-components";
import {
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiLock,
} from "react-icons/fi";

const FeatureBar = () => {
  return (
    <Wrapper>
      <Feature>
        <Icon>
          <FiTruck />
        </Icon>
        <div>
          <Title>Free Shipping</Title>
          <Text>On orders above ₹499</Text>
        </div>
      </Feature>

      <Feature>
        <Icon>
          <FiShield />
        </Icon>
        <div>
          <Title>Best Price</Title>
          <Text>Guaranteed</Text>
        </div>
      </Feature>

      <Feature>
        <Icon>
          <FiRefreshCw />
        </Icon>
        <div>
          <Title>Easy Returns</Title>
          <Text>30 days return</Text>
        </div>
      </Feature>

      <Feature>
        <Icon>
          <FiLock />
        </Icon>
        <div>
          <Title>Secure Payment</Title>
          <Text>100% secure</Text>
        </div>
      </Feature>
    </Wrapper>
  );
};

export default FeatureBar;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #fffaf0;
  padding: 20px 5%;
  border-top: 1px solid #eadfca;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Icon = styled.div`
  color: #f28c00;
  font-size: 20px;
  display: flex;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #132b42;
`;

const Text = styled.div`
  font-size: 10px;
  color: #777;
  margin-top: 3px;
`;