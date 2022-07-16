import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import { withFork } from 'effector-next';
import Script from 'next/script';

const enhance = withFork({ debug: false });

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <style data-href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"></style>
                    {process.env.NODE_ENV === 'production' && (
                        <Script id={'google-tag-manager'} strategy={'afterInteractive'}>
                            {` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-TM6WWTK');
                        `}
                        </Script>
                    )}
                    {(this.props as any).emotionStyleTags}
                </Head>
                <body>
                    {process.env.NODE_ENV === 'production' && (
                        <noscript
                            dangerouslySetInnerHTML={{
                                __html: `<iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-TM6WWTK"
                            height="0"
                            width="0"
                            style="display:none;visibility:hidden"></iframe>`
                            }}
                        />
                    )}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                }
        });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags
    };
};

export default enhance(MyDocument);
