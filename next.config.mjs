/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // disables Next.js image optimization
    },
};

export default nextConfig;
