import React from "react";

type Props = {
    txt: string;
    cls?: string;
};

const ContentP = (props: Props) => {
    return (
        <p
            className={`${props.cls} px-4 lg:px-0 whitespace-pre-line w-full text-right`}
        >
            {props.txt}
        </p>
    );
};

export default ContentP;
