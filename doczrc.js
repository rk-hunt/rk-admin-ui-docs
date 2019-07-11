import { css } from 'docz-plugin-css';

export default {
    title: 'rk-admin-ui-docs',
    src: './src/doc',
    codeSandbox: false,
    onCreateWebpackChain: (config) => {
        config.module.rule('compile').test(/\.js$/).use('babel').loader('babel-loader').options({
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current'
                        }
                    }
                ],
                '@babel/preset-react'
            ],
            plugins: [
                [
                    'import',
                    {
                        libraryName: 'antd',
                        libraryDirectory: 'es',
                        style: true
                    },
                    'ant'
                ],
                '@babel/plugin-syntax-dynamic-import'
            ]
        });
    },
    plugins: [
        css({
            preprocessor: 'postcss',
            cssmodules: false,
            loaderOpts: {}
        }),
        css({
            preprocessor: 'less',
            loaderOpts: {
                javascriptEnabled: true,
                modifyVars: {
                    '@font-family': "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    '@primary-color': '#007bff',
                    '@success-color': '#1dc9b7',
                    '@warning-color': '#ffb822',
                    '@error-color': '#fd397a',
                    '@link-color': '#007bff',
                    '@heading-color': '#003366',
                    '@text-color': '#6e84a3',
                    '@border-color-split': 'hsl(220, 18%, 97%)'
                }
            }
        })
    ]
};
