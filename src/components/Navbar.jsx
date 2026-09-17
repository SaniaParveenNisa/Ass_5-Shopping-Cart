import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FiShoppingBag,
  FiSearch,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <Nav>
      <NavInner>
        <Logo to="/">
          <LogoIcon>
            <FiShoppingBag />
          </LogoIcon>

          <LogoText>
            Shop<span>Nest</span>
          </LogoText>
        </Logo>

        <DesktopMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink to="/products">Categories</NavLink>
          <NavLink to="/products">Deals</NavLink>
          <NavLink to="/">About Us</NavLink>
        </DesktopMenu>

        <Actions>
          <ActionButton>
            <FiSearch />
          </ActionButton>

          <ActionButton>
            <FiUser />
          </ActionButton>

          <CartLink to="/cart">
            <FiShoppingBag />
            {cartCount > 0 && <Badge>{cartCount}</Badge>}
          </CartLink>

          <MobileButton onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </MobileButton>
        </Actions>
      </NavInner>

      {menuOpen && (
        <MobileMenu>
          <MobileLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </MobileLink>

          <MobileLink to="/products" onClick={() => setMenuOpen(false)}>
            Shop
          </MobileLink>

          <MobileLink to="/products" onClick={() => setMenuOpen(false)}>
            Categories
          </MobileLink>

          <MobileLink to="/products" onClick={() => setMenuOpen(false)}>
            Deals
          </MobileLink>

          <MobileLink to="/" onClick={() => setMenuOpen(false)}>
            About Us
          </MobileLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  background: #06233a;
  color: white;
  position: relative;
  z-index: 100;
`;

const NavInner = styled.div`
  min-height: 70px;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: white;
  flex-shrink: 0;
`;

const LogoIcon = styled.div`
  font-size: 24px;
  color: #ff9f00;
  display: flex;
`;

const LogoText = styled.div`
  font-size: 18px;
  font-weight: 700;

  span {
    color: #ff9f00;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 13px;
  transition: 0.2s;

  &:hover {
    color: #ff9f00;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 19px;
  display: flex;
  cursor: pointer;

  &:hover {
    color: #ff9f00;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const CartLink = styled(Link)`
  color: white;
  font-size: 21px;
  display: flex;
  position: relative;
  text-decoration: none;

  &:hover {
    color: #ff9f00;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -9px;
  right: -10px;

  width: 17px;
  height: 17px;
  border-radius: 50%;

  background: #ef5b2a;
  color: white;

  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 900px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 15px 5% 20px;
    gap: 18px;
    background: #06233a;
  }
`;

const MobileLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #ff9f00;
  }
`;