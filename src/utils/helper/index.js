import { useEffect, useState } from "react"
import { analytics } from "../../config/firebase";
import { logEvent } from "firebase/analytics";

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


export const getDate = (type) => {

    const date = new Date();

    const dateFormat = {
        year: date.getFullYear(),
    }

    return dateFormat[type || 'year']
}


export const logAnalyticsEvent = ({ name, params = {} }) => {
    if (!name) return;

    logEvent(analytics, name, {
        ...params,
        timestamp: new Date().toISOString(),
    });
};