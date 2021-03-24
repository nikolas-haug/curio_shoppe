import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.aside`

    width: 25%;
    padding: 1.5rem 1.5rem;

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

    const [isSticky, setSticky] = useState(false);
    const [sidebarTop, setSidebarTop] = useState(null);
    const sidebarRef = useRef(null);

    const handleScroll = () => {
        console.log('pageYOffset: ', window.pageYOffset);
        console.log('sidebarTop:', sidebarTop);
        if (sidebarTop && window.pageYOffset > sidebarTop) {
            // sidebarRef.current.classList.add('sticky');
            setSticky(true);
        } else {
            // sidebarRef.current.classList.remove('sticky');
            setSticky(false);
        }
    }

    useEffect(() => {
        setSidebarTop(sidebarRef.current.offsetTop);
        window.addEventListener('scroll', handleScroll, { passive: true });
        console.log('add event');
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('remove event!');
        }
    }, [sidebarTop]);

    return (
        <>
            <SidebarStyles ref={sidebarRef} className={isSticky ? 'sticky' : ''}>
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