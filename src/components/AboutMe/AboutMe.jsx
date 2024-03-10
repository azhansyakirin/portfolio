import React from "react";
import Label from "../Label/Label";
import Icons from "../../assets/icons/icons";

const AboutMe = ({ id = "", openModal, closeModal }) => {

    const text = "Seasoned frontend developer specializing in React, dedicated to crafting engaging and intuitive web applications. Well-versed in JavaScript, HTML, and CSS, with a keen understanding of component-based structures, effective state management, and responsive design principles.\nA collaborative team member committed to delivering top-notch, high-performance code. Enthusiastic about ongoing learning and staying abreast of the latest trends and best practices in frontend development."

    const demoText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const arrSample = [
        { idx: 1, timeline: 'Feb 2022 - Current', title: "Lorem Ipsum", description: demoText, techStack: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Tailwind', 'Bootstrap', 'DaisyUi'] },
        { idx: 2, timeline: 'Mar 2021 - Feb 2022', title: "Lorem Ipsum", description: demoText, techStack: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira'] },
        { idx: 3, timeline: 'Feb 2021 - Mar 2021', title: "Lorem Ipsum", description: demoText, techStack: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira'] },
        { idx: 4, timeline: 'Mar 2020 - Feb 2021', title: "Lorem Ipsum", description: demoText, techStack: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira'] },
    ]

    console.log('Not %2', (arrSample && arrSample.length % 2 !== 0))

    return (
        <section id={id} className="flex flex-col justify-center">
            <div>
                <Label type="title" cssClass="font-jetbrains p-4">About Me</Label>
            </div>
            <div className="flex flex-col justify-center tablet:flex-row">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical font-notosans">
                    {
                        arrSample.map((item, index) => (
                            <li key={index}>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} md:text-${index % 2 === 0 ? 'start' : 'end'} mb-10`}>
                                    <time className="italic">({item.timeline})</time>
                                    <div className="text-lg font-black">{item.title}</div>
                                    {item.description}
                                    <div className="flex flex-row flex-wrap gap-1">
                                        {
                                            item.techStack.map((item, index) => (
                                                <div key={index} className="rounded px-4 py-1 bg-[#191817]">
                                                    <span className="text-white">{item}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <hr />
                            </li>
                        ))}
                </ul>
            </div>
            <section className="flex flex-row flex-wrap gap-4 justify-center">
                {
                    arrSample.map((x, idx) => (
                        <div key={idx} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="flex flex-row flex-wrap gap-1">
                                        {
                                            x.techStack.map((item, index) => (
                                                <div key={index} className="rounded-md px-3 py-1 bg-[#fdfdfd]">
                                                    <span className="text-black">{item}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </section>
        </section>


    )
}

export default AboutMe;