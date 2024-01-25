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
                                    className="text-primary font-monolisa hover:text-transparent bg-gradient-to-l from-[#FE8DC6] to-[#ff7db7e1] bg-clip-text transition ease-in delay-150"
                                    onClick={()=>setOpenNavigation(false)}
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
                                    className="text-primary font-monolisa hover:text-transparent bg-gradient-to-l from-[#FE8DC6] to-[#ff7db7e1] bg-clip-text transition ease-in delay-150"
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
