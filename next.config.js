/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const { withEffectorReactAliases } = require('effector-next/tools');
const { withSentryConfig } = require('@sentry/nextjs');

const enhance = withEffectorReactAliases();

const nextConfiguration = {
    compress: true,
    i18n: {
        locales: ['en', 'ru', 'es'],
        defaultLocale: 'en',
        localeDetection: true
    },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['storage.yandexcloud.net', 'sitejuststudy.storage.yandexcloud.net']
    },
    async redirects() {
        return [
            {
                source: '/shop',
                destination: '/directions',
                permanent: true
            }
        ];
    }
};

const sentryConfig = {
    ignore: ['node_modules', 'webpack.config.js'],
    configFile: './sentry.properties'
};

const nextPlugins = [[withSentryConfig, sentryConfig], [enhance]];

module.exports = withPlugins(nextPlugins, nextConfiguration);
