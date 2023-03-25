import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { getArticles, getFoods } from "@/hooks/usePublic";
import { Main } from "@/types/interfaces";
import ImgHeader from "@/components/images/ImgHeader";
import ContainerGrid from "@/components/containers/ContainerGrid";
import LinkImage from "../../components/links/LinkImage";

const Articles: NextPage<{ data: Main[] }> = ({ data }) => {
    if (!data) {
        return null;
    }
    console.log(data);
    return (
        <div className="w-full vstack justify-center">
            <ImgHeader
                src="https://res.cloudinary.com/dupfwlkgb/image/upload/v1679658979/pexels-julie-aagaard-2351274_xp9acb.jpg"
                alt="آشپزی"
            />
            <h1 className="text-green-700 font-bold mt-5 text-xl">
                مقالات سلامت آواکادو
            </h1>
            <ContainerGrid gridCols="grid-cols-2 lg:grid-cols-4 mt-5">
                {data.map((item) => (
                    <LinkImage
                        key={item.id}
                        href={`/articles/${item.id}`}
                        src={item.media}
                        title={item.title}
                        cls="w-44 lg:w-64  h-64 lg:h-72"
                    />
                ))}
            </ContainerGrid>
        </div>
    );
};

export default Articles;
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await getArticles();

    return {
        props: {
            data: res,
        },
    };
};
