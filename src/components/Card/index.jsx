import { Link } from 'react-router-dom';
import { Pill as Badge } from '../Pill';

export const Card = ({ item }) => {

    if (!item) return null;

    const {
        title,
        description,
        recommended,
        image,
        badge = [],
        link = "",
        projectId
    } = item;

    return (
        <div className="w-72 bg-app-black-1 shadow-xl rounded-md cursor-pointer">
            <figure className='h-36 overflow-hidden rounded-t-md flex items-center content-center'>
                <img src={image || "https://placehold.co/600x400"} alt={title} />
            </figure>
            <div className="relative p-6 flex flex-col items-start">
                <h2 className="font-caveat text-3xl py-4">
                    {title}
                </h2>
                <p className='text-lg opacity-70'>{description}</p>
                <div className="flex flex-row flex-wrap gap-2 justify-start py-2">
                    {badge.map(((x, idx) => (
                        <Badge item={x} index={idx} key={idx} />
                    )))}
                </div>
                {link &&
                    <a href={link} target='_blank' className='inline-flex items-center gap-1 hover:gradient-orange' rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>

                        Live Preview
                    </a>
                }
            </div>
        </div>
    )

}
