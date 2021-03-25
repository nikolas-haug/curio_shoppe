import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FourOhFourStyles = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 80vh;

`;

export default function fourOhFour() {
    return (
        <FourOhFourStyles>
            <h3>Ooops!! That page doesn't exist.</h3>
            <p>go back to homepage</p>
            <Link to={'/'}>return home</Link>
        </FourOhFourStyles>
    )
}