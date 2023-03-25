import { Suspense } from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import ImgBlur from "@/components/images/ImgBlur";
import TypeWriter from "@/components/contents/TypeWriter";
import LinkMain from "@/components/links/LinkMain";
import { getMains } from "@/hooks/usePublic";
import { Main } from "../types/interfaces";

const CardIntro = dynamic(() => import("../components/cards/CardIntro"));
const ContainerGrid = dynamic(
    () => import("../components/containers/ContainerGrid")
);
const LinkImage = dynamic(() => import("../components/links/LinkImage"));
const LinkCard = dynamic(() => import("../components/links/LinkCard"));
export interface MainProps {
    home: Main[];
    article: Main[];
}

const Home: NextPage = () => {
    const { data, isLoading } = useQuery<MainProps, Error>(
        ["getMains"],
        getMains
    );
    if (isLoading) {
        return null;
    }
    return (
        <Suspense fallback={null}>
            <div className="overflow-hidden">
                <div className="w-full h-screen flex flex-col lg:flex-row">
                    <div className="w-full lg:w-[50vw] h-[50vh] lg:h-full vstack justify-center">
                        <TypeWriter />
                        <h3 className="my-5 text-center text-xl lg:text-2xl z-50">
                            مسیر سلامتی از آواکادو می گذره!
                        </h3>
                        <p className="text-center px-5">
                            ارائه برنامه های متنوع غذایی، ورزشی، دستور پخت
                            غذاهای سالم، کالری شماری رایگان و ...
                        </p>
                        <div className="w-96 hstack justify-around mt-5">
                            <LinkMain
                                href="/"
                                txt="ورود به پنل"
                                cls="w-36 h-10"
                            />
                            <LinkMain
                                href="/auth/register"
                                txt="ثبت نام"
                                cls="w-36 h-10"
                            />
                        </div>
                    </div>
                    <ImgBlur
                        src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1678514331/oooooo_bqrbdz.png"
                        alt="آواکادو"
                        pri={true}
                        size="100%"
                        cls="w-full lg:w-[50vw] h-[50vh] lg:h-full"
                    />
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-around space-y-7 lg:space-y-0 mt-10">
                    {data?.home.slice(0, 3).map((item) => (
                        <CardIntro
                            key={item.id}
                            src={item.media}
                            alt={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
                <div className="w-full py-10 lg:py-24 vstack justify-center bg-green-700 mt-10">
                    <p className="text-white text-center px-4 lg:px-10">
                        آواکادو پلتفرم حوزه سلامت است که به در سال 1400 با
                        مشارکت تعدادی از متخصصین تغذیه و روانشناسان فعالیت خود
                        را جهت همسویی با تکنولوژی و ارائه خدمات به همراهان
                        آواکادو آغاز نمود. آواکادو به کاربران این امکان را می
                        دهد تا به سادگی و با کمک ابزارهایی که در این پلتفرم وجود
                        دارد، به سبک زندگی سالمی دست پیدا کنند و یک ابزار
                        قدرتمند برای بهبود سبک زندگی سالم می باشد. هم اکنون تیم
                        آواکادو در حال آماده سازی بستر روانشناسی می باشد و در
                        آینده نه چندان دور شما می توانید انواع تست های روانشناسی
                        فردی، قبل از ازدواج و … را در این پلتفرم بیابید.
                    </p>
                </div>
                <div className="w-full center mt-10">
                    <ContainerGrid gridCols="grid-cols-2 lg:grid-cols-4">
                        {data?.home.slice(6, 10).map((item) => (
                            <LinkImage
                                key={item.id}
                                href="/"
                                src={item.media}
                                title={item.title}
                                cls="w-40 lg:w-64 h-56 lg:h-72"
                            />
                        ))}
                    </ContainerGrid>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-around mt-10 space-y-5 lg:space-y-0">
                    {data?.article.map((item) => (
                        <LinkCard
                            key={item.id}
                            href="/"
                            title={item.title}
                            src={item.media}
                            content={item.desc}
                        />
                    ))}
                </div>
            </div>
        </Suspense>
    );
};
export default Home;
export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();
    await queryClient.fetchQuery(["getMains"], getMains);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
