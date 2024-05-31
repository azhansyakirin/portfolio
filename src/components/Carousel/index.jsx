import React from "react";

export const Carousel = ({ carouselData }) => {

    if (!carouselData) return null;

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {
                    carouselData.map((x, idx) => (
                        <li key={idx}>
                            <img src={x} className="w-[100px] object-contain" alt="" />
                        </li>
                    ))
                }
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {
                    carouselData.map((x, idx) => (
                        <li key={idx}>
                            <img src={x} className="w-[100px] object-contain" alt="" />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}