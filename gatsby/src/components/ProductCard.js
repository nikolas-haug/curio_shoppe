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

    .image-wrapper {
        img {
            max-width: 100%;
            display: block;
        }
    }

    .product-card__action {

        h3 {
            padding: 1rem 0;
        }

        span {
            font-size: 1.6rem;
        }
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
                    <div className="image-wrapper">
                        <GatsbyImage image={image} alt={product.name} />
                    </div>
                    <div className="product-card__action">
                        <h3>{product.name}</h3>
                        <span>$ {product.price}</span>
                    </div>
                </Link>
            </ProductCardStyles>
        </>
    )
}