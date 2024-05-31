import React, { useState, useEffect, Fragment } from "react";
import Icons from "../../assets/icons/icons";

const Header = () => {
    const [isWideScreen, setIsWideScreen] = useState(true);
    const [openNavigation, setOpenNavigation] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 575);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navigationMenu = [
        {
            id: 1,
            url: "#About",
            label: "About",
        },
        {
            id: 2,
            url: "#Experiences",
            label: "Experiences",
        },
        {
            id: 3,
            url: "#Projects",
            label: "Projects",
        },
        {
            id: 4,
            url: "#Contact",
            label: "Contact",
        },
        {
            id: 4,
            url: "/portfolio/static/docs/resume.pdf",
            label:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
        },
    ];

    const renderExpandNav = () => {

        if (isWideScreen || !openNavigation) return null;

        return (
            <div className="flex flex-col bg-white absolute top-0 left-0 h-full justify-center items-center min-h-screen w-full">
                <ul className="text-white gap-4">
                    {
                        navigationMenu &&
                        navigationMenu.map((e) => (
                            <li key={e.id}>
                                <a
                                    href={e.url}
                                    className="text-primary font-notosans hover:gradient-primary bg-clip-text transition ease-in delay-150"
                                    onClick={() => setOpenNavigation(false)}
                                >
                                    {e.label}
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="header flex items-center justify-between px-4 py-4 w-[70%] rounded-2xl bg-white">
            <div className="logo">
                <a href="#">
                    <Icons iconId="Logo" style="w-[7rem] tablet:w-[10rem]" />
                </a>
            </div>
            {isWideScreen ? (
                <ul className="text-primary flex gap-4">
                    {
                        navigationMenu &&
                        navigationMenu.map((e) => (
                            <li key={e.id}>
                                <a
                                    href={e.url}
                                    className="text-primary font-notosans hover:text-transparent bg-gradient-to-l from-[#FE8DC6] to-[#ff7db7e1] bg-clip-text transition ease-in delay-150"
                                >
                                    {e.label}
                                </a>
                            </li>
                        ))}
                </ul>
            ) : (
                <Fragment>
                    {openNavigation ? (
                        <div onClick={() => setOpenNavigation(false)}>
                            <Icons iconId="Close" style="w-4" />
                        </div>
                    ) : (
                        <div onClick={() => setOpenNavigation(true)}>
                            <Icons iconId="Hamburger" style="w-4" />
                        </div>
                    )}
                </Fragment>
            )}
            {renderExpandNav()}
        </div>
    );
};

export default Header;
