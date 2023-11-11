export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://muhammaddariazzidane.vercel.app/sitemap.xml',
  };
}
