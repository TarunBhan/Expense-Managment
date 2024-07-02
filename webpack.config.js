const path = require("path");
const webBuildTargetFolder = path.join(__dirname, "builds");
module.exports = {
  // Entry point of the application
  entry: {
    main: "./src/index.tsx", // Main entry point
  },

  // Output configuration with unique filenames
  output: {
    path: webBuildTargetFolder,
    clean: true, // Clean the output directory before emitting
  },

  // Enable source maps for easier debugging
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
      // Add loaders for other file types as needed
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },

  // Mode configuration
  mode: "development", // Set to 'production' for production builds

  // Optimization configuration
  optimization: {
    splitChunks: {
      chunks: "all", // Enable chunk splitting for all chunks
      name: false, // Disable automatic naming to prevent conflicts
    },
  },

  // Plugins (if any)
  plugins: [
    // Add plugins like ForkTsCheckerWebpackPlugin for type checking
  ],

  // DevServer configuration (optional)
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
