import React from 'react';
import { Link } from 'gatsby';
import { TiShoppingCart } from 'react-icons/ti';
import styled from 'styled-components';

const HeaderStyles = styled.header`

    padding: 1.5rem;

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

    .nav-link {
        font-size: 1.8rem;
        color: var(--color-black);
        padding: 1rem 1.5rem;
        border-radius: 5px;
        transition: all .18s ease;
        &:hover {
            background-color: var(--color-blue-1);
        }
    }

    .snipcart-checkout {
        display: flex;
        margin: 0;
        svg {
            margin-right: .5rem;
        }
    }

`;

export default function Header() {
    return (
        <>
            <HeaderStyles>
                <NavStyles>
                    <Link to={'/'}>
                        <h1>CYBERCURIO</h1>
                        <h1 className="visually-hidden">CyberCurio</h1>
                    </Link>
                    <ul>
                        <li>
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'} className="nav-link">About</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="nav-link">Contact</Link>
                        </li>
                        <li>
                            <button className="snipcart-checkout">
                                <TiShoppingCart /> (<span className="snipcart-items-count"></span>)
                            </button>
                        </li>
                    </ul>
                </NavStyles>
            </HeaderStyles>
        </>
    )
}