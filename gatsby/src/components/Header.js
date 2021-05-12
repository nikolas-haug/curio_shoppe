import React from 'react';
import { Link } from 'gatsby';
import { TiShoppingCart } from 'react-icons/ti';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    position: relative;
    padding: 1.5rem;

`;

const NavStyles = styled.nav`
    display: flex;
`;

const ListStyles = styled.ul`
    display: flex;
    align-items: center;
    margin-left: auto;
    @media (max-width: 625px) {
        height: 0;
        overflow: hidden;
        opacity: 0;
        display: flex;
        flex-direction: column;
        background: blue;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        padding: 5rem 0 0 0;
        transition: opacity .5s ease;
    }
    li {
        margin: 0 1.5rem;
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

`;

const CartStyles = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 625px) {
        position: absolute;
        top: 50%;
        right: 1.5rem;
        transform: translateY(-50%);
        
    }
    .snipcart-checkout {
        display: flex;
        margin: 0;
        svg {
            margin-right: .5rem;
        }
    }
`;

const NavToggleStyles = styled.button`

    display: none;
    background-color: transparent;
    color: #333;
    margin: 0;
    font-size: 1.8rem;
    @media (max-width: 625px) {
        display: block;
    }

`;

export default function Header() {
    return (
        <>
            <HeaderStyles>
                <NavStyles>
                    <NavToggleStyles>
                        <FaBars />
                    </NavToggleStyles>
                    <Link to={'/'}>
                        <h1>CYBERCURIO</h1>
                        <h1 className="visually-hidden">CyberCurio</h1>
                    </Link>
                    <ListStyles>
                        <li>
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'} className="nav-link">About</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="nav-link">Contact</Link>
                        </li>
                    </ListStyles>
                    <CartStyles>
                        <button className="snipcart-checkout">
                            <TiShoppingCart /> (<span className="snipcart-items-count"></span>)
                        </button>
                    </CartStyles>
                </NavStyles>
            </HeaderStyles>
        </>
    )
}