import { resolve as _resolve, dirname as _dirname } from 'path';

import { fileURLToPath } from 'url';
const __dirname = _dirname(fileURLToPath(new URL(import.meta.url)))

export default {
    target: 'node',
    entry: { index: './src/index.ts' },
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
        // Add support for TypeScripts fully qualified ESM imports.
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"]
        }
    },
    output: {
        filename: '[name].js',
        path: _resolve(__dirname, 'dist'),
        clean: true,
        library: {
            name: "ApplicationInsightsLoger",
            type: "umd",
        },
    },
    optimization: {
        minimize: false,
    },
    externals: {
        "@microsoft/applicationinsights-analytics-js": "@microsoft/applicationinsights-analytics-js",
        "@microsoft/applicationinsights-react-js": "@microsoft/applicationinsights-react-js",
        "@microsoft/applicationinsights-web": "@microsoft/applicationinsights-web",
        "@pnp/core": "@pnp/core",
        "@pnp/logging": "@pnp/logging",
        "@pnp/queryable": "@pnp/queryable",
    },

};