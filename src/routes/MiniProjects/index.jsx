import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Card } from '../../components';
import { Helmet } from 'react-helmet';
import Icons from '../../assets/icons/icons';
import { getDate } from '../../utils/helper';
import { Loader } from '../../components/Loader';
import { Breadcrumb } from '../../components/Breadcrumb';

export const MiniProjects = (props) => {

    const navigate = useNavigate()

    const { routes } = props;

    let { uniqueId } = useParams();

    let [showLoader, setShowLoader] = useState(true);
    let [fetchRes, setFetchRes] = useState([]);

    function fetchApiRequest() {
        fetch('/api/mini-projects.json')
            .then((res) => res.json())
            .then((data) => {
                setFetchRes(data);
                setShowLoader(false);
            })
            .catch(err => { console.error(err) })
    }

    useEffect(() => {
        if (fetchRes.length === 0) {
            fetchApiRequest();
        }
    }, [])

    const ProjectArr = fetchRes?.items || [];

    let selectedProjectId = uniqueId ? uniqueId : ProjectArr[0]?.uniqueId;

    const project = ProjectArr.find(project => project.uniqueId === selectedProjectId) || {};

    if (!project) {
        return <div className='flex flex-col justify-center items-center gap-8 min-h-[100vh] [&_span]:text-3xl [&_span]:tracking-tighter [&_span]:font-jetbrains [&_span]:gradient-orange [&_p]:font-caveat [&_p]:text-2xl [&_p]:cursor-pointer'><span>Project not found</span><p onClick={() => navigate(-1)}>&larr; Go Back</p></div>;
    }

    const { idx, title, image, description, link, figmaLink, timeline, snapshot } = project;

    function renderCardLists() {

        let mappedObject = ProjectArr.map((x, i) => {

            let props = {
                item: {
                    title: x.title,
                    description: x.description,
                    image: x.image,
                    link: x.link,
                }
            };

            return <Card key={x.uniqueId} {...props} />
        })

        return mappedObject;
    }

    const renderPageTitle = () => {
        return <Helmet>
            <title>{`Portfolio | Mini Projects | ${title}`}</title>
            <meta name='description' content={description} />
            <meta property="og:title" content={`Project | ${title}`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:title" content={`Figma Design | ${title}`} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    };

    return (
        <Fragment>
            {renderPageTitle()}
            {showLoader ?
                <Loader />
                : <div className='flex flex-col p-8 tablet:p-32 justify-center'>
                    <Breadcrumb />
                    <div className='w-full top-1 left-1 py-4'>
                        <a className="cursor-pointer hover:gradient-orange" onClick={() => navigate('/')}>&larr; Return</a>
                    </div>
                    <article className='my-8 flex flex-wrap gap-8 justify-center tablet:justify-start'>
                        {renderCardLists()}
                    </article>
                    <div className='w-full text-center py-4'><p className='font-jetbrains text-sm'>{`${getDate('year')} | Made with `}<span className="gradient-orange">&hearts;</span> by <a href='https://linkedin.azhansyakirin.dev' target="_blank" className='hover:gradient-orange'>Azhan Syakirin</a></p></div>
                </div>
            }
        </Fragment>
    )
}