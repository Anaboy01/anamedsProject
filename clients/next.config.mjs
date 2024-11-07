/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  trailingSlash: "true",
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], 
  },
};

export default nextConfig;
