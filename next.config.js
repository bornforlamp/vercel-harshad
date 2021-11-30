module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://vercel.com',
        permanent: true,
      },
    ]
  },
}
