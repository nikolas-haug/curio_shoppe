import React from 'react';
import { Link } from 'gatsby';
import { TiShoppingCart } from 'react-icons/ti';
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
        display: none;
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

export default function Header() {
    return (
        <>
            <HeaderStyles>
                <NavStyles>
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