import React, { useState } from 'react';

// Create a sticky sidebar context
const StickyContext = React.createContext();

export function StickyProvider({ children }) {
    // we need to stick state in here
    const [sticky, setSticky] = useState(false);
    return (
        <StickyContext.Provider value={[sticky, setSticky]}>
            {children}
        </StickyContext.Provider>
    )
}

export default StickyContext;