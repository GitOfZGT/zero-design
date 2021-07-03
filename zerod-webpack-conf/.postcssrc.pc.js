// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        // to edit target browsers: use "browserslist" field in package.json
        'postcss-preset-env': { stage: 0, autoprefixer: { grid: true } },
        cssnano: {
            preset: [
                'advanced',
                {
                    reduceIdents: {
                        keyframes: false,
                    },
                    autoprefixer: false,
                    zindex: false,
                },
            ],
        },
    },
};
