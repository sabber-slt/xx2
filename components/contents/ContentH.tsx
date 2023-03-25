import React from "react";

type Props = {
    txt: string;
    cls?: string;
};

const ContentH = (props: Props) => {
    return (
        <h3
            className={`text-xl text-green-700 font-bold px-4 lg:px-0 w-full text-right ${props.cls}`}
        >
            {props.txt}
        </h3>
    );
};

export default ContentH;
