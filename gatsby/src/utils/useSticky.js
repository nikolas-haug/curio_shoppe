import { useState, useRef, useEffect } from 'react';

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const [elementTop, setElementTop] = useState(null);
  const element = useRef(null);

  const handleScroll = () => {
    console.log('pageYOffset: ', window.pageYOffset);
    console.log('sidebarTop:', elementTop);
    if (elementTop && window.pageYOffset > elementTop) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    setElementTop(element.current.offsetTop);
    window.addEventListener('scroll', handleScroll, { passive: true });
    console.log('add event');
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('remove event!');
    }
  }, [elementTop]);

  return {
    isSticky,
    element
  }
}

export default useSticky;