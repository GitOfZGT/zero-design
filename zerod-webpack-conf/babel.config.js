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
        ['@babel/plugin-transform-runtime', { corejs: 2 }],
        '@babel/plugin-syntax-dynamic-import',
        [
            'import',
            {
                libraryName: 'zerod',
                style: false,
                libraryDirectory: 'components',
                camel2DashComponentName: false,
            },
            'zerod',
        ],
        ['@babel/plugin-proposal-decorators', { legacy: true }], //经测试，必须在"@babel/plugin-proposal-class-properties"之前才有效
        [
			'@babel/plugin-proposal-class-properties',
            {
				loose: true,
            },
        ],
		'@babel/plugin-transform-modules-commonjs',
    ],
};
