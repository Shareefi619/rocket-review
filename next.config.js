const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      test: /\.svg$/,
      use: "file-loader",
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/media/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
