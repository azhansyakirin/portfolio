import React from "react";
import Label from "../Label/Label";
import Icons from "../../assets/icons/icons";

const AboutMe = ({ id = "", openModal, closeModal }) => {

    const text = "Seasoned frontend developer specializing in React, dedicated to crafting engaging and intuitive web applications. Well-versed in JavaScript, HTML, and CSS, with a keen understanding of component-based structures, effective state management, and responsive design principles.\nA collaborative team member committed to delivering top-notch, high-performance code. Enthusiastic about ongoing learning and staying abreast of the latest trends and best practices in frontend development."

    return (
        <section id={id} className="flex flex-col justify-center">
            <div>
                <Label type="title" cssClass="font-jetbrains p-4">About Me</Label>
            </div>
            <div className="flex flex-col justify-center tablet:flex-row">
                <img src="/portfolio/static/img/Azhan.jpg" className="w-[100%] tablet:w-[50%]" />
                <div className="text-left">
                    <Label type="paragraph" cssClass="font-monolisa text-sm break-normal text-justify p-4">{text}</Label>
                    <p onClick={() => { openModal() }} className="font-monolisa items-center inline-flex flex-row px-4 hover:text-transparent bg-gradient-to-l from-[#FE8DC6] to-[#ff7db7e1] bg-clip-text transition ease-in delay-150 cursor-pointer">
                        <Icons iconId="download" style="w-4 m-1" />
                        View Resume
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;