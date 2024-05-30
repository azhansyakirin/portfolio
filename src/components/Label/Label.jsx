import React from "react";
import Icons from "../../assets/icons/icons";

const Label = ({ children, type, cssClass, icon }) => {

    const labelType = {
        title: () => <h1 className={cssClass}>{children}</h1>,
        span: () => <span className={cssClass}>{children}</span>,
        paragraph: () => <p className={cssClass}>{children}</p>,
        sectionTitle: () => <h1 className="text-4xl tracking-wide font-caveat flex flex-row gap-4 items-center"><Icons iconId={icon} style="w-9 tablet:w-12" /> {children}</h1>,
    }

    return labelType[type]();
}

export default Label;