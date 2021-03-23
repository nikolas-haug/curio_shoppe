import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`

    padding: 3.5rem 0;
    text-align: center;

`;

export default function Footer() {
    return (
        <>
            <FooterStyles>
                <h2>footer</h2>
            </FooterStyles>
        </>
    )
}