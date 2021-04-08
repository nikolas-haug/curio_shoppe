import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';
import useSticky from '../utils/useSticky';

const MainStyles = styled.main`

    display: flex;
    flex-direction: column;
    padding-top: 3.5rem;
    @media (min-width: 925px) {
        flex-direction: row;
    }

`;

export default function Main({ children }) {

    const { isSticky, element } = useSticky();

    return (
        <>
            <MainStyles>
                <Sidebar sticky={isSticky} element={element} />
                <Content sticky={isSticky} element={element}>
                    {children}
                </Content>
            </MainStyles>
        </>
    )
}