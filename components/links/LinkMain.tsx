import React from "react";
import Link from "next/link";

type Props = {
    href: string;
    cls: string;
    txt: string;
};

const LinkMain = (props: Props) => {
    return (
        <Link
            href={props.href}
            className={`${props.cls} bg-green-700 rounded-lg shadow-lg font-medium center text-white text-sm hov`}
        >
            {props.txt}
        </Link>
    );
};

export default LinkMain;
