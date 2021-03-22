import React from 'react';
import styled from 'styled-components';

const SectionStyles = styled.section`

    width: 75%;
    padding: 0 1.5rem;

`;

export default function Content() {
    return (
        <>
            <SectionStyles>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, porro mollitia. Obcaecati, ducimus, esse consequatur ut cumque commodi unde autem alias dolorum assumenda in eaque cum voluptas minima et laudantium.</p>
            </SectionStyles>
        </>
    )
}