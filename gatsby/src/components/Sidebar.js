import React from 'react';
import styled from 'styled-components';

const AsideStyles = styled.aside`

    width: 25%;

`;

export default function Sidebar() {
    return (
        <>
            <AsideStyles>
                <ul>
                    <li>category</li>
                    <li>category</li>
                    <li>category</li>
                    <li>category</li>
                    <li>category</li>
                    <li>category</li>
                    <li>category</li>
                    <li>category</li>
                </ul>
            </AsideStyles>
        </>
    )
}