/** @type {import('next').NextConfig} */
/* eslint-disable */
const { withEffectorReactAliases } = require('effector-next/tools');

const enhance = withEffectorReactAliases();
module.exports = enhance({
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
});
