import { useEffect, useState } from "react"

export const isMobile = () => {
    const [wideScreen, setWideScreen] = useState(window.innerWidth > 575);

    useEffect(() => {
        const handleResize = () => {
            setWideScreen(window.innerWidth < 575);
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return wideScreen;
};
