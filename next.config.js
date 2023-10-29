/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,

})

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true,
    },
}

module.exports = withMDX(nextConfig)
