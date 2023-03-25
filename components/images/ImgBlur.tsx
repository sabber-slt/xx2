import React, { useState } from "react";
import Image from "next/image";

type Props = {
    src: string;
    alt: string;
    pri: boolean;
    cls: string;
    size: string;
};

const ImgBlur = (props: Props) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <div className={`relative ${props.cls}`}>
            <Image
                src={props.src}
                alt={props.alt}
                fill
                sizes={props.size}
                priority={props.pri}
                className={isLoading ? "unblur" : ""}
                style={{ objectFit: "cover" }}
                onLoadingComplete={() => setLoading(false)}
            />

            <style jsx global>{`
                .unblur {
                    animation: unblur 1s linear;
                }
                @keyframes unblur {
                    from {
                        filter: blur(20px);
                    }
                    to {
                        filter: blur(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default ImgBlur;
