const path = require('path');

console.log(path.resolve(__dirname, 'public')); //C:\Users\murat\react-tutorial-New\r-06-08-saving-loading-count\public

module.exports = {
    entry: './src/app.js', //tell webpack where it should start.
    output: {
        path: path.resolve(__dirname, 'public'), //where you wanna output webpack file (bundle.js)
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //only when files meet this criteria (.js) will be run babel
            exclude: /node_modules/ //we dont wanna run babel those libraries
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    //development ortamında gerekli çünkü bi hata olduğunda bunu konsolda webpack'in oluşturduğu bundle.js'de görüyordun.
    //biz bu kodu ekleyerek gerçekten bizim yazdığımız kendi kodumuza karşılık gelen yeri görebiliriz.
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), //where it can find out public files.
        historyApiFallback: true                    //Similar to how configured live-server in package.json(live-server yerine geçicek gibi düşün.)
    }
};
