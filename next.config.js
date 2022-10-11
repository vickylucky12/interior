/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: 'vtwv8a9n',
    NEXT_PUBLIC_SANITY_DATASET: 'production',
    NEXT_PUBLIC_FORMS_ID: 'xqkjqboy',
  },
  images: {
    domains: [
      'images.pexels.com',
      'demos.creative-tim.com',
      'images.unsplash.com',
      'cdn.sanity.io',
    ],
  },
}

module.exports = nextConfig
