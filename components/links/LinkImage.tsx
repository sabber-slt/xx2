import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    href: string;
    title: string;
    src: string;
    cls: string;
};

const LinkImage = (props: Props) => {
    return (
        <Link
            href={props.href}
            className={`relative ${props.cls} rounded-lg shadow-xl hov overflow-hidden vstack justify-end`}
        >
            <Image
                src={props.src}
                alt={props.title}
                sizes="60%"
                fill
                style={{ objectFit: "cover" }}
            />
            <div className="w-full h-16 bg-white center z-40">
                <h3 className="z-40 font-semibold text-center text-sm">
                    {props.title}
                </h3>
            </div>
        </Link>
    );
};

export default LinkImage;
