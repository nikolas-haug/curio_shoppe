import styled from 'styled-components';

export const ProductGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    --columns: 3;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;