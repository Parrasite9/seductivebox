import { useState, useEffect } from 'react';

function WindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        // Set initial state
        handleResize();

        // Cleanup on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}

export default WindowWidth;
