import React from "react";
import { GetServerSideProps } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getFoodsById } from "@/hooks/usePublic";
import { useRouter } from "next/router";
import { NextSeo, RecipeJsonLd } from "next-seo";
import { Food } from "@/types/interfaces";
import ImgHeader from "@/components/images/ImgHeader";
import ContentP from "@/components/contents/ContentP";
import ContentH from "@/components/contents/ContentH";

type Props = {};

const Food = (props: Props) => {
    const router = useRouter();
    const { query } = router;
    const id = parseInt(query.id as string);
    const { data, isLoading } = useQuery<Food, Error>(
        ["getFoodsById", id],
        () => getFoodsById(id)
    );
    if (isLoading) {
        return null;
    }
    return (
        <>
            <NextSeo
                title={data?.title}
                description={data?.desc}
                canonical={`https://www.avacadogroup.com/foods/${data?.id}`}
                openGraph={{
                    type: "article",
                    locale: "fa_IR",
                    url: `https://www.avacadogroup.com/foods/${data?.id}`,
                    article: {
                        authors: ["https://medium.com/@sabber_dev"],
                        tags: ["دستور پخت", "رژیم", "لاغری"],
                    },

                    images: [
                        {
                            url: data?.media!,
                            width: 768,
                            height: 384,
                            alt: data?.title,
                            type: "image/webp",
                        },
                    ],
                    site_name: "آواکادو",
                }}
            />
            <RecipeJsonLd
                name="Party Coffee Cake"
                description="This coffee cake is awesome and perfect for parties."
                datePublished={data?.created_at!}
                authorName={"صابر سلطانی"}
                prepTime="PT20M"
                cookTime="PT30M"
                totalTime="PT50M"
                keywords="غذای رژیمی، لاغری، رژیم"
                yields="10"
                // category="Dessert"
                // cuisine="American"
                // calories={270}
                images={[data?.media!]}
                ingredients={[data?.ingredients!]}
                instructions={[
                    {
                        name: data?.title,
                        text: data?.desc,
                        url: `https://www.avacadogroup.com/foods/${data?.id}`,
                        image: data?.media!,
                    },
                ]}
                aggregateRating={{
                    ratingValue: "5",
                    ratingCount: "18",
                }}
            />
            <div className="w-full vstack justify-center">
                <ImgHeader src={data?.media!} alt="آشپزی" />
                <h1 className="text-green-700 font-bold mt-5 text-xl">
                    {data?.title}
                </h1>
                <div className="w-full lg:w-[60vw]">
                    <ContentP txt={data?.content!} cls="mt-5" />
                    <ContentH txt="مواد لازم:" cls="mt-5" />
                    <ContentP txt={data?.ingredients!} cls="mt-5" />
                    <ContentH txt="طرز تهیه:" cls="mt-5" />
                    <ContentP txt={data?.recipes!} cls="mt-5" />
                </div>
            </div>
        </>
    );
};

export default Food;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = parseInt(ctx.params?.id as string);
    const queryClient = new QueryClient();
    await queryClient.fetchQuery(["getFoodsById", id], () => getFoodsById(id));
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
