import React from "react";
import ImgBlur from "../images/ImgBlur";

type Props = {
    src: string;
    alt: string;
    content: string;
};

const CardIntro = (props: Props) => {
    return (
        <div className="w-96 h-full vstack justify-center">
            <ImgBlur
                src={props.src}
                alt={props.alt}
                pri={false}
                size="50%"
                cls="w-28 h-28"
            />
            <p className="text-center px-3 lg:px-0 mt-3">{props.content}</p>
        </div>
    );
};

export default CardIntro;
