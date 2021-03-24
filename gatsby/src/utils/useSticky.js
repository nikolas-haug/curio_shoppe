import { useState, useRef, useEffect } from 'react';

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const [elementTop, setElementTop] = useState(null);
  const element = useRef(null);

  const handleScroll = () => {
    if (elementTop && window.pageYOffset > elementTop) {
      setSticky(true);
    } else {
      setSticky(false);
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
    setElementTop(element.current.offsetTop);
    window.addEventListener('scroll', handleScroll, { passive: true });
    console.log('add event');
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('remove event!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce, elementTop]);

  return {
    isSticky,
    element
  }
}

export default useSticky;