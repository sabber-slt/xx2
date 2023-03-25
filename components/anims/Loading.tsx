import React from "react";
import { motion } from "framer-motion";
import ImgBlur from "../images/ImgBlur";

const Loading = () => {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", repeat: Infinity, duration: 2 }}
            className="w-full h-screen flex items-center justify-center"
        >
            <ImgBlur
                src="/pics/load.png"
                alt="loading"
                size="50%"
                pri={true}
                cls="w-20 h-20"
            />
        </motion.div>
    );
};

export default Loading;
