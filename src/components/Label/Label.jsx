import React from "react";

const Label = ({ children, type, cssClass }) => {

    const labelType = {
        title: () => (<h1 className={cssClass}>{children}</h1>),
        span: () => (<span className={cssClass}>{children}</span>),
        paragraph: () => (<p className={cssClass}>{children}</p>),
    }

    return labelType[type]();
}

export default Label;