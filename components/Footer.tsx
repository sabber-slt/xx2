import React from "react";
import ContainerGrid from "./containers/ContainerGrid";
import LinkText from "./links/LinkText";

const Footer = () => {
    return (
        <div className="w-full h-[60vh] bg-green-700 vstack justify-center mt-10">
            <ContainerGrid gridCols="grid-cols-4 lg:grid-cols-4 space-x-5">
                <LinkText href="/" txt="خانه" color="text-white" />
                <LinkText href="/about" txt="درباره ما" color="text-white" />
                <LinkText href="/foods" txt="آشپزی" color="text-white" />
                <LinkText href="/articles" txt="مقالات" color="text-white" />
                <LinkText href="/contact" txt="تماس" color="text-white" />
            </ContainerGrid>
            <div className="vstack items-center justify-center">
                <p className="text-white text-sm text-center px-3">
                    آواکادو پلتفرم جامع رژیم درمانی و سبک زندگی می باشد که از
                    سال 1398 فعالیت خود را آغاز نمود و همواره در حال حرکت رو به
                    جلو در راستای تلفیق تکنولوژی روز و دانش پزشکی می باشد
                </p>
            </div>
        </div>
    );
};

export default Footer;
