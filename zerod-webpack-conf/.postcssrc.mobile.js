// 容器适配，可以使用vw
// 文本的适配，可以使用vw
// 大于1px的边框、圆角、阴影都可以使用vw
// 内距和外距，可以使用vw

module.exports = {
	plugins: {
		"postcss-import": {},
		"postcss-url": {},
		"postcss-aspect-ratio-mini": {},
		"postcss-write-svg": { utf8: false },
		"postcss-preset-env": { stage: 0, autoprefixer: { grid: true } },
		"postcss-px-to-viewport": {
			viewportWidth: 750, // (Number) 设计稿的宽度（标准像素）.
			viewportHeight: 1334, // (Number) 设计稿的高度（标准像素）.
			unitPrecision: 5, // // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
			viewportUnit: "vw", //指定需要转换成的视窗单位，建议使用vw
			selectorBlackList: [".not-vw"], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
			minPixelValue: 1, // 于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
			mediaQuery: false, // 允许在媒体查询中转换`px`
		},
		// "postcss-viewport-units": {},
		cssnano: {
			preset: ["advanced",{
                reduceIdents:{
                    keyframes:false,
                },
                autoprefixer: false,
                zindex:false,
            }],
		},
		// to edit target browsers: use "browserslist" field in package.json
		// "autoprefixer": {}
	},
};
