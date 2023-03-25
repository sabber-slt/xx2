import React, { useState } from "react";
import Image from "next/image";

type Props = {
    src: string;
    alt: string;
};

const ImgBody = (props: Props) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <div
            className={`relative w-full lg:w-[60vw] h-[55vh] lg:h-[60vh] lg:rounded-lg lg:shadow-xl overflow-hidden mt-10`}
        >
            <Image
                src={props.src}
                alt={props.alt}
                fill
                sizes="100%"
                priority
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

export default ImgBody;
