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
                    '@font-family':
                        "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
                    '@primary-color': '#2064f5',
                    '@link-color': '#2064f5',
                    '@heading-color': '#003366',
                    '@text-color': '#6e84a3',
                    '@success-color': '#1ccf8f',
                    '@border-color-base': '#f5f6f8',
                    '@border-color-split ': '#f5f6f8',
                    '@btn-default-bg': '#edf0f5'
                }
            }
        })
    ]
};
