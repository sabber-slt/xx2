import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriter = () => {
    const [text] = useTypewriter({
        words: ["تناسب اندام", "برنامه غذایی", "سبک زندگی سالم"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <h1 className="mb-2 font-bold text-xl text-green-700">
            {text}
            <Cursor />
        </h1>
    );
};

export default TypeWriter;
