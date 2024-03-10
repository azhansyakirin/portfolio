import React from "react";

const AboutMe = ({ }) => {

    const text = "Seasoned frontend developer specializing in React, dedicated to crafting engaging and intuitive web applications. Well-versed in JavaScript, HTML, and CSS, with a keen understanding of component-based structures, effective state management, and responsive design principles.\nA collaborative team member committed to delivering top-notch, high-performance code. Enthusiastic about ongoing learning and staying abreast of the latest trends and best practices in frontend development."

    return (
        <div className="flex flex-col justify-center">
            <h1 className="sectionTitle">About Me</h1>
            <div className="p-8">
                <p className="text-lg tablet:text-2xl text-center">{text}</p>
            </div>
        </div>
    )
}

export default AboutMe;