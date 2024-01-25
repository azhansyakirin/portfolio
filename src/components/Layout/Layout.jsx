import React from "react";

const Layout = ({ children, cssClass }) => {
    return <div className={cssClass}>{children}</div>
}

export default Layout;