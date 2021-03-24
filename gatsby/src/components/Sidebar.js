import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.aside`

    width: 25%;
    padding: 0 1.5rem;

    h3 {
        margin-bottom: 2rem;
    }

    li {
        margin-bottom: 1.5rem;
    }

    a {
        font-size: 1.6rem;
    }

    &.sticky {
        position: fixed;
        top: 0;
        width: auto;
    }

`;

export default function Sidebar() {

    // const [sticky, setSticky] = useContext(StickyContext);
    // console.log(sticky);
    // const sidebarRef = useRef(null);
    // const sidebarTop = sidebarRef.current.offsetTop; 

    // const handleScroll = () => {
    //     if(window.pageYOffset >= sidebarTop) {
    //         sidebarRef.current.classList.add('sticky');
    //     } else {
    //         sidebarRef.current.classList.remove('sticky');
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, []);

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
                </ul>
            </SidebarStyles>
        </>
    )
}