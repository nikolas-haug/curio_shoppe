import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyles = styled.header`

    padding: 1.5rem 0;

`;

const NavStyles = styled.nav`

    display: flex;
    justify-content: space-between;

    ul {
        display: flex;
        align-items: center;

        li {
            margin: 0 1.5rem;
        }
    }

    a {
        font-size: 1.8rem;
    }

`;

export default function Header() {
    return (
        <>
            <HeaderStyles>
                <NavStyles>
                    <Link to={'/'}>
                        <img src="https://source.unsplash.com/55x55" alt=""/>
                        <h1 className="visually-hidden">Curio Shoppe</h1>
                    </Link>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Contact</Link>
                        </li>
                    </ul>
                </NavStyles>
            </HeaderStyles>
        </>
    )
}