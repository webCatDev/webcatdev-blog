/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    connectionString:
      "mongodb+srv://webcatdev:iLfahTBC6wbPmkLY@cluster0.2k3me.mongodb.net/blog?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig
