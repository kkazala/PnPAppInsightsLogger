import { merge } from 'webpack-merge';
import common from './webpack.config.mjs';

export default merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: './dist',
    },
});