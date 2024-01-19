import React from "react";
import classNames from "classnames";
import "./Header.scss";
import Icons from "../../assets/icons/icons";

const Header = ({ }) => {

    const navigationMenu = [
        {
            url: "#About",
            label: "About"
        },
        {
            url: "#Experiences",
            label: "Experiences"
        },
        {
            url: "#Projects",
            label: "Projects"
        },
        {
            url: "#Contact",
            label: "Contact"
        }
    ]

    return (
        <div className="header flex items-center justify-between px-4 py-4 w-[70%] rounded-2xl">
            <div className="logo"><a href="#"><Icons iconId="Logo" style="w-[10rem]" /></a></div>
            <ul className=" text-primary flex gap-4">
                {
                    navigationMenu && navigationMenu.map(e => (
                        <li>
                            <a
                                href={e.url}
                                className="text-primary font-monolisa hover:text-transparent bg-gradient-to-l from-[#FE8DC6] to-[#ff7db7e1] bg-clip-text transition ease-in delay-150"
                            >
                                {e.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Header;