import styled from 'styled-components';

export const ProductGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    --columns: 3;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export const SingleProductGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    --columns: 2;
    grid-template-columns: repeat(--columns, 1fr);
`;