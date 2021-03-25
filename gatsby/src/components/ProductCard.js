import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ProductCardStyles = styled.div`

    border-radius: 5px;
    border: 1px solid #dedede;
    overflow: hidden;
    transition: all .2s ease;

    &:hover {
        box-shadow: 0 2px 5px #ccc;
    }

    .product-card__link {
        display: inline-block;
        padding: 1rem;
    }

    .image-wrapper {
        height: 24rem;
        overflow: hidden;
        position: relative;
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

`;

export default function ProductCard() {
    return (
        <>
            <ProductCardStyles>
                <Link to={'/'} className="product-card__link">
                    <div className="image-wrapper">
                        <img src="https://source.unsplash.com/random" alt=""/>
                    </div>
                    <div className="product-card__action">
                        <h3>product name</h3>
                        <span>$ price</span>
                    </div>
                </Link>
            </ProductCardStyles>
        </>
    )
}