import styled from "styled-components";
import { FiStar, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <ImageContainer>
        <ProductImage src={product.image} alt={product.name} />
      </ImageContainer>

      <ProductName>{product.name}</ProductName>

      <Price>₹{product.price.toLocaleString("en-IN")}</Price>

      <Rating>
        <FiStar />
        {product.rating}
        <Review>({product.reviews})</Review>
      </Rating>

      <AddButton onClick={() => addToCart(product)}>
        <FiShoppingBag />
        Add to Cart
      </AddButton>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  background: #fffdf7;
  border: 1px solid #e5ddce;
  border-radius: 8px;
  padding: 12px;
  min-width: 0;
  transition: 0.25s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  background: #f7f4ec;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 130px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
`;

const ProductName = styled.h3`
  font-size: 13px;
  margin: 10px 0 5px;
  color: #14283d;
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #111;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin: 7px 0;
  color: #f28c00;
  font-size: 11px;
`;

const Review = styled.span`
  color: #888;
`;

const AddButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 9px;
  background: #06233a;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 11px;

  &:hover {
    background: #ef5b2a;
  }
`;