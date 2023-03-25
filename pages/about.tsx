import ContentH from "@/components/contents/ContentH";
import ContentP from "@/components/contents/ContentP";
import ImgHeader from "@/components/images/ImgHeader";
import React from "react";

type Props = {};

const About = (props: Props) => {
    return (
        <div className="w-full vstack justify-center">
            <ImgHeader
                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1679656300/pexels-huy-chien-tran-1756665_dqjsiz.jpg"
                alt="آواکادو"
            />
            <h1 className="text-green-700 font-bold text-center text-xl mt-5">
                درباره آواکادو
            </h1>
            <div className="w-full lg:w-[60vw] flex flex-col items-start">
                <ContentP
                    cls="mt-5"
                    txt="کلینیک آواکادو فعالیت خود را از سال 1398 با جمعی از متخصصین و مشاورین تغذیه آغاز نمود، با گذشت زمان همراه با تغییر سبک زندگی مردم و حرکت به سمت تکنولوژی ، مدیران کلینیک تصمیم گرفتند تا برای راحتی رفاه مراجعه کنندگان و همچنین ارائه خدمات با کیفیت بهتر، مجموعه اپلیکیشن آواکادو را برای بهبود کیفیت سبک زندگی و تغذیه راه اندازی کنند. در آواکادو رژیم های غذایی توسط متخصصین ما به دقت طراحی می گردد و خدمات ما شامل پشتیبانی کامل به کاربران عرضه می شود."
                />
                <ContentH cls="mt-5" txt="پلن های آینده" />
                <ContentP
                    cls="mt-5"
                    txt="در آواکادو در حال حاضر بر روی افزودن خدمات روانشناسی شامل انواع تست های مجاز شخصی و زوجین ، ارتباط با مشاورین و موارد دیگر، تحقیقات جامعی را آغاز کرده ایم و تصمیم داریم برای تابستان 1402 این قسمت را به پلتفرم اضافه کنیم. اهمیت این موضوع برای ما با توجه به گسترش مشکلات و بیماری های اجتماعی بسیار مهم است و شعار ما همواره همراهی و ایستادگی در کنار مردم بوده و خواهد بود و همواره تلاش می کنیم کیفیت زندگی شما را بهبود بخشیم."
                />
            </div>
        </div>
    );
};

export default About;
