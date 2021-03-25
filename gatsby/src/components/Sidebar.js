import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.aside`

    width: 25%;
    padding: 1.5rem 1.5rem;

    h3 {
        margin-bottom: 2rem;
    }

    ul {
        border-radius: 5px;
        background-color: lightblue;
        padding: 2rem;
        width: ${ props => props.sticky ? '222.5px' : 'auto' };
        color: ${ props => props.sticky ? 'blue' : 'green' };
    }

    li {
        margin-bottom: 1.5rem;
    }

    a {
        font-size: 1.6rem;
        color: ${ props => props.sticky ? 'blue' : 'green' };
    }

    &.sticky {
        position: fixed;
        top: 0;
        width: auto;
    }

`;

export default function Sidebar({ sticky, element }) {
    return (
        <>
            <SidebarStyles ref={element} className={sticky ? 'sticky' : ''} sticky={sticky}>
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
                </ul>
            </SidebarStyles>
        </>
    )
}