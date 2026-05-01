module.exports = {
  locales: ['en', 'no'],
  defaultLocale: 'no',
  pages: {
    '*': ['common'],
    '/medarbeidere/[slug]': ['common', 'team'],
  },
}
