import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="fa" dir="rtl">
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="shortcut icon" href="/logo.ico" />
                <link href="/manifest.json" rel="manifest" />
                <link rel="mask-icon" href="/logo.png" color="#e5e5e5" />
                <link rel="apple-touch-icon" href="/logo.png" />
                <meta name="theme-color" content="#e5e5e5" />
                <link rel="icon" href="/logo.ico" />
                <meta name="apple-mobile-web-app-title" content="صابر سلطانی" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta
                    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                    name="robots"
                />
                <link rel="apple-touch-startup-image" href="/logo.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
