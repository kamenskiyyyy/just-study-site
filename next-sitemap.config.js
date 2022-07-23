/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_FRONTEND_URL,
    changefreq: 'daily',
    priority: 0.7,
    autoLastmod: true,
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    exclude: ['/profile/*', '/server-sitemap.xml', '/marketing/*', '/success', '/checkout/*'],
    alternateRefs: [
        {
            href: process.env.FRONTEND_URL + '/en',
            hreflang: 'en'
        },
        {
            href: process.env.FRONTEND_URL + '/es',
            hreflang: 'es'
        },
        {
            href: process.env.FRONTEND_URL + '/ru',
            hreflang: 'ru'
        }
    ],
    robotsTxtOptions: {
        additionalSitemaps: [process.env.NEXT_PUBLIC_FRONTEND_URL + '/server-sitemap.xml']
    }
};
