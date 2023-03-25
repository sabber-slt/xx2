import React from "react";
import Link from "next/link";

type Props = {
    href: string;
    color: string;
    txt: string;
};

const LinkText = (props: Props) => {
    return (
        <Link
            href={props.href}
            className={`text-sm font-bold underline ${props.color}`}
        >
            {props.txt}
        </Link>
    );
};

export default LinkText;
