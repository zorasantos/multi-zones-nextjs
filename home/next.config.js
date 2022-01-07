const { BLOG_URL } = process.env

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    console.log('BaseURL',BLOG_URL)
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ]
  },
}
