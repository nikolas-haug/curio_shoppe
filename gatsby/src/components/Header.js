import React from 'react';
import { Link } from 'gatsby';
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
                        {/* <img src="https://source.unsplash.com/55x55" alt=""/> */}
                        <h1>CYBERCURIO</h1>
                        <h1 className="visually-hidden">CyberCurio</h1>
                    </Link>
                    <ul>
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Contact</Link>
                        </li>
                        <li>
                            <button className="snipcart-checkout">Cart (<span className="snipcart-items-count"></span>)</button>
                        </li>
                    </ul>
                </NavStyles>
            </HeaderStyles>
        </>
    )
}