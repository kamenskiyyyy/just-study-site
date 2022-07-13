/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withEffectorReactAliases } = require('effector-next/tools');

const enhance = withEffectorReactAliases();
module.exports = enhance({
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
