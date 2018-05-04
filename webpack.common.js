const path = require('path');

module.exports = {
    entry: {
        'app': './src/index.js',
       // 'css': './src/scss/variables.scss'
    },
    output: {
        filename: '[name].bundle.js', // crea un file per ogni entry-point
        path: path.resolve(__dirname, 'build') // mette il file nella cartella build
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["raw-loader"]  //allows importing files as a String
            },
            {
                test: /\.twig$/,
                use: ["twig-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ],
    },

};
