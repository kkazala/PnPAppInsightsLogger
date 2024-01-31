const path = require('path');

module.exports = {
    entry: { appinsightsloader: './src/index.mts' },
    module: {
        rules: [
            {
                test: /(\.mts$)|(\.ts?$)/, //test: /\.([cm]?ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

        ],
    },
    resolve: {
        extensions: [".mts", ".ts", ".tsx", ".js"],//['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
         clean: true,
    },

};