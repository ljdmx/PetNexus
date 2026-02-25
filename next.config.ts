import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // 开启静态导出
  basePath: '/PetNexus',  // GitHub Pages 需要这个
  images: {
    unoptimized: true,  // 静态导出不支持图片优化
  },
};

export default nextConfig;
