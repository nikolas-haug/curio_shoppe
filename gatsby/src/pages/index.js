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
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i} />
          ))}
        </ProductGrid>
      </Main>
    </>
  )
}

export const query = graphql`
  query ProductsQuery($categoryRegex: String) {
    products: allSanityProduct(filter: {
            category: {
                elemMatch: {
                    name: {
                        regex: $categoryRegex
                    }
                }
            }
        }) {
      nodes {
        category {
          name
        }
        id
        name
        price
        description
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(
              placeholder: BLURRED
            )
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;