import React from "react";
import classNames from "classnames";
import "./Hero.scss";

const Hero = ({ id }) => {
    return (
        <section id={id} className={classNames("Hero flex justify-center min-h-[90vh] flex-col")}>
            <div className="justify-center items-center flex flex-col relative">
                <h1 className="heroTitle font-notosans text-5xl tablet:text-8xl">Frontend Developer</h1>
                <p className="font-jetbrainsItalic text-3xl italic">Hi! It's me, Azhan</p>
            </div>
        </section>
    )
}

export default Hero;