/*
 * @Author: zgt
 * @Date: 2018-08-21 10:59:31
 * @LastEditors: zgt
 * @LastEditTime: 2019-09-30 09:46:08
 * @Description: file content
 */
import IScroll from "iscroll";
// import moment from "moment";
import Ajax from "./httpAjax";
import debounce from "lodash/debounce";
import ResizeSensor from "./ResizeSensor";
import merge from "lodash/merge";
export const httpAjax = Ajax;
export {
	getStyle,
	setStyle,
	hasClass,
	addClass,
	removeClass,
	on,
	off,
	once,
	dataTypeTest,
	deepCopyObject,
	deepCopyArray,
	deepCopy,
	formatDate,
	GenNonDuplicateID,
	arrayFilterBy,
	EetoString,
	onNoRepeatEvent,
	filterQuery,
	parseQueryString,
	formatterMapKey,
	isUrl,
	checkDevices,
	loadFileList,
	dataType,
	firstWordToUpperCase,
	removeItemFromTree,
	replaceItemFromTree,
	insertBeforeItemFromTree,
	insertAfterItemFromTree,
	pushItemToTree,
	itemsFromTree,
	unshiftItemToTree,
	isWhiteColor,
	turnMapKeys,
	turnLabelOrValue,
} from "zerod-ztool";
import ztool from "zerod-ztool";
//
function isChrome() {
	const userAgent = window.navigator.userAgent;
	return userAgent.indexOf("Chrome") > -1;
}
//生成IScroll 滚动条实例
export const IScrollInstance = function(el, opt) {
	let defaultopt = Object.assign(
		{
			disableMouse: true,
			disablePointer: true,
			disableTouch: false,
			bounce: false, //当滚动条符合边界时，它会执行一个小的反弹动画
			click: false, //要覆盖原生滚动，iScroll必须禁止某些默认浏览器行为，例如鼠标单击。如果您希望应用程序响应click事件，则必须将此选项显式设置为true。请注意，建议使用自定义tap事件
			scrollX: false, //启用横向滚动
			scrollY: true, //启用纵向滚动
			mouseWheel: true, //启用滚轮
			preventDefault: false,
			bindToWrapper: false, //的move事件通常是结合于文件而不是滚动容器。当您将光标/手指移出包装器时，滚动会继续进行。这通常是您想要的，但您也可以将move事件绑定到包装器本身。一旦指针离开容器，滚动就会停止。
			eventPassthrough: false, //有时您希望保留原生垂直滚动但能够添加水平iScroll（可能是旋转木马）。将此设置为true
			scrollbars: false, //显示滚动条，自定义滚动条样式：scrollbars选项'custom'
			interactiveScrollbars: true, //滚动条可拖动
			shrinkScrollbars: "scale", //当滚动到边界之外时，滚动条会缩小一小部分。'clip'和'scale'
			momentum: true, //您可以打开/关闭用户快速在屏幕上轻弹时执行的动量动画。关闭它可以大大提高性能。
			mouseWheelSpeed: 10,
			invertWheelDirection: false, //激活鼠标滚轮支持时有意义，在这种情况下它只是反转滚动方向。（即向下滚动，反之亦然）。
		},
		ztool.dataTypeTest(opt) === "object" ? opt : {},
	);
	return new IScroll(el, defaultopt);
};
//更新iscroll
export const BuildScroll = function(el, opt) {
	this.nextScrollToTop = false;
	this.refresh =debounce(() =>{
		if (this.nextScrollToTop) {
			this.scroll.scrollTo(0, 0, 200);
			this.nextScrollToTop = false;
		}
		this.scroll.refresh();
		console.log("scrollRefresh")
	},60);
	this.callbackWare = [];
	if (isChrome() && !opt.useCustomScroll) {
		this.scroll = {
			x: 0,
			y: 0,
			on: (name, callback) => {
				if (name === "scrollEnd") {
					ztool.on(el, "scroll", this.scrollfunc);
					this.callbackWare.push(callback);
				}
			},
			off: (name, callback) => {
				if (name === "scrollEnd") {
					if (!this.callbackWare.length) {
						ztool.off(el, "scroll", this.scrollfunc);
					} else {
						const index = this.callbackWare.indexOf(callback);
						if (index > -1) {
							this.callbackWare.splice(index, 1);
						}
					}
				}
			},
			scrollTo: (x, y) => {
				typeof x === "number" && ((el.scrollLeft = Math.abs(x)), (this.scroll.x = Math.abs(x)));
				typeof y === "number" && ((el.scrollTop = Math.abs(y)), (this.scroll.y = Math.abs(y)));
			},
			refresh() {},
			_initEvents() {},
			destroy: () => {
				// zTool.off(el, "mouseenter", this.showScroll);
				// zTool.off(el, "mouseleave", this.hideScroll);
			},
		};
		this.scrollfunc = e => {
			this.scroll.x = -el.scrollLeft;
			this.scroll.y = -el.scrollTop;
			this.callbackWare.forEach(ware => {
				typeof ware === "function" && ware(e);
			});
		};
		// this.showScroll = () => {
		// 	el.style.overflow = "auto";
		// };
		// this.hideScroll = () => {
		// 	el.style.overflow = "hidden";
		// };
		// zTool.on(el, "mouseenter", this.showScroll);
		// zTool.on(el, "mouseleave", this.hideScroll);
		el.style.overflow = "auto";
	} else {
		this.scroll = IScrollInstance(el, opt);
		// console.log(this.scroll);
		//解决嵌套滚动条滚动问题
		let canscroll = false;
		let timer = null;
		const wheelhandle = e => {
			let scrollElement = e.target;
			while (
				scrollElement &&
				scrollElement !== el &&
				!["auto", "scroll"].includes(ztool.getStyle(scrollElement, "overflow-y"))
			) {
				scrollElement = scrollElement.parentElement;
			}
			if (scrollElement && el.contains(scrollElement)) {
				if (!scrollElement.bindingWheelScroll) {
					scrollDisableWheel(scrollElement,opt);
				}
			}
			if (this.scroll.wrapperHeight - this.scroll.y !== this.scroll.scrollerHeight && this.scroll.y !== 0) {
				e.stopPropagation();
				canscroll = true;
			} else {
				if (canscroll) {
					e.stopPropagation();
				}
				clearTimeout(timer);
				timer = setTimeout(() => {
					canscroll = false;
				}, 320);
			}
		};
		this.scroll.wrapper.addEventListener("wheel", wheelhandle, false);
		this.scroll.wrapper.addEventListener("mousewheel", wheelhandle, false);
		this.scroll.wrapper.addEventListener("DOMMouseScroll", wheelhandle, false);
		this.scroll.wrapper.addEventListener(
			"mouseover",
			() => {
				canscroll = true;
			},
			false,
		);
	}
};
//
export const scrollDisableWheel = function(el, opt = {}) {
	if (isChrome() && !opt.useCustomScroll) return;
	el.bindingWheelScroll = true;
	let scrollEnd = true;
	let onWheel = e => {
		const delta = e.deltaY ? e.deltaY : -e.wheelDeltaY;
		if ((delta > 0 && el.scrollTop + el.clientHeight < el.scrollHeight) || (delta < 0 && el.scrollTop > 0)) {
			scrollEnd = false;
		}
		if (!scrollEnd) e.stopPropagation();
	};
	ztool.on(el, "wheel", onWheel);
	ztool.on(el, "mousewheel", onWheel);
	ztool.on(el, "DOMMouseScroll", onWheel);
	ztool.on(el, "scroll", e => {
		scrollEnd = el.scrollTop + el.clientHeight >= el.scrollHeight || el.scrollTop === 0;
	});
};
//监听盒子（div）尺寸变化
export const listenDivSizeChange = function(el, scrollFun, opt = {}) {
	if (isChrome() && !opt.useCustomScroll) return;
	new ResizeSensor(el, debounce(scrollFun, 60));
};

//生成 引导提示 introjs的实例，注意的是：此函数返回promise 需要在then((intro)>{})拿introjs的实例
export const IntroInstance = function(opt) {
	//异步加载相关文件
	return ztool
		.loadFileList([
			"./static/introJs/introjs.min.css",
			"./static/introJs/themes/introjs-flattener.css",
			"./static/introJs/intro.min.js",
		])
		.then(() => {
			if (window.introJs) {
				const intro = window.introJs();
				intro.setOptions(
					Object.assign(
						{
							nextLabel: "下一个",
							prevLabel: "上一个",
							doneLabel: "没有下一个，关闭",
							skipLabel: "关闭",
							disableInteraction: true, //是否让element可点击
							showProgress: true, //进度条
							exitOnOverlayClick: false, //是否点击遮罩层关闭
							showStepNumbers: true, //是否显示步骤数字
							showBullets: true, //是否显示步骤圆点
							// showButtons:true,
							exitOnEsc: false,
						},
						opt,
					),
				);
				return intro;
			}
		});
};

// 合并defaultConfig的属性生成新的config
export const mergeConfig = (defaultConfig, theConfig) => {
	if (ztool.dataTypeTest(defaultConfig) === "object" && ztool.dataTypeTest(theConfig) === "object") {
		return merge(ztool.deepCopy(defaultConfig), theConfig);
	}
};

export const zTool = {
	...ztool,
	BuildScroll,
	IScrollInstance,
	scrollDisableWheel,
	IntroInstance,
	listenDivSizeChange,
	mergeConfig,
	httpAjax,
};
export default zTool;
