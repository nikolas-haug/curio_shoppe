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
   console.log(product);
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
                        {product.variants.length > 0 && <><p>available sizes:</p><p>{product.variants[0].sizes.join(', ')}</p></>}
                        <div className="product__action">
                            <button 
                                className="snipcart-add-item"
                                data-item-id={product.id}
                                data-item-price={product.price}
                                data-item-url={`/product/${product.slug.current}`}
                                data-item-description={product.description}
                                data-item-image={product.image.asset.fluid.src}
                                data-item-name={product.name}
                                data-item-custom1-name={product.variants.length ? 'Size' : ''}
                                data-item-custom1-options={product.variants.length ? product.variants[0].sizes.join('|') : ''}
                            >add to cart</button>
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
            variants {
                sizes
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
            slug {
                current
            }
        }
    }
`;