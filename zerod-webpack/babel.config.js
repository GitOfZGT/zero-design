module.exports = {
    presets: [
        [
            '@babel/preset-env',
            { modules: false, targets: { browsers: ['> 1%', 'last 2 versions', 'not ie <= 10'] }, useBuiltIns: false },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        ['@babel/plugin-transform-runtime', { corejs: false }],
        ['@babel/plugin-syntax-dynamic-import'],
        ['import', { libraryName: 'antd', style: false, libraryDirectory: 'es' }, 'antd'],
        [
            'import',
            { libraryName: 'zerod', style: false, libraryDirectory: 'components', camel2DashComponentName: false },
            'zerod',
        ],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-transform-modules-commonjs'],
    ],
};
