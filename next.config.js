const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/media/",
            name: "[name].[hash].[ext]",
          },
        },
      },
      {
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use: ['@svgr/webpack'],
      }
    );

    return config;
  },
};

module.exports = nextConfig;
