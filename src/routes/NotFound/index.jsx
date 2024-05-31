import React from "react";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

export const NotFound = () => {

    const navigate = useNavigate();

    const renderPageTitle = () => {
        return <Helmet>
            <title>{`Portfolio | Page Not Found`}</title>
            <meta name='description' content="Welcome to my personal online portfolio." />
            <meta property="og:title" content={`Portfolio | Page Not Found`} />
            <meta property="og:description" content="Welcome to my personal online portfolio." />
            <meta property="og:image" content="/static/img/memoji.jpg" />
            <meta name="twitter:title" content={`Portfolio | Page Not Found`} />
            <meta name="twitter:description" content="Welcome to my personal online portfolio." />
        </Helmet>
    };

    return (
        <section className="flex flex-col text-left h-[100vh]">
            {renderPageTitle()}
            <h1 className="text-4xl text-left gradient-orange">Woops! Seem's like you hit wrong path</h1>
            <h1 className="text-4xl text-left font-caveat cursor-pointer" onClick={() => navigate('/')}>&larr; Go Back</h1>
        </section>
    )
}