import React from 'react';
import styled from 'styled-components';

const ContentStyles = styled.section`

    width: 75%;
    padding: 0 1.5rem;

`;

export default function Content({ children }) {
    return (
        <>
            <ContentStyles>
                { children }
            </ContentStyles>
        </>
    )
}