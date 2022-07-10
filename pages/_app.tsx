import * as React from 'react';
import { useEffect } from 'react';
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
import AppFooter from '@src/layouts/AppFooter';
import AppHeader from '@src/layouts/AppHeader';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { homePage } from '@translations/homePage';
import { useMediaQuery } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();
const enhance = withHydrate();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const appTheme = useStore($theme);
    const { locale } = useRouter();
    const t = transition(homePage, locale);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

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
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <BrandingProvider mode={appTheme}>
                    <AppHeader />
                    <Component {...pageProps} />
                    <AppFooter />
                </BrandingProvider>
            </CacheProvider>
        </ApolloProvider>
    );
}

export default enhance(MyApp);
