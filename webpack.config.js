const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function getConfig(mode) {

    const isProduction = mode === 'production';

    return {
        entry: './src/index.tsx',
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        output: {
            path: path.join(__dirname, '/build'),
            filename: "[name].bundle.js",
            chunkFilename: "[name].chunk.js"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                },
                {
                    test: /\.css$/,
                    use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
                },
                {
                    test: /\.(png|jpg|gif|wav|mpeg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]'
                        }
                    }],
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/static/index.html'
            }),
          //  new BundleAnalyzerPlugin({analyzerMode: isProduction ? 'disabled' : 'server'})
        ],
        devServer: {
            historyApiFallback: true,
        },
        optimization: {
            // We no not want to minimize our code.
            minimize: false
        },
    };
}

module.exports = (env, args) => {
    return getConfig(args.mode);
};
