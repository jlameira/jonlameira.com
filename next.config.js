/** @type {import('next').NextConfig} */
const nextConfig = {
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

            { source: '/page/:slug*', destination: 'https://jonlameira.com/' }
        ]
    },
    async redirects() {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html',
                permanent: true,
            }
        ]
    },
    images: { domains: ['pbs.twimg.com', 'avatars.githubusercontent.com'] },
    reactStrictMode: true,
    disableImportAliasWarning: true,
}

module.exports = nextConfig
