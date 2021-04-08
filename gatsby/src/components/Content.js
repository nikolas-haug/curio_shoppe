import React from 'react';
import styled from 'styled-components';

const ContentStyles = styled.section`

    @media (min-width: 925px) {
        width: 75%;
    }
    padding: 0 1.5rem;

    @media (min-width: 925px) {
        &.sticky {
            margin-left: 25%;
        }
    }

`;

export default function Content({ children, sticky, element }) {
    return (
        <>
            <ContentStyles ref={element} className={sticky ? 'sticky' : ''}>
                {children}
            </ContentStyles>
        </>
    )
}