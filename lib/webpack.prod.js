const cssnano = require("cssnano");
const merge = require("webpack-merge");
const HtmlWebpackExternalsPlugin = require("html-webpack-externals-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const baseConfig = require("./webpack.base");

const prodConfig = {
    mode: "production",
    plugins: [
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: cssnano,
        }),
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: "react",
                    entry: "https://unpkg.com/react@18/umd/react.production.min.js",
                    global: "React",
                },
                {
                    module: "react-dom",
                    entry: "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
                    global: "ReactDOM",
                },
            ],
        }),
    ],
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    name: "vendors",
                    chunks: "all",
                    minChunks: 2,
                },
            },
        },
    },
};

module.exports = merge(baseConfig, prodConfig);
