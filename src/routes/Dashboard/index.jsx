import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import {
    Footer,
    Label,
} from "./../../components";
import {
    TimelineArr,
} from './../../data';
import './../../App.css'
import globalCss from "./../../Scss/Global.module.scss";
import Icons from '../../assets/icons/icons';
import { Panel } from '../../components/Panel/Panel';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Loader } from '../../components/Loader';

export const Dashboard = () => {

    const [language, setLanguage] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('/api/languages.json')
                .then((res) => res.json())
                .then((data) => setLanguage(data))
                .catch((error) => console.error('Error fetching the language data:', error))
        }, 1000)
    }, []);

    const renderPageTitle = () => {
        return <Helmet>
            <title>{`Portfolio | Azhan Syakirin`}</title>
            <meta name='description' content="Welcome to my personal online portfolio." />
            <meta property="og:title" content={`Portfolio | Azhan Syakirin`} />
            <meta property="og:description" content="Welcome to my personal online portfolio." />
            <meta property="og:image" content="/static/img/memoji.jpg" />
            <meta name="twitter:title" content={`Portfolio | Azhan Syakirin`} />
            <meta name="twitter:description" content="Welcome to my personal online portfolio." />
        </Helmet>
    };

    return (
        <>
            {renderPageTitle()}
            {language ?
                <div className='flex flex-col tablet:flex-row'>
                    <section id="left-panel" className='bg-[#292929] w-full tablet:w-[30%] px-[3rem] pt-[109px] relative overflow-hidden'>
                        <figure className='absolute top-3 -right-5 rounded-full'>
                            <img className='object-cover w-40 rounded-full -rotate-12' src="/static/img/memoji.jpg" />
                        </figure>
                        <main id="Name" className='py-8 text-3xl desktop:text-4xl'>
                            <span className='font-caveat gradient-orange'>{language?.['app.profile.greet']}</span>
                            <h1 className='font-bold tracking-widest'>{language?.['app.profile.name']}</h1>
                        </main>
                        <main id="JobTitle" className='py-8 flex flex-row gap-8'>
                            <Icons style="w-12 tablet:w-10" iconId="code" />
                            <h1 className='font-jetbrains text-2xl desktop:text-4xl tracking-widest'>{language?.['app.profile.role']}</h1>
                        </main>
                        <main id="CoreDetails" className='py-8 flex flex-col gap-4'>
                            {language?.['app.profile.basicInformation']?.map((obj, index) => (
                                <div className='flex flex-row gap-4 tablet:gap-8 items-center' key={index}>
                                    <Icons iconId={obj.icon} style="w-8 desktop:w-10" />
                                    <div>
                                        <p className='font-bold'>{obj.title}</p>
                                        <a className='cursor-pointer hover:gradient-orange' href={obj.actionUrl}>{obj.label}</a>
                                    </div>
                                </div>))}
                        </main>
                        <main id="EducationField" className='py-8 flex flex-col gap-4'>
                            <Label type="sectionTitle" icon="education">Education</Label>
                            <div className='flex flex-col gap-4 tablet:p-8'>
                                {language?.['app.profile.education']?.map((obj, index) => (
                                    <article key={index}>
                                        <p className='font-bold'>{obj.course}</p>
                                        <p>{obj.school}</p>
                                        <p>{obj.year}</p>
                                    </article>
                                ))}
                            </div>
                        </main>
                        <main id="Languages" className='py-8 flex flex-col gap-4'>
                            <Label type="sectionTitle" icon="language">Languages</Label>
                            <div className='flex flex-col gap-4 tablet:p-8'>
                                {language?.['app.profile.languageSpoken']?.map((obj, index) => (
                                    <article key={index}>
                                        <p className='font-bold'>{obj.lang}</p>
                                        <p>{obj.rate}</p>
                                    </article>
                                ))}
                            </div>
                        </main>
                        <main id="ContactReferences" className='py-8 flex flex-col gap-4'>
                            <Label type="sectionTitle" icon="people">References</Label>
                            <div className='flex flex-col gap-4 tablet:p-8'>
                                {language?.['app.profile.contactReference']?.map((obj, index) => (
                                    <article key={index}>
                                        <p className='font-bold'>{obj.name}</p>
                                        <p>{obj.company}</p>
                                        <p>{obj.position}</p>
                                        <p>{obj.contact}</p>
                                    </article>
                                ))}
                            </div>
                        </main>
                    </section>
                    <section id="right-panel" className='w-full tablet:w-[70%]'>
                        <main id="WorkExperiences" className='py-8 flex flex-col gap-8'>
                            <Label type="sectionTitle" icon="briefcase">Work Experiences</Label>
                            <div className='flex flex-col gap-8'>
                                {TimelineArr.map((obj, idx) => (
                                    <Panel data={obj} index={idx} />
                                ))}
                            </div>
                        </main>
                        <main id="SkillSet" className='py-8 flex flex-col gap-8'>
                            <Label type="sectionTitle" icon="terminal">Skill Sets</Label>
                            <div className={classNames(globalCss['gradient-border'])}>
                                <div className='bg-app-black-1 flex flex-row flex-wrap gap-4 rounded-md p-8'>
                                    {language?.['app.profile.techStack']?.map((obj, index) => (
                                        <div className='rounded-md bg-app-black-3 px-4 py-2 flex flex-row gap-2 items-center' key={index}>
                                            <img src={obj.icon} className='w-6 object-contain' />
                                            <p className='font-semibold text-lg'>{obj.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </main>
                        <main className='flex flex-row flex-wrap gap-4 py-8'>
                            <Link className='font-caveat gradient-orange text-2xl tablet:text-3xl hover:text-white hover:underline' to="/recent-project/">Projects</Link>
                            <Link className='font-caveat gradient-orange text-2xl tablet:text-3xl hover:text-white hover:underline' to="/side-project/">Side Project</Link>
                            <Link className='font-caveat gradient-orange text-2xl tablet:text-3xl hover:text-white hover:underline' to="/figma-design">Figma Design</Link>
                            <Link className='font-caveat gradient-orange text-2xl tablet:text-3xl hover:text-white hover:underline' to="/community-engagement">Community Engagement</Link>
                        </main>
                    </section>
                    <Footer />
                </div>
                : <Loader />
            }
        </>
    )
}
