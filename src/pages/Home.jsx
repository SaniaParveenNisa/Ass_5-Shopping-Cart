import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "../components/Navbar";
import FeatureBar from "../components/FeatureBar";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero>
        <HeroContent>
          <SmallText>BEST QUALITY, BEST PRICES</SmallText>

          <Heading>
            Shop More.
            <br />
            <Highlight>Pay Less.</Highlight>
          </Heading>

          <Description>
            Discover amazing products at unbeatable prices.
            Add to cart and enjoy the best deals!
          </Description>

          <Buttons>
            <ShopButton to="/products">
              Shop Now
              <FiArrowRight />
            </ShopButton>

            <DealButton to="/products">
              Explore Deals
            </DealButton>
          </Buttons>
        </HeroContent>

        <HeroImageWrapper>
          
          <CartImage
            src="/Images/heroimage.png"
            alt="Shopping cart"
          />
        </HeroImageWrapper>
      </Hero>

      <FeatureBar />
    </>
  );
};

export default Home;

const Hero = styled.section`
  min-height: 500px;
  padding: 40px 6%;
  background: #fffaf0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  overflow: hidden;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    padding-top: 60px;
  }
`;

const HeroContent = styled.div`
  max-width: 520px;
  z-index: 2;
`;

const SmallText = styled.div`
  font-size: 10px;
  color: #ef8700;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const Heading = styled.h1`
  font-size: clamp(45px, 6vw, 70px);
  line-height: 1;
  color: #142b42;
  margin: 15px 0;
`;

const Highlight = styled.span`
  color: #df3d25;
`;

const Description = styled.p`
  max-width: 420px;
  color: #666;
  line-height: 1.7;
  font-size: 14px;

  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const ShopButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: #06233a;
  color: white;
  text-decoration: none;

  padding: 13px 22px;
  border-radius: 5px;
  font-size: 12px;

  &:hover {
    background: #ef5b2a;
  }
`;

const DealButton = styled(Link)`
  padding: 12px 22px;
  border: 1px solid #ef8700;
  color: #ef8700;
  text-decoration: none;
  border-radius: 5px;
  font-size: 12px;

  &:hover {
    background: #ef8700;
    color: white;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  width: min(50vw, 520px);
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
    height: 330px;
  }
`;

const OrangeCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #ffbd3f;
  opacity: 0.75;

  @media (max-width: 500px) {
    width: 220px;
    height: 220px;
  }
`;

const CartImage = styled.img`
  position: relative;
  z-index: 2;
  width: 85%;
  height: 85%;
  object-fit: cover;
  border-radius: 25px;
  mix-blend-mode: multiply;

  @media (max-width: 500px) {
    width: 90%;
  }
`;