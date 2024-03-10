import React, { useState, useEffect, Fragment } from "react";
import Icons from "../../assets/icons/icons";
import Label from "../Label/Label";
import "./Quicklink.scss";


const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsVisible(window.scrollY > 20);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <span
            onClick={handleClick}
            style={{ display: isVisible ? 'block' : 'none' }}
            className="horizontalText font-jetbrains fixed bottom-10 left-5 w-7 text-sm"
        >----scroll to top</span>
    );
}

const Quicklink = () => {

    return (
        <Fragment>
            <ScrollTop />
            <div className="fixed bottom-10 right-5 w-7">
                <ul className="gap-4 inline-flex flex-col">
                    <a className="cursor-pointer" href="https://github.com/azhansyakirin"><Icons iconId="GitHub" style="opacity-50 transition-opacity hover:opacity-100" /></a>
                    <a className="cursor-pointer" href="https://www.linkedin.com/in/azhansyakirin/"><Icons iconId="LinkedIn" style="opacity-50 transition-opacity hover:opacity-100" /></a>
                    <a className="cursor-pointer" href="https://wa.me/60142620833"><Icons iconId="Whatsapp" style="opacity-50 transition-opacity hover:opacity-100" /></a>
                </ul>
            </div>
        </Fragment>
    )
}



export default Quicklink;