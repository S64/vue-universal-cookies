module.exports = {
  build: {
    vendor: [
      'nuxt-universal-cookies',
    ],
  },
  plugins: [
    {
      src: '~/plugins/universal-cookies.js',
      ssr: true,
    },
  ],
};
