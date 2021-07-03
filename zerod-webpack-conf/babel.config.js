module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    browsers: ['> 1%', 'last 2 versions', 'not ie <= 10'],
                },
                useBuiltIns: false,
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', { corejs: false }],
        ['@babel/plugin-syntax-dynamic-import'],
        ['@babel/plugin-proposal-decorators', { legacy: true }], //经测试，必须在"@babel/plugin-proposal-class-properties"之前才有效
        [
            '@babel/plugin-proposal-class-properties',
            {
                loose: true,
            },
        ],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-transform-modules-commonjs'],
    ],
};
