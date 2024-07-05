import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Card, Label } from '../../components';
import { Helmet } from 'react-helmet';
import Icons from '../../assets/icons/icons';
import { isMobile } from '../../utils/helper';
import { Loader } from '../../components/Loader';
import { Breadcrumb } from '../../components/Breadcrumb';

export const Figma = (props) => {

    const { routes } = props;

    let { uniqueId } = useParams();

    let [showLoader, setShowLoader] = useState(false);
    let [showMenu, setShowMenu] = useState(false);
    let [fetchRes, setFetchRes] = useState([]);

    function fetchApiRequest() {
        fetch('/api/figma-design.json')
            .then((res) => res.json())
            .then((data) => {
                setFetchRes(data);
                setShowLoader(true);
            })
            .catch(err => { console.error(err) })
    }

    useEffect(() => {
        if (fetchRes.length === 0) {
            fetchApiRequest();
        }
    }, [])

    const ProjectArr = fetchRes?.items || [];

    const handleShowMenu = () => setShowMenu(!showMenu);

    let navigate = useNavigate();

    let isMobileDevice = isMobile();

    let selectedProjectId = uniqueId ? uniqueId : ProjectArr[0]?.uniqueId;

    const project = ProjectArr.find(project => project.uniqueId === selectedProjectId) || {};

    if (!project) {
        return <div className='flex flex-col justify-center items-center gap-8 min-h-[100vh] [&_span]:text-3xl [&_span]:tracking-tighter [&_span]:font-jetbrains [&_span]:gradient-orange [&_p]:font-caveat [&_p]:text-2xl [&_p]:cursor-pointer'><span>Project not found</span><p onClick={() => navigate(-1)}>&larr; Go Back</p></div>;
    }

    const { idx, title, image, description, link, figmaLink, timeline, snapshot } = project;

    const hasTimeline = timeline;
    const hasSnapshot = snapshot?.length;

    const renderPageTitle = () => {
        return <Helmet>
            <title>{`Portfolio | Figma Design | ${title || ""}`}</title>
            <meta name='description' content={description || ""} />
            <meta property="og:title" content={`Portfolio | Figma Design | ${title || ""}`} />
            <meta property="og:description" content={description || ""} />
            <meta property="og:image" content={image || ""} />
            <meta name="twitter:title" content={`Portfolio | Figma Design | ${title || ""}`} />
            <meta name="twitter:description" content={description || ""} />
        </Helmet>
    };

    return (
        <Fragment>
            {renderPageTitle()}
            {showLoader ?
                <div className='flex flex-col tablet:flex-row'>
                    {isMobileDevice ?
                        showMenu ?
                            (/* --- Menu Open --- */
                                <navigation id="left-panel" className='bg-app-black-1 w-full tablet:w-[25%] px-0 py-8 tablet:py-[109px] absolute inset-0 top-0 left-0 z-50 h-full overflow-hidden'>
                                    <div className='bg-app-black-1 flex flex-col gap-4 items-center justify-start text-left h-full w-full overflow-scroll'>
                                        <div className='w-3/4 relative flex flex-row justify-between content-center items-center'>
                                            <span className='text-left mb-8'><Label type="sectionTitle" icon="bulb">Projects</Label></span>
                                            <span className='absolute top-3 right-0 cursor-pointer' onClick={handleShowMenu}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                        </div>
                                        {ProjectArr?.map((obj, index) => (
                                            <div key={index} className={`shadow-md w-full py-4 px-8 h-20 ${selectedProjectId === obj.uniqueId ? 'gradient-orange' : ''}`}>
                                                <h1
                                                    onClick={() => { navigate(`${routes}/${obj.uniqueId}`); handleShowMenu() }}
                                                    className='cursor-pointer'
                                                >
                                                    {obj.title}
                                                </h1>
                                            </div>
                                        ))}
                                        <p onClick={() => navigate('/')} className='cursor-pointer'>&larr; Go Back</p>
                                    </div>
                                </navigation>
                            ) : (/* --- Menu Close --- */
                                <span className='absolute top-5 right-5 z-50 cursor-pointer' onClick={handleShowMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                    </svg>
                                </span>
                            ) : (/* --- Tablet and Desktop View --- */
                            <section id="left-panel" className='bg-app-black-1 w-full tablet:w-[25%] px-0 py-[109px] relative overflow-hidden'>
                                <div className='flex flex-col gap-4 items-center justify-start text-left w-full'>
                                    <span className='text-left mb-8'><Label type="sectionTitle" icon="bulb">Projects</Label></span>
                                    <div className='place-self-start px-4'><Breadcrumb /></div>
                                    {ProjectArr?.map((obj, index) => (
                                        <div className={`shadow-md w-full py-4 px-8 h-20 ${selectedProjectId === obj.uniqueId ? 'gradient-orange' : ''}`}>
                                            <h1
                                                key={index}
                                                onClick={() => navigate(`${routes}/${obj.uniqueId}`)}
                                                className='cursor-pointer'
                                            >{obj.title}</h1>
                                        </div>
                                    ))}
                                    <p onClick={() => navigate('/')} className='cursor-pointer'>&larr; Go Back</p>
                                </div>
                            </section>)
                    }
                    <section id="right-panel" className='bg-app-black-2 w-full tablet:w-[75%] relative overflow-hidden p-0'>
                        <div
                            className="relative bg-neutral-900 min-h-[70vh] w-full p-12 tablet:p-20 flex items-center"
                            style={{
                                backgroundImage: `url(${project?.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                            <div className="relative z-10">
                                <h1 className="text-3xl tablet:text-4xl text-wrap font-semibold text-white">{title}</h1>
                                {hasTimeline && <h1 className="text-xl inline-flex gap-4 items-center"><Icons iconId="calendar" style="w-6" /> {timeline}</h1>}
                            </div>
                        </div>
                        <section>
                            <article className="my-8">
                                <h2 className="tablet:text-2xl font-semibold">Project Description</h2>
                                <div className="my-4 flex flex-col gap-4">
                                    <p>{description}</p>
                                    <a href={figmaLink} target='_blank'>
                                        <p className='inline-flex gap-4 items-center cursor-pointer hover:gradient-orange'>
                                            <Icons iconId="link" style="w-6 text-white" /> Preview in Figma
                                        </p>
                                    </a>
                                </div>
                            </article>
                            <article className="my-8">
                                <h2 className="tablet:text-2xl font-semibold">Project Snapshot(s)</h2>
                                <div className="flex flex-row flex-wrap gap-2 my-4 justify-center tablet:justify-start">
                                    {hasSnapshot ?
                                        snapshot?.map((x, idx) => (
                                            <img key={idx} src={x} className="max-w-[90%] tablet:max-w-[320px] rounded-md" />
                                        ))
                                        :
                                        <p className="text-[#9d9d9d]">No snapshot</p>
                                    }
                                </div>
                            </article>
                        </section>
                    </section>
                </div>
                : <Loader />
            }
        </Fragment>
    )
}