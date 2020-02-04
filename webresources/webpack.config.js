const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'webresources.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [ { loader: "ts-loader" } ]
            },
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: [ { loader: "babel-loader" } ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-inline-loader'
            },            
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 
                    {                         
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        query: {
                            import: true,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({})
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: __dirname + '/public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.    
    //externals: {
    //    "react": "React",
    //    "react-dom": "ReactDOM"
    //},
    devServer: {
        contentBase: path.join(__dirname, 'public')  // [project folder]/public
    }    
};