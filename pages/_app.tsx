import * as React from 'react';
import { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import { ApolloProvider } from '@apollo/client';
import client from '@src/lib/apollo/apolloClient';
import BrandingProvider from '@src/BrandingProvider';
import { withHydrate } from 'effector-next';
import { useStore } from 'effector-react';
import { $theme, setTheme } from '../model/theme';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { homePage } from '@translations/homePage';
import { useMediaQuery } from '@mui/material';
import { NextPageWithLayout } from '@shared/types/page';
import '@src/styles.css';
import { EmailAuth } from '@src/hooks/useEmailAuth';

const clientSideEmotionCache = createEmotionCache();
const enhance = withHydrate();

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

interface MyAppProps extends AppPropsWithLayout {
    emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const appTheme = useStore($theme);
    const { locale } = useRouter();
    const t = transition(homePage, locale);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const getLayout = Component.getLayout ?? ((page) => page);
    const Layout = Component.layout ?? Fragment;

    useEffect(() => {
        if (prefersDarkMode) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [prefersDarkMode]);

    return (
        <ApolloProvider client={client}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title>{t.title}</title>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                    />
                </Head>
                <BrandingProvider mode={appTheme}>
                    <EmailAuth />
                    <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
                </BrandingProvider>
            </CacheProvider>
        </ApolloProvider>
    );
}

export default enhance(MyApp);
