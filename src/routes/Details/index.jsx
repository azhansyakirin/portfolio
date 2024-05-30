import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ProjectArr } from '../../data';
import { Badge, Label } from '../../components';
import { Helmet } from 'react-helmet';
import Icons from '../../assets/icons/icons';
import { isMobile } from '../../utils/helper';

export const Details = ({ }) => {

    let { projectId } = useParams();

    let [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => setShowMenu(!showMenu)

    let navigate = useNavigate();

    let isMobileDevice = isMobile();

    let selectedProjectId = projectId ? projectId : ProjectArr[0]?.projectId;

    const project = ProjectArr.find(project => project.projectId === selectedProjectId) || {};

    console.log(project);

    if (!project) {
        return <div className='flex flex-col justify-center items-center gap-8 min-h-[100vh] [&_span]:text-3xl [&_span]:tracking-tighter [&_span]:font-jetbrains [&_span]:gradient-orange [&_p]:font-caveat [&_p]:text-2xl [&_p]:cursor-pointer'><span>Project not found</span><p onClick={() => navigate(-1)}>&larr; Go Back</p></div>;
    }

    const { title, description, timeline, image, badge, snapshot = [] } = project;

    const renderPageTitle = () => {
        return <Helmet>
            <title>{`Portfolio | Project | ${title}`}</title>
            <meta name='description' content={description} />
            <meta property="og:title" content={`Project | ${title}`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:title" content={`Project | ${title}`} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    };

    return (
        <div className='flex flex-col tablet:flex-row'>
            {isMobileDevice ?
                showMenu ?
                    (<section id="left-panel" className='bg-app-black-1 w-full tablet:w-[25%] px-0 py-8 tablet:py-[109px] absolute inset-0 top-0 left-0 z-50 h-full overflow-hidden'>
                        <div className='bg-app-black-1 flex flex-col gap-4 items-center justify-start text-left h-full w-full overflow-scroll'>
                            <div className='w-3/4 relative flex flex-row justify-between content-center items-center'>
                                <span className='text-left mb-8'><Label type="sectionTitle" icon="bulb">Projects</Label></span>
                                <span className='absolute top-3 right-0 cursor-pointer' onClick={handleShowMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </div>
                            {ProjectArr.map((obj, index) => (
                                <div key={index} className={`shadow-md w-full py-4 px-8 h-20 ${selectedProjectId === obj.projectId ? 'gradient-orange' : ''}`}>
                                    <h1
                                        onClick={() => {navigate(`/portfolio/recent-project/${obj.projectId}`); handleShowMenu()}}
                                        className='cursor-pointer'
                                    >
                                        {obj.title}
                                    </h1>
                                </div>
                            ))}
                            <p onClick={() => navigate('/portfolio')} className='cursor-pointer'>&larr; Go Back</p>
                        </div>
                    </section>)
                    : (<span className='absolute top-5 right-5 z-50 cursor-pointer' onClick={handleShowMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </span>)
                :
                (<section id="left-panel" className='bg-app-black-1 w-full tablet:w-[25%] px-0 py-[109px] relative overflow-hidden'>
                    <div className='flex flex-col gap-4 items-center justify-start text-left w-full'>
                        <span className='text-left mb-8'><Label type="sectionTitle" icon="bulb">Projects</Label></span>
                        {ProjectArr.map((obj, index) => (
                            <div className={`shadow-md w-full py-4 px-8 h-20 ${selectedProjectId === obj.projectId ? 'gradient-orange' : ''}`}>
                                <h1
                                    key={index}
                                    onClick={() => navigate(`/portfolio/recent-project/${obj.projectId}`)}
                                    className='cursor-pointer'
                                >{obj.title}</h1>
                            </div>
                        ))}
                        <p onClick={() => navigate('/portfolio')} className='cursor-pointer'>&larr; Go Back</p>
                    </div>
                </section>)
            }
            <section id="right-panel" className='bg-app-black-2 w-full tablet:w-[75%] relative overflow-hidden p-0'>
                {renderPageTitle()}
                <div
                    className="relative bg-neutral-900 min-h-[70vh] w-full p-12 tablet:p-20 flex items-center"
                    style={{
                        backgroundImage: `url(${project?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10">
                        <h1 className="text-3xl tablet:text-4xl text-wrap font-semibold text-white">{title}</h1>
                        <h1 className="text-xl inline-flex gap-4 items-center"><Icons iconId="calendar" style="w-6" /> {timeline}</h1>
                    </div>
                </div>
                <section>
                    <article className="my-8">
                        <h2 className="tablet:text-2xl font-semibold">Project Description</h2>
                        <div className="my-4">
                            <p>{description}</p>
                        </div>
                    </article>
                    <article className="my-8">
                        <h2 className="tablet:text-2xl font-semibold">Tech Stack</h2>
                        <div className="flex flex-row flex-wrap gap-1 my-4">
                            {badge.map(((x, idx) => (
                                <Badge item={x} index={idx} />
                            )))}
                        </div>
                    </article>
                    <article className="my-8">
                        <h2 className="tablet:text-2xl font-semibold">Project Snapshot(s)</h2>
                        <div className="flex flex-wrap gap-2 my-4 justify-center tablet:justify-start">
                            {snapshot.length ?
                                snapshot.map((x, idx) => (
                                    <img key={idx} src={x} className="max-w-[90%] tablet:max-w-[400px] rounded-md" />
                                ))
                                :
                                <p className="text-[#9d9d9d]">No snapshot</p>
                            }
                        </div>
                    </article>
                </section>
            </section>
        </div>
    )
}