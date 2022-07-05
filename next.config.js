/** @type {import('next').NextConfig} */
const { withEffectorReactAliases } = require("effector-next/tools");

const enhance = withEffectorReactAliases();
module.exports = enhance({
  reactStrictMode: true
});
