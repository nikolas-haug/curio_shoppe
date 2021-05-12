import React from 'react';
import styled from 'styled-components';

const ContentStyles = styled.section`

    @media (min-width: 1025px) {
        width: 75%;
        &.sticky {
            margin-left: 25%;
        }
    }
    padding: 0 1.5rem;

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