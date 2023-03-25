import React from "react";
import Link from "next/link";
import ImgBlur from "../images/ImgBlur";

type Props = {
    href: string;
    src: string;
    title: string;
    content: string;
};

const LinkCard = (props: Props) => {
    return (
        <div className="w-72 h-96 vstack bg-white rounded-lg shadow-xl overflow-hidden">
            <ImgBlur
                src={props.src}
                alt={props.title}
                size="60%"
                pri={false}
                cls="w-full h-44"
            />
            <div className="w-full h-12 center">
                <h3 className="font-semibold text-center">{props.title}</h3>
            </div>
            <div className="w-full h-36 center">
                <p className="text-sm px-2">{props.content}</p>
            </div>
            <Link
                href={props.href}
                className="text-green-700 font-semibold text-sm underline mb-2"
            >
                مطالعه بیشتر
            </Link>
        </div>
    );
};

export default LinkCard;
