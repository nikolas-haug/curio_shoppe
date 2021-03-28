import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Main from '../components/Main';

export default function SingleProductPage({ data }) {
   const { product } = data;
   const image = getImage(product.image.asset);

    return (
        <>
            <Main>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="image-wrapper">
                    <GatsbyImage image={image} alt={product.name} />
                </div>
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