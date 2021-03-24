import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const ContentStyles = styled.section`

    width: 75%;
    padding: 0 1.5rem;

    &.sticky {
        margin-left: 25%;
    }

`;

export default function Content({ children }) {

    const [contentTop, setContentTop] = useState(null);
    // console.log(sidebarTop);
    const contentRef = useRef(null);

    const handleScroll = () => {
        console.log('pageYOffset: ', window.pageYOffset);
        console.log('sidebarTop:', contentTop);
        if (contentTop && window.pageYOffset > contentTop) {
            contentRef.current.classList.add('sticky');
        } else {
            contentRef.current.classList.remove('sticky');
        }
    }

    // This function handles the scroll performance issue
    const debounce = (func, wait = 20, immediate = true) => {
        let timeOut
        return () => {
            let context = this,
                args = arguments
            const later = () => {
                timeOut = null
                if (!immediate) func.apply(context, args)
            }
            const callNow = immediate && !timeOut
            clearTimeout(timeOut)
            timeOut = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }

    useEffect(() => {
        setContentTop(contentRef.current.offsetTop);
        window.addEventListener('scroll', handleScroll, { passive: true });
        console.log('add event');
        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log('remove event!');
        }
    }, [debounce, contentTop]);

    return (
        <>
            <ContentStyles ref={contentRef}>
                {children}
            </ContentStyles>
        </>
    )
}