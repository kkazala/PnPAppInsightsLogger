const path = require('path');

module.exports = {
    entry:  './src/index.ts' ,
    module: {
        rules: [
            {
                test: /(\.ts?$)/, //test: /\.([cm]?ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

        ],
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js"],//['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
         clean: true,
    },

};