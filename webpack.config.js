const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            template: 'src/templates/index.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            },
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'ЗАЯВА_1.html',
            template: 'src/templates/ЗАЯВА_1.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'ЗАЯВА_2.html',
            template: 'src/templates/ЗАЯВА_2.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'ЗАЯВА_3.html',
            template: 'src/templates/ЗАЯВА_3.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'ЗАЯВА_4.html',
            template: 'src/templates/ЗАЯВА_4.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'ДОКУМЕНТ_ПРО_ОПЛАТУ.html',
            template: 'src/templates/ДОКУМЕНТ_ПРО_ОПЛАТУ.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'КЛОПОТАННЯ_ДР_1.html',
            template: 'src/templates/КЛОПОТАННЯ_ДР_1.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'КЛОПОТАННЯ_ДР_2.html',
            template: 'src/templates/КЛОПОТАННЯ_ДР_2.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'КЛОПОТАННЯ_ДУБЛІКАТ.html',
            template: 'src/templates/КЛОПОТАННЯ_ДУБЛІКАТ.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'КЛОПОТАННЯ_ЗАЯВКА.html',
            template: 'src/templates/КЛОПОТАННЯ_ЗАЯВКА.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'ПОВЕРНЕННЯ.html',
            template: 'src/templates/ПОВЕРНЕННЯ.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'ПОВІДОМЛЕННЯ_1.html',
            template: 'src/templates/ПОВІДОМЛЕННЯ_1.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'ПОВІДОМЛЕННЯ_2.html',
            template: 'src/templates/ПОВІДОМЛЕННЯ_2.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_1.html',
            template: 'src/templates/РІШЕННЯ_1.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_1_ВІДМ.html',
            template: 'src/templates/РІШЕННЯ_1_ВІДМ.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_1_ВІДМ_опл.html',
            template: 'src/templates/РІШЕННЯ_1_ВІДМ_опл.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_1_опл.html',
            template: 'src/templates/РІШЕННЯ_1_опл.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_2.html',
            template: 'src/templates/РІШЕННЯ_2.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_2_ВІДМ.html',
            template: 'src/templates/РІШЕННЯ_2_ВІДМ.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_2_ВІДМ_опл.html',
            template: 'src/templates/РІШЕННЯ_2_ВІДМ_опл.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_2_опл.html',
            template: 'src/templates/РІШЕННЯ_2_опл.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_3_1.html',
            template: 'src/templates/РІШЕННЯ_3_1.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_3_1_ВІДМ.html',
            template: 'src/templates/РІШЕННЯ_3_1_ВІДМ.html',
            minify: {
                minifyCSS: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_3_1_ВІДМ_опл.html',
            template: 'src/templates/РІШЕННЯ_3_1_ВІДМ_опл.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_3_2.html',
            template: 'src/templates/РІШЕННЯ_3_2.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_3_2_ВІДМ.html',
            template: 'src/templates/РІШЕННЯ_3_2_ВІДМ.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_3_2_ВІДМ_опл.html',
            template: 'src/templates/РІШЕННЯ_3_2_ВІДМ_опл.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_4_ВІДМ.html',
            template: 'src/templates/РІШЕННЯ_4_ВІДМ.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_4_ВІДМ_опл.html',
            template: 'src/templates/РІШЕННЯ_4_ВІДМ_опл.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_4_повн.html',
            template: 'src/templates/РІШЕННЯ_4_повн.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'РІШЕННЯ_4_част.html',
            template: 'src/templates/РІШЕННЯ_4_част.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'СВІДОЦ_1.html',
            template: 'src/templates/СВІДОЦ_1.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'СВІДОЦ_1_оприл.html',
            template: 'src/templates/СВІДОЦ_1_оприл.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'СВІДОЦ_2.html',
            template: 'src/templates/СВІДОЦ_2.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'СВІДОЦ_2_оприл.html',
            template: 'src/templates/СВІДОЦ_2_оприл.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackPlugin({
            inlineSource: '.(js|css)$',
            filename: 'СУПР_СВІДОЦ.html',
            template: 'src/templates/СУПР_СВІДОЦ.html',
            minify: {
                minifyCSS: true,
                removeComments: true
            }
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?-minimize', 'sass-loader']
                })
            }
        ],
    }
};