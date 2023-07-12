module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }

    return config
  },
  async rewrites() {
    return [
      { source: '/js/', destination: 'https://jonlameira.com/' },
      { source: '/jekyll/', destination: 'https://jonlameira.com/' },
      { source: '/svg/', destination: 'https://jonlameira.com/' },
      { source: '/dev/', destination: 'https://jonlameira.com/' },
      { source: '/tags/', destination: 'https://jonlameira.com/' },
      {
        source: '/making-of-blog-novo/',
        destination:
          'https://jonlameira.com/making-of-blog-novo-gatsby-js'
      },
      { source: '/page/:slug*', destination: 'https://jonlameira.com/' }
    ]
  },
  async redirects() {
    return [
      {
        source: '/my-trips/',
        destination: 'https://my-trips.jonlameira.com/',
        permanent: true
      },
      {
        source: '/japanese-words/',
        destination: 'https://japanese-words.jonlameira.com/',
        permanent: true
      },
      {
        source: '/learn-japanese/',
        destination: 'https://learn-japanese.jonlameira.com/',
        permanent: true
      },
      {
        source: '/js-com-tdd-na-pratica-na-udemy/',
        destination: 'https://www.youtube.com/@WillianJustenCursos',
        permanent: true
      },
      {
        source: '/novo-curso-aprenda-criar-sites-animados-greensock/',
        destination: 'https://jonlameira.com',
        permanent: true
      },
      {
        source:
          '/novo-curso-gatsby-crie-um-site-pwa-com-react-graphql-netlify-cms/',
        destination: 'https://jonlameira.com',
        permanent: true
      }
    ]
  },
  images: { domains: ['pbs.twimg.com', 'avatars.githubusercontent.com'] }
}
