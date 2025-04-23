import React from "react";
import classNames from "classnames";
import Markdown from "react-markdown";
import Icons from "../../assets/icons/icons";
import { Pill as Badge } from "../Pill";
import css from "./Panel.module.scss";
import globalCss from "./../../Scss/Global.module.scss";

export const Panel = ({ data }) => {

    const renderPanelHead = (data) => {
        return (
            <div className={css.PanelHead}>
                <div className={css.LeftContent}>
                    <img
                        src={data.image}
                        className={css.Avatar}
                    />
                    <div className={css.AvatarTitle}>
                        <p className="font-bold text-xl uppercase">{data.title}</p>
                        <p>{data.position}</p>
                    </div>
                </div>
                <div className={css.RightContent}>
                    <span className={css.PeriodOfWorking}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                        <p>{data.timeline}</p>
                    </span>
                    <span className={css.WorkplaceLocation}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        <p>{data.location}</p>
                    </span>
                </div>
            </div>
        )
    };

    const renderPanelBody = (data) => {
        return (
            <div className={classNames(css.PanelBody)}>
                <Markdown>{data.description}</Markdown>
            </div>
        )
    };

    const renderPanelFooter = (data) => {

        let list = [];

        list = data.badge;

        return (
            <div className={css.PanelFoot}>
                {list.map((x, idx) => (
                    <Badge item={x} key={idx} />
                ))}
            </div>
        )
    };


    return (
        <div className={globalCss["gradient-border"]}>
            <div className={classNames(css.Panel)}>
                {renderPanelHead(data)}
                {renderPanelBody(data)}
                {renderPanelFooter(data)}
            </div>
        </div>
    )
}