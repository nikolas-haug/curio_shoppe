import React from 'react';
import styled from 'styled-components';

const MainStyles = styled.main`

    display: flex;

`;

export default function Main({ children }) {
    return (
        <>
            <MainStyles>
                {children}
            </MainStyles>
        </>
    )
}