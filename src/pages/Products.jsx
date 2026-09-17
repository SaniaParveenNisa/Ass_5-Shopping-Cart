import { useState } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = () => {
  const [category, setCategory] = useState("All Products");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState("Popular");

  // Categories
  const categories = [
    "All Products",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Books",
  ];

  // Filter products
  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      category === "All Products" ||
      product.category === category;

    const priceMatch = product.price <= maxPrice;

    return categoryMatch && priceMatch;
  });

  // Sort products
  if (sortBy === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortBy === "Rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <>
      <Navbar />

      <Page>

        {/* ================= SIDEBAR ================= */}
        <Sidebar>

          <SidebarHeading>
            Categories
          </SidebarHeading>

          <CategoryList>
            {categories.map((item) => (
              <CategoryButton
                key={item}
                active={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </CategoryButton>
            ))}
          </CategoryList>

          {/* PRICE FILTER */}
          <FilterSection>

            <FilterTitle>
              Filter by Price
            </FilterTitle>

            <PriceSlider
              type="range"
              min="0"
              max="5000"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Number(e.target.value))
              }
            />

            <PriceValues>
              <span>₹0</span>
              <span>₹{maxPrice}</span>
            </PriceValues>

          </FilterSection>

          {/* SORT */}
          <FilterSection>

            <FilterTitle>
              Sort By
            </FilterTitle>

            <SortWrapper>
              <SortSelect
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
              >
                <option value="Popular">
                  Popular
                </option>

                <option value="Rating">
                  Rating
                </option>

                <option value="Price: Low to High">
                  Price: Low to High
                </option>

                <option value="Price: High to Low">
                  Price: High to Low
                </option>
              </SortSelect>

              <FiChevronDown />
            </SortWrapper>

          </FilterSection>

        </Sidebar>

        {/* ================= PRODUCTS ================= */}
        <Content>

          <TopSection>

            <ProductHeading>
              All Products
            </ProductHeading>

            <ShowingText>
              Showing {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "product"
                : "products"}
            </ShowingText>

          </TopSection>

          {/* MOBILE FILTER */}
          <MobileFilter>

            <MobileCategory>
              <label>Category</label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </MobileCategory>

            <MobileCategory>
              <label>Sort By</label>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
              >
                <option value="Popular">
                  Popular
                </option>

                <option value="Rating">
                  Rating
                </option>

                <option value="Price: Low to High">
                  Price: Low to High
                </option>

                <option value="Price: High to Low">
                  Price: High to Low
                </option>
              </select>
            </MobileCategory>

          </MobileFilter>

          {/* PRODUCT GRID */}
          {filteredProducts.length > 0 ? (
            <ProductGrid>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </ProductGrid>
          ) : (
            <NoProducts>
              <h2>No products found</h2>

              <p>
                Try changing the category or price
                filter.
              </p>

              <ResetButton
                onClick={() => {
                  setCategory("All Products");
                  setMaxPrice(5000);
                }}
              >
                Reset Filters
              </ResetButton>
            </NoProducts>
          )}

        </Content>

      </Page>
    </>
  );
};

export default Products;


/* ================================================= */
/*                    STYLES                         */
/* ================================================= */

const Page = styled.main`
  min-height: calc(100vh - 70px);

  padding: 35px 5%;

  background: #fffaf0;

  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);

  gap: 30px;

  box-sizing: border-box;

  @media (max-width: 850px) {
    grid-template-columns: 150px minmax(0, 1fr);

    gap: 20px;
  }

  @media (max-width: 700px) {
    display: block;

    padding: 25px 4%;
  }
`;


/* ================= SIDEBAR ================= */

const Sidebar = styled.aside`
  min-width: 0;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SidebarHeading = styled.h3`
  margin: 0 0 15px;

  color: #14283d;

  font-size: 13px;
  font-weight: 700;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const CategoryButton = styled.button`
  width: 100%;

  padding: 9px 10px;

  border: none;

  border-radius: 5px;

  background: ${(props) =>
    props.active ? "#fff0d2" : "transparent"};

  color: ${(props) =>
    props.active ? "#ed8500" : "#333"};

  text-align: left;

  font-size: 11px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #fff0d2;
    color: #ed8500;
  }
`;


/* ================= FILTER ================= */

const FilterSection = styled.div`
  margin-top: 30px;
`;

const FilterTitle = styled.h4`
  margin: 0 0 15px;

  color: #14283d;

  font-size: 11px;
`;

const PriceSlider = styled.input`
  width: 100%;

  margin: 0;

  accent-color: #f39200;

  cursor: pointer;
`;

const PriceValues = styled.div`
  display: flex;

  justify-content: space-between;

  margin-top: 5px;

  color: #777;

  font-size: 9px;
`;

const SortWrapper = styled.div`
  position: relative;

  width: 100%;

  display: flex;

  align-items: center;
`;

const SortSelect = styled.select`
  width: 100%;

  padding: 9px 28px 9px 8px;

  appearance: none;

  border: 1px solid #ded6c9;

  border-radius: 5px;

  background: #fffdf7;

  color: #333;

  font-size: 10px;

  outline: none;

  cursor: pointer;

  &:focus {
    border-color: #f39200;
  }
`;

const MobileFilter = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 10px;

    margin-bottom: 20px;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const MobileCategory = styled.div`
  display: flex;

  flex-direction: column;

  gap: 5px;

  label {
    color: #555;

    font-size: 10px;
  }

  select {
    padding: 10px;

    border: 1px solid #ded6c9;

    border-radius: 5px;

    background: white;

    font-size: 11px;

    outline: none;
  }
`;


/* ================= CONTENT ================= */

const Content = styled.section`
  min-width: 0;
`;

const TopSection = styled.div`
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  margin-bottom: 20px;
`;

const ProductHeading = styled.h1`
  margin: 0;

  color: #14283d;

  font-size: 20px;

  font-weight: 700;
`;

const ShowingText = styled.p`
  margin: 5px 0 0;

  color: #888;

  font-size: 10px;
`;


/* ================= PRODUCT GRID ================= */

const ProductGrid = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: repeat(
    4,
    minmax(0, 1fr)
  );

  gap: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(
      3,
      minmax(0, 1fr)
    );
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(
      2,
      minmax(0, 1fr)
    );
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;


/* ================= EMPTY ================= */

const NoProducts = styled.div`
  min-height: 300px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  text-align: center;

  color: #777;

  h2 {
    margin: 0 0 8px;

    color: #14283d;

    font-size: 20px;
  }

  p {
    margin: 0 0 20px;

    font-size: 12px;
  }
`;

const ResetButton = styled.button`
  border: none;

  border-radius: 5px;

  background: #06233a;

  color: white;

  padding: 11px 20px;

  font-size: 11px;

  cursor: pointer;

  &:hover {
    background: #ef5b2a;
  }
`;