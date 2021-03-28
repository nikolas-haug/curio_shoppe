import React from "react";
import { graphql } from 'gatsby';
import Main from "../components/Main";
import ProductCard from "../components/ProductCard";
import { ProductGrid } from '../styles/Grids';

export default function Home({ data }) {
  const products = data.products.nodes;
  console.log(products);
  return (
    <>
      <Main>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Main>
    </>
  )
}

export const query = graphql`
  query ProductsQuery {
  products: allSanityProduct {
    nodes {
      category {
        name
      }
      id
      name
      price
      description
      image {
        asset {
          gatsbyImageData(
            placeholder: BLURRED
          )
        }
      }
    }
  }
}
`;