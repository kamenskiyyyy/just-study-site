/** @type {import('next').NextConfig} */
const { withEffectorReactAliases } = require("effector-next/tools");

const enhance = withEffectorReactAliases();
module.exports = enhance({
  i18n: {
    locales: ['en', 'ru', 'es'],
    defaultLocale: 'en',
    localeDetection: true
  },
});
