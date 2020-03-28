const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//console.log(path.resolve(__dirname, 'public')); //C:\Users\murat\react-tutorial-New\r-06-08-saving-loading-count\public

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test'){
    require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' })
}

module.exports = (env) => {
    console.log('env',env); //package.json'da build:prod'da --env olarak verdiğin değer burdaki env'e karşılık gelecektir. Wooww!!.

    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: ['babel-polyfill', './src/app.js'], //tell webpack where it should start. - babel-polyfill ile explorer'da bile çalışabilecek.
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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
                'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
            })
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
