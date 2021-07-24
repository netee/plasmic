
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['jeXV34PQbEjRuo5MPm7Cjy'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  