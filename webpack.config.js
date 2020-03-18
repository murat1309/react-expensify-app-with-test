const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//console.log(path.resolve(__dirname, 'public')); //C:\Users\murat\react-tutorial-New\r-06-08-saving-loading-count\public

module.exports = (env) => {
    console.log('env',env); //package.json'da build:prod'da --env olarak verdiğin değer burdaki env'e karşılık gelecektir. Wooww!!.

    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: './src/app.js', //tell webpack where it should start.
        output: {
            path: path.resolve(__dirname, 'public', 'dist'), //where you wanna output webpack file (bundle.js)
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //only when files meet this criteria (.js) will be run babel
                exclude: /node_modules/ //we dont wanna run babel those libraries
            },{
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        //development ortamında gerekli çünkü bi hata olduğunda bunu konsolda webpack'in oluşturduğu bundle.js'de görüyordun.
        //biz bu kodu ekleyerek gerçekten bizim yazdığımız kendi kodumuza karşılık gelen yeri görebiliriz.
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'), //where it can find out public files.
            historyApiFallback: true,                    //Similar to how configured live-server in package.json(live-server yerine geçicek gibi düşün.),
            publicPath: '/dist'
        }
    };
};
