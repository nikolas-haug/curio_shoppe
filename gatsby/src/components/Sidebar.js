import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.aside`

    width: 25%;
    padding-top: 2.5rem;

    h3 {
        margin-bottom: 2rem;
    }

    li {
        margin-bottom: 1.5rem;
    }

    a {
        font-size: 1.6rem;
    }

`;

export default function Sidebar() {
    return (
        <>
            <SidebarStyles>
                <h3>CATEGORIES FILTER</h3>
                <ul>
                    <li>
                        <Link to={'/'}>category</Link>
                    </li>
                    <li>
                        <Link to={'/'}>category</Link>
                    </li>
                    <li>
                        <Link to={'/'}>category</Link>
                    </li>
                    <li>
                        <Link to={'/'}>category</Link>
                    </li>
                    <li>
                        <Link to={'/'}>category</Link>
                    </li>
                    <li>
                        <Link to={'/'}>category</Link>
                    </li>
                    <li>
                        <Link to={'/'}>category</Link>
                    </li>
                    <li>
                        <Link to={'/'}>category</Link>
                    </li>
                    <li>
                        <Link to={'/'}>category</Link>
                    </li>
                </ul>
            </SidebarStyles>
        </>
    )
}