/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add this if you're using React components with client-side interactivity
  // (like useState, useEffect, etc.)
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig