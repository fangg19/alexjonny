import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const withMDX = nextMDX({
    extension: /\.mdx?$/,
})

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true,
    },
}

export default withMDX(nextConfig);
