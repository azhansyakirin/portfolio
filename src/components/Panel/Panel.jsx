import React from "react";
import classNames from "classnames";
import Markdown from "react-markdown";
import Icons from "../../assets/icons/icons";
import { Badge } from "../Badge";
import css from "./Panel.module.scss";
import globalCss from "./../../Scss/Global.module.scss";

export const Panel = ({ data, index }) => {

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
                        <Icons iconId="calendar" style="w-6" />
                        <p>{data.timeline}</p>
                    </span>
                    <span className={css.WorkplaceLocation}>
                        <Icons iconId="pin" style="w-6" />
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
                    <Badge item={x} index={idx} key={idx} />
                ))}
            </div>
        )
    };


    return (
        <div className={globalCss["gradient-border"]} key={index}>
            <div className={classNames(css.Panel)}>
                {renderPanelHead(data)}
                {renderPanelBody(data)}
                {renderPanelFooter(data)}
            </div>
        </div>
    )
}