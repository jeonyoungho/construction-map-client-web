const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const childProcess = require("child_process")

module.exports = (env = {}) => {
    const prod = env.mode === "production";

    return {
        mode: prod ? "production" : "development",
        devtool: prod ? "hidden-source-map" : "eval", // 모드에 따라 SourceMap 확인 여부
        entry: {
            main: "./src/index.tsx"
        },
        output: {
            path: path.resolve("./dist"),
            filename: "[name].js"
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"], // 배열안 확장자에 따라서 처리
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: "url-loader", // fallback 기본값이 file-loader이기 때문에 20kb 이상은 file-loader 가 처리한다.
                    options: {
                        // publicPath: './dist/', // 파일 로더가 처리하는 파일을 모듈로 사용했을때 경로 앞에 추가되는 문자열이다, 파일을 호출하는 측에선 dist 를 붙이고 파일을 호출할 것이다.
                        name: "[name].[ext]?[hash]", // 파일 로더가 output에 복사할때 사용하는 파일 이름, [원본 파일명].[확장자]?해쉬값
                        limit: 20000 // 20kb 미만의 파일은 url-loader 로 해서 base64로 변환한다.(파일을 javascript 문자열로 변환) 만약 2kb 이상일 경우 file-loader가 실행하도록 한다.
                    }
                },
                {
                    test: /\.(ts|tsx)$/,
                    use: ["babel-loader", "ts-loader"],
                    exclude: /node_modules/,
                },
                // {
                //     test: /\.less$/,
                //     use: [
                //       prod ? MiniCssExtractPlugin.loader : "style-loader",
                //         'css-loader',
                //         "less-loader",
                //     ],
                // },
                {
                    test: /\.(css)$/,
                    use: [
                        {loader: prod ? MiniCssExtractPlugin.loader : 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: {
                                    localIdentName: '[name]__[local]--[hash:base64:5]'
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(less)$/,
                    use: [
                        {loader: prod ? MiniCssExtractPlugin.loader : 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: {
                                    localIdentName: '[name]__[local]--[hash:base64:5]'
                                }
                            }
                        },
                        {loader: 'less-loader'}
                    ]
                }
            ]
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: `
                      Build Date: ${new Date().toLocaleString()}
                      Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
                      Author: ${childProcess.execSync('git config user.name')}
                  `
            }),
            new webpack.DefinePlugin({
            }),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                minify: prod ? {
                            collapseWhitespace: true, // 빈칸 제거
                            removeComments: true, // 주석 제거
                        }
                        : false
            }),
            new CleanWebpackPlugin(),
            ...(prod ? [new MiniCssExtractPlugin({ filename: "[name].css" })] // javascript 에서 css 파일을 뽑아내는 과정이기에 굳이 개발환경에서는 필요없다(Javascript 파일 하나로 빌드하는 것이 더 빠르다)
                : []),
            // new CopyPlugin({
            //     patterns: [
            //         { from: "./node_modules/axios/dist/axios.min.js", to: "./axios.min.js" },
            //     ],
            // }),
        ],
        devServer: {
            host: 'localhost', // host 설정
            port: 3000,// port 설정
            open: true, // 서버를 실행했을 때, 브라우저를 열어주는 여부
            compress: true,
            hot: true,
            historyApiFallback: true,
        },
    }

}
