import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.aside`

    width: 25%;
    padding: 1.5rem 1.5rem;

    .sidebar__heading {
        margin-bottom: 2rem;
        text-transform: uppercase;
    }

    ul {
        background-color: var(--color-blue-1);
        padding: 2rem;
        //TODO: adjust fixed margin accordingly
        width: ${ props => props.sticky ? '222.5px' : 'auto' };
        border-radius: 5px;
    }

    li:not(:last-child) {
        margin-bottom: 1.5rem;
    }

    a {
        display: block;
        font-size: 1.6rem;
        color: var(--color-black);
        border-radius: 5px;
        padding: .5rem;
        transition: all .2s ease;
        &:hover {
            background-color: var(--color-grey-1);
            color: var(--color-white);
        }
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
                <h3 className="sidebar__heading">peruse by category</h3>
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