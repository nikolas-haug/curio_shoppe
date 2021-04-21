import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from 'styled-components';

const ProductCardStyles = styled.div`

    border-radius: 5px;
    border: 1px solid #dedede;
    overflow: hidden;
    opacity: 0;
    transition: all .5s ease;
    animation: fade-in 1s ease forwards;

    &:hover {
        box-shadow: 0 2px 5px #ccc;
    }

    .product-card__link {
        display: inline-block;
        padding: 1rem;
    }

    .gatsby-image-wrapper {
        height: 27.5rem;
        display: block;
    }

    .product-card__action {

        h3 {
            padding: 1rem 0;
        }

        span {
            font-size: 1.6rem;
        }
    }

    .product-card__snipcart-api {
        position: absolute;
        left: -5000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
        visibility: hidden;
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100%
        }
    }

`;

export default function ProductCard({ product, delay }) {
    const image = getImage(product.image.asset);

    return (
        <>
            <ProductCardStyles style={{ animationDelay: `${delay * 100}ms` }}>
                <Link to={`/product/${product.slug.current}`} className="product-card__link">
                    <GatsbyImage image={image} alt={product.name} />
                    <div className="product-card__action">
                        <h3>{product.name}</h3>
                        <span>$ {product.price}</span>
                    </div>
                </Link>
                {/* hidden product details 'button' for snipcart api fetch */}
                <div className="product-card__snipcart-api snipcart-add-item"
                    aria-hidden="true"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={`/`}
                    data-item-description={product.description}
                    data-item-image={product.image.asset.fluid.src}
                    data-item-name={product.name}
                    data-item-custom1-name={product.variants.length ? 'Size' : ''}
                    data-item-custom1-options={product.variants.length ? product.variants[0].sizes.join('|') : ''}
                >
                hidden snipcart api
                </div>
            </ProductCardStyles>
        </>
    )
}