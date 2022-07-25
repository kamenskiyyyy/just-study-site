import * as React from 'react';
import { FC } from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';

interface IHead {
    card?: string;
    title: string;
    description?: string;
    disableAlternateLocale?: boolean;
    largeCard?: boolean;
}

const HOST = 'https://juststudy.online';

export const Head: FC<IHead> = (props) => {
    const {
        card = '/static/social-previews/default.png',
        description = 'just study',
        disableAlternateLocale = false,
        largeCard = true,
        title
    } = props;
    const { asPath, locale, locales } = useRouter();
    const preview = card.startsWith('http') ? card : `${HOST}${card}`;

    const textTitle = `${title} | Just Study`;

    return (
        <NextHead>
            <title>{textTitle}</title>
            <meta name="description" content={description} />
            {/* Twitter */}
            <meta name="twitter:card" content={largeCard ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:site" content="@JustStudy" />
            {/* #major-version-switch */}
            <meta name="twitter:title" content={textTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={preview} />
            {/* Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={textTitle} />
            {/* #major-version-switch */}
            <meta property="og:url" content={`${HOST}${asPath}`} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={preview} />
            <meta property="og:ttl" content="604800" />
            {/* Algolia */}
            <meta name="docsearch:language" content={locale} />
            {/* #major-version-switch */}
            <meta name="docsearch:version" content="master" />
            {disableAlternateLocale
                ? null
                : locales?.map((language) => (
                      <link
                          key={language}
                          rel="alternate"
                          href={`${HOST}${language === 'en' ? '' : `/${language}`}${asPath}`}
                          hrefLang={language}
                      />
                  ))}
        </NextHead>
    );
};
