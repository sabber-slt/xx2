import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import localFont from "@next/font/local";
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { DefaultSeo } from "next-seo";

const inter = localFont({
    src: [
        {
            path: "../public/fonts/Iranyekan.ttf",
            style: "normal",
        },
        {
            path: "../public/fonts/IranyekanMedium.ttf",
            style: "medium",
        },
        {
            path: "../public/fonts/IranyekanExtrabold.ttf",
            style: "bold",
            weight: "700",
        },
    ],
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <>
            <DefaultSeo
                title="آواکادو | رژیم لاغری تغذیه سالم و تناسب اندام"
                description="آواکادو پلتفرم جامع ارائه انواع رژیم های لاغری ، مشاوره تغذیه، برنامه ورزشی و آشپزی سالم می باشد که شما را برای رسیدن به تناسب اندام و یادگیری سبک زندگی سالم همراهی می کند."
                canonical="https://avacadogroup.com/"
                openGraph={{
                    type: "website",
                    locale: "fa_IR",
                    url: "https://avacadogroup.com/",
                    siteName: "آواکادو",
                    images: [
                        {
                            url: "https://avacadogroup.com/logo.png",
                            width: 512,
                            height: 512,
                            alt: "آواکادو",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    handle: "@sadratech",
                    site: "@sadratech",
                    cardType: "summary_large_image",
                }}
                additionalLinkTags={[
                    {
                        rel: "icon",
                        href: "https://avacadogroup.com/logo.ico",
                    },
                ]}
            />
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <main className={inter.className}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </main>
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}
