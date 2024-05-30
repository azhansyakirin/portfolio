import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../Badge';

export const Card = ({ item, index }) => {

    if (!item) return null;

    const { title, description, recommended, image, badge = [], link = "", projectId } = item;

    return (
        <Link
            to={projectId ? `/portfolio/${projectId}` : "#"}
            className="card w-full bg-app-black-1 shadow-xl rounded-md cursor-pointer"
        >
            <figure>
                {recommended && <div className='bg-red-500 absolute top-0 left-0 px-3 py-1 rounded-tl-md rounded-br-md'>{recommended}</div>}
                <img src={image || "https://placehold.co/600x400"} alt={title} />
            </figure>
            <div className="card-body relative">
                <h2 className="card-title text-2xl py-4">
                    {title}
                </h2>
                <p className='text-lg opacity-70'>{description}</p>
                <div className="card-actions justify-start py-2">
                    {badge.map(((x, idx) => (
                        <Badge item={x} index={idx} key={idx} />
                    )))}
                </div>
                {link &&
                    <a href={link} target='_blank' className='inline-flex gap-1 hover:gradient-primary'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                        Live Preview
                    </a>
                }
            </div>
        </Link>
    )

}
