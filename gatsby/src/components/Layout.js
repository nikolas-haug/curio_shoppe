import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContainerStyles = styled.div`

    max-width: var(--container-size);
    margin: 0 auto;
    padding: 0 1.5rem;

`;

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <Typography />
            <ContainerStyles>
                { children }
            </ContainerStyles>
        </>
    )
}