import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Activer le compilateur MDX basé sur Rust pour de meilleures performances avec le App Router.
  experimental: {
    mdxRs: true,
  },
  // Ajoutez ici vos plugins markdown, si vous en avez.
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);