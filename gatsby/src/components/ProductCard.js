import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ProductCardStyles = styled.div`

    border-radius: 5px;
    overflow: hidden;

    img {
        max-width: 100%;
        display: block;
    }

`;

export default function ProductCard() {
    return (
        <>
            <ProductCardStyles>
                <Link to={'/'}>
                    <img src="https://source.unsplash.com/random" alt=""/>
                </Link>
                <div>
                    <h3>product name</h3>
                    <div><span>$ price</span></div>
                </div>
            </ProductCardStyles>
        </>
    )
}