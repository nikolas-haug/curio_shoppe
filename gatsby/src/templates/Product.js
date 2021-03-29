import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import Main from '../components/Main';

const SingleProductStyles = styled.div`
    
    display: grid;
    grid-gap: 2rem;
    --columns: 2;
    grid-template-columns: repeat(var(--columns), 1fr);

    .gatsby-image-wrapper {
       /* width: 300px; */
    }
`;

export default function SingleProductPage({ data }) {
   const { product } = data;
   const image = getImage(product.image.asset);

    return (
        <>
            <Main>
                <SingleProductStyles>
                    <GatsbyImage image={image} alt={product.name} />
                    <div>
                        <h2 className="product__title">{product.name}</h2>
                        <p className="product__description">{product.description}</p>
                        <p>${product.price}</p>
                        <div className="product__action">
                            <button>add to cart</button>
                        </div>
                        <Link to={'/'}>go back to all products</Link>
                    </div>
                </SingleProductStyles>
            </Main>
        </>
    )
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
    query($slug: String!) {
        product: sanityProduct(slug: { current: { eq: $slug } }) {
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
            slug {
                current
            }
        }
    }
`;