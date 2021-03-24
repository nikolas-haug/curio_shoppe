import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';

const MainStyles = styled.main`

    display: flex;
    padding-top: 3.5rem;

`;

export default function Main({ children }) {


    return (
        <>
            <MainStyles>
                <Sidebar />
                <Content>
                    {children}
                </Content>
            </MainStyles>
        </>
    )
}