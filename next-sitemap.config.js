/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://juststudy.online',
    changefreq: 'daily',
    priority: 0.7,
    autoLastmod: true,
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    exclude: ['/profile', '/server-sitemap.xml', '/marketing', '/success', '/checkout'],
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
        additionalSitemaps: ['https://juststudy.online' + '/server-sitemap.xml']
    }
};
