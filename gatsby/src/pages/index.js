import React from "react";
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";
import { ProductGrid } from '../styles/Grids';

export default function Home() {
  return (
    <>
      <Main>
        <ProductGrid>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductGrid>
      </Main>
    </>
  )
}
