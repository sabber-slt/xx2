import React from "react";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../components/Footer"));

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    return (
        <>
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
