import IScroll from "iscroll";
// import moment from "moment";
import Ajax from "./httpAjax";
import debounce from "lodash.debounce";
import ResizeSensor from "./ResizeSensor";
export const httpAjax = Ajax;
/*加载一批文件，_files:文件路径数组,可包括js,css,less文件,isSequence 是否按数组的顺序加载*/
export const loadFileList = (function() {
	/* 已加载文件缓存列表,用于判断文件是否已加载过，若已加载则不再次加载*/
	let classcodes = [];
	/*加载JS文件,url:文件路径*/
	const loadFile = function(url) {
		if (!FileIsExt(classcodes, url)) {
			var ThisType = GetFileType(url);
			var fileObj = null;
			if (ThisType == ".js") {
				fileObj = document.createElement("script");
				fileObj.src = url;
			} else if (ThisType == ".css") {
				fileObj = document.createElement("link");
				fileObj.href = url;
				fileObj.type = "text/css";
				fileObj.rel = "stylesheet";
			} else if (ThisType == ".less") {
				fileObj = document.createElement("link");
				fileObj.href = url;
				fileObj.type = "text/css";
				fileObj.rel = "stylesheet/less";
			}
			// success = success || function () { };
			return new Promise(function(resolve, reject) {
				fileObj.onload = fileObj.onreadystatechange = function() {
					if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
						// success();
						classcodes.push(url);
						resolve();
					}
				};
				document.getElementsByTagName("head")[0].appendChild(fileObj);
			});
		} else {
			return Promise.resolve();
		}
	};
	/*获取文件类型,后缀名，小写*/
	const GetFileType = function(url) {
		if (url != null && url.length > 0) {
			return url.substr(url.lastIndexOf(".")).toLowerCase();
		}
		return "";
	};
	/*文件是否已加载*/
	const FileIsExt = function(FileArray, _url) {
		if (FileArray != null && FileArray.length > 0) {
			var len = FileArray.length;
			for (var i = 0; i < len; i++) {
				if (FileArray[i] == _url) {
					return true;
				}
			}
		}
		return false;
	};
	return function(_files, isSequence) {
		var FileArray = [];
		if (dataTypeTest(_files) === "array") {
			FileArray = _files;
		} else if (dataTypeTest(_files) === "string") {
			/*如果文件列表是字符串，则用,切分成数组*/
			FileArray = _files.split(",");
		}
		if (FileArray != null && FileArray.length > 0) {
			var LoadedCount = 0;
			if (isSequence) {
				//依次加载
				return new Promise(function(resolve, reject) {
					const len = FileArray.length;
					let P = loadFile(FileArray.shift());
					for (var i = 0; i < len - 1; i++) {
						const url = FileArray[i];
						P = P.then(function() {
							LoadedCount++;
							return loadFile(url);
						});
					}
					P.then(function() {
						LoadedCount++;
						if (LoadedCount === len) {
							resolve();
						}
					});
				});
			} else {
				//非依次加载
				return new Promise(function(resolve, reject) {
					const len = FileArray.length;
					for (var i = 0; i < len; i++) {
						const url = FileArray[i];
						loadFile(url).then(function() {
							LoadedCount++;
							if (LoadedCount === len) {
								resolve();
							}
						});
					}
				});
			}
		} else {
			return Promise.reject();
		}
	};
})();
// import Vue from 'vue';

// const isServer = Vue.prototype.$isServer;
const isServer = false;
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = isServer ? 0 : Number(document.documentMode);

/* 去掉字符串首尾空格 */
const trim = function(string) {
	return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
/* istanbul ignore next */
const camelCase = function(name) {
	return name
		.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
			return offset ? letter.toUpperCase() : letter;
		})
		.replace(MOZ_HACK_REGEXP, "Moz$1");
};
//绑定不重复的事件
const hasListenerEvents = [];
export const onNoRepeatEvent = function(element, event, handler) {
	let hasBanded = null;
	let index = 0;
	for (let i = 0; i < hasListenerEvents.length; i++) {
		const item = hasListenerEvents[i];
		if (item.element == element && item.event == event) {
			hasBanded = item;
			index = i;
			break;
		}
	}
	if (hasBanded) {
		off(hasBanded.element, hasBanded.event, hasBanded.handler);
		on(element, event, handler);
		hasListenerEvents.splice(index, 1, { element, event, handler });
	} else {
		on(element, event, handler);
		hasListenerEvents.push({ element, event, handler });
	}
};
/* 绑定事件on(element, event, handler) */
export const on = (function() {
	if (!isServer && document.addEventListener) {
		return function(element, event, handler) {
			if (element && event && handler) {
				element.addEventListener(event, handler, false);
			}
		};
	} else {
		return function(element, event, handler) {
			if (element && event && handler) {
				element.attachEvent("on" + event, handler);
			}
		};
	}
})();

/* 绑定事件off(element, event, handler) */
export const off = (function() {
	if (!isServer && document.removeEventListener) {
		return function(element, event, handler) {
			if (element && event) {
				element.removeEventListener(event, handler, false);
			}
		};
	} else {
		return function(element, event, handler) {
			if (element && event) {
				element.detachEvent("on" + event, handler);
			}
		};
	}
})();

/* 绑定一次性事件one(element, event, handler) */
export const once = function(el, event, fn) {
	var listener = function() {
		if (fn) {
			fn.apply(this, arguments);
		}
		off(el, event, listener);
	};
	on(el, event, listener);
};

/* 是否存在某个样式类名 */
export function hasClass(el, cls) {
	if (!el || !cls) return false;
	if (cls.indexOf(" ") !== -1) throw new Error("className should not contain space.");
	if (el.classList) {
		return el.classList.contains(cls);
	} else {
		return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
	}
}

/* 添加className */
export function addClass(el, cls) {
	if (!el) return;
	var curClass = el.className;
	var classes = (cls || "").split(" ");

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.add(clsName);
		} else {
			if (!hasClass(el, clsName)) {
				curClass += " " + clsName;
			}
		}
	}
	if (!el.classList) {
		el.className = curClass;
	}
}

/* 移除className */
export function removeClass(el, cls) {
	if (!el || !cls) return;
	var classes = cls.split(" ");
	var curClass = " " + el.className + " ";

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.remove(clsName);
		} else {
			if (hasClass(el, clsName)) {
				curClass = curClass.replace(" " + clsName + " ", " ");
			}
		}
	}
	if (!el.classList) {
		el.className = trim(curClass);
	}
}

/* 获取某个元素的某个样式 */
export const getStyle =
	ieVersion < 9
		? function(element, styleName) {
				if (isServer) return;
				if (!element || !styleName) return null;
				styleName = camelCase(styleName);
				if (styleName === "float") {
					styleName = "styleFloat";
				}
				try {
					switch (styleName) {
						case "opacity":
							try {
								return element.filters.item("alpha").opacity / 100;
							} catch (e) {
								return 1.0;
							}
						default:
							return element.style[styleName] || element.currentStyle
								? element.currentStyle[styleName]
								: null;
					}
				} catch (e) {
					return element.style[styleName];
				}
		  }
		: function(element, styleName) {
				if (isServer) return;
				if (!element || !styleName) return null;
				styleName = camelCase(styleName);
				if (styleName === "float") {
					styleName = "cssFloat";
				}
				try {
					var computed = document.defaultView.getComputedStyle(element, "");
					return element.style[styleName] || computed ? computed[styleName] : null;
				} catch (e) {
					return element.style[styleName];
				}
		  };

/* 给某个元素设置 style */
export function setStyle(element, styleName, value) {
	if (!element || !styleName) return;

	if (typeof styleName === "object") {
		for (var prop in styleName) {
			if (styleName.hasOwnProperty(prop)) {
				setStyle(element, prop, styleName[prop]);
			}
		}
	} else {
		styleName = camelCase(styleName);
		if (styleName === "opacity" && ieVersion < 9) {
			element.style.filter = isNaN(value) ? "" : "alpha(opacity=" + value * 100 + ")";
		} else {
			element.style[styleName] = value;
		}
	}
}
//检测数据类型 ，返回对应数据类型的名称
export const dataTypeTest = function(item) {
	if (Array.isArray(item)) {
		return "array";
	} else if (Object.prototype.toString.call(item) === "[object Object]") {
		return "object";
	} else if (Object.prototype.toString.call(item) === "[object Date]") {
		return "date";
	} else if (typeof item === "string") {
		return "string";
	} else if (typeof item === "boolean") {
		return "boolean";
	} else if (typeof item === "undefined") {
		return "undefined";
	} else if (typeof item === "number") {
		return "number";
	} else if (item === null) {
		return "null";
	} else if (Object.prototype.toString.call(item) === "[object Function]") {
		return "function";
	} else if (Object.prototype.toString.call(item) === "[object Symbol]") {
		return "symbol";
	} else if (Object.prototype.toString.call(item) === "[object Set]") {
		return "set";
	} else if (Object.prototype.toString.call(item) === "[object Map]") {
		return "map";
	}
};
//深度复制对象
export const deepCopyObject = function(obj) {
	if (!obj || dataTypeTest(obj) !== "object") return {};
	// return JSON.parse(JSON.stringify(obj));
	let newobj = {};
	for (var key in obj) {
		var type = dataTypeTest(obj[key]);
		switch (type) {
			case "string":
			case "null":
			case "number":
			case "undefined":
			case "function":
			case "boolean":
			case "symbol":
			case "set":
			case "map":
				newobj[key] = obj[key];
				break;
			case "date":
				newobj[key] = obj[key].getTime();
				break;
			case "array":
				newobj[key] = deepCopyArray(obj[key]);
				break;
			case "object":
				newobj[key] = deepCopyObject(obj[key]);
				break;
		}
	}

	return newobj;
};
//深度复制数组
export const deepCopyArray = function(array) {
	if (!array || dataTypeTest(array) !== "array") return [];
	// return JSON.parse(JSON.stringify(array));
	var newarray = [];
	for (var i = 0; i < array.length; i++) {
		var item = array[i];
		var type = dataTypeTest(item);
		switch (type) {
			case "string":
			case "null":
			case "number":
			case "undefined":
			case "function":
			case "boolean":
			case "symbol":
			case "set":
			case "map":
				newarray.push(item);
				break;
			case "date":
				newarray.push(item.getTime());
				break;
			case "array":
				newarray.push(deepCopyArray(item));
				break;
			case "object":
				newarray.push(deepCopyObject(item));
				break;
		}
	}
	return newarray;
};
//深度复制数组/对象
export const deepCopy = function(value) {
	switch (dataTypeTest(value)) {
		case "object":
			return deepCopyObject(value);
			break;
		case "array":
			return deepCopyArray(value);
			break;
		default:
			return value;
	}
};
//根据条件过滤数组，只能过滤两种情况：一、数组里面全是对象，二、数组里面全是字符串或者其他类型的
const arrayFilterFn = function(array, property) {
	const type = dataTypeTest(property);
	return array.filter((item) => {
		const itemtype = dataTypeTest(item);
		if (itemtype === "object" && type === "object") {
			let hasItem = false;
			Object.keys(property).forEach((el) => {
				hasItem = item[el] === property[el];
			});
			return hasItem;
		} else {
			return item === property;
		}
	});
};
//用法一如：var arr=[{name:"水果",value:1},{name:"蔬菜",value:2}] ,arrayFilterBy(arr,{value:2})得到[{name:"蔬菜",value:2}]
//用法二如：var arr=[1,2,3,2,4,3,5,3]   arrayFilterBy(arr,3)得到 [3,3,3]
//用法三如：var arr=[{name:"水果",value:1},{name:"蔬菜",value:2},{name:"草莓",value:4}] ,arrayFilterBy(arr,[{value:2},{value:4}])得到[{name:"蔬菜",value:2},{name:"草莓",value:4}]
//用法四如：var arr=[1,2,3,2,4,3,5,3]   arrayFilterBy(arr,[3,2])得到 [3,3,3,2,2]
export const arrayFilterBy = function(array, property) {
	//property可以是{name:'zgt'}或者'zgt'
	if (!array || dataTypeTest(array) !== "array") return [];
	const type = dataTypeTest(property);
	if (type === "array") {
		let newarray = [];
		property.forEach((item) => {
			newarray = newarray.concat(arrayFilterFn(array, item));
		});
		return newarray;
	} else {
		return arrayFilterFn(array, property);
	}
};
//格式时间 支持时间戳转yyyy-MM-dd HH:mm:ss格式
//支持时间戳转 yyyy-mm-dd格式 ，支持yyyy/mm/dd转yyyy-mm-dd，不支持yyyy-mm-dd转yyyy/mm/dd
export const formatDate = function(time, format) {
	if (!time) return "";
	let date = dataTypeTest(time) === "date" ? time : new Date(time);
	let ft = trim(format || "yyyy-MM-dd HH:mm:ss").split(" ");
	let newdate = "";
	let symbol = "-";
	if (!ft[0]) return;
	if (/[-]+/.test(ft[0]) && !/[/]+/.test(ft[0])) {
		symbol = "-";
	} else if (!/[-]+/.test(ft[0]) && /[/]+/.test(ft[0])) {
		symbol = "/";
	} else if (/[:]+/.test(ft[0])) {
		symbol = ":";
	}
	let addZero = function(value) {
		if (Number(value) < 10) {
			return "0" + value;
		} else {
			return value;
		}
	};
	let setTimes = function(fts, symbol) {
		let newTime = "";
		let timeFtsLen = fts.split(":").length;
		switch (timeFtsLen) {
			case 1:
				newTime += addZero(date.getHours());
				break;
			case 2:
				newTime += addZero(date.getHours()) + symbol + addZero(date.getMinutes());
				break;
			default:
				newTime +=
					addZero(date.getHours()) +
					symbol +
					addZero(date.getMinutes()) +
					symbol +
					addZero(date.getSeconds());
				break;
		}
		return newTime;
	};

	if (symbol === ":") {
		newdate += setTimes(ft[0], symbol);
	} else {
		let timeFtsLen = ft[0].split(symbol).length;
		switch (timeFtsLen) {
			case 1:
				newdate += date.getFullYear();
				break;
			case 2:
				newdate += date.getFullYear() + symbol + addZero(date.getMonth() + 1);
				break;
			default:
				newdate +=
					date.getFullYear() + symbol + addZero(date.getMonth() + 1) + symbol + addZero(date.getDate());
				break;
		}

		if (ft[1]) {
			symbol = ":";
			newdate += " ";
			newdate += setTimes(ft[1], symbol);
		}
	}
	return newdate;
};

// {
//     probeType: 2,
//     bounce: false,
//     momentum:false,
//     disableMouse:true,
//     disablePointer:true,
//     disableTouch:true,
//     scrollX: true,
//     preventDefault: false,
//     scrollY: true,
//     mouseWheel: true,
//     bindToWrapper: true,
//     eventPassthrough: false,
//     scrollbars: "custom",
//     interactiveScrollbars: true,
// }

//生成IScroll 滚动条实例
export const IScrollInstance = function(el, opt) {
	let defaultopt = Object.assign(
		{
			disableMouse: true,
			disablePointer: true,
			disableTouch: true,
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
		dataTypeTest(opt) === "object" ? opt : {},
	);
	return new IScroll(el, defaultopt);
};
//更新iscroll
export const BuildScroll = function(el, opt) {
	this.scroll = IScrollInstance(el, opt);
	this.nextScrollToTop = false;
	this.refresh = function() {
		if (this.nextScrollToTop) {
			this.scroll.scrollTo(0, 0, 200);
			this.nextScrollToTop = false;
		}
		this.scroll.refresh();
	}.bind(this);
	//解决嵌套滚动条滚动问题
	let canscroll = false;
	let timer = null;
	const wheelhandle = (e) => {
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
};
//
export const scrollDisableWheel = function(el) {
	let scrollEnd = true;
	let onWheel = (e) => {
		const delta = e.deltaY ? e.deltaY : -e.wheelDeltaY;
		if ((delta > 0 && el.scrollTop + el.clientHeight < el.scrollHeight) || (delta < 0 && el.scrollTop > 0)) {
			scrollEnd = false;
		}
		if (!scrollEnd) e.stopPropagation();
	};
	on(el, "wheel", onWheel);
	on(el, "mousewheel", onWheel);
	on(el, "DOMMouseScroll", onWheel);
	on(el, "scroll", (e) => {
		scrollEnd = el.scrollTop + el.clientHeight >= el.scrollHeight || el.scrollTop === 0;
	});
};
//监听盒子（div）尺寸变化
export const listenDivSizeChange = function(el, scrollFun) {
	new ResizeSensor(el, debounce(scrollFun, 70));
	// return;
	// // scroll passive events
	// let passiveEvents = false;
	// try {
	// 	const opts = Object.defineProperty({}, "passive", {
	// 		get: function() {
	// 			passiveEvents = { passive: true };
	// 		},
	// 	});
	// 	window.addEventListener("test", null, opts);
	// } catch (e) {}
	// // el.style.position = "relative";
	// el.style.minWidth = "20px";
	// el.style.minHeight = "20px";
	// let lastWidth = el.offsetWidth || 1;
	// let lastHeight = el.offsetHeight || 1;
	// const maxWidth = 10000 * lastWidth;
	// const maxHeight = 10000 * lastHeight;
	// const _parDiv = document.createElement("div");
	// _parDiv.style.cssText =
	// 	"position: absolute;visibility: hidden;width: 100%;height: 100%;overflow: hidden;top:0;right: 0;left: 0;bottom: 0;z-index: -1000;";
	// _parDiv.className = "listen_div_size_change";
	// const _cloneParDiv = _parDiv.cloneNode(false);
	// const _ChildDiv = document.createElement("div");
	// _ChildDiv.style.cssText = "transition:0s; animation:none;";
	// const _cloneChildDiv = _ChildDiv.cloneNode(false);

	// _ChildDiv.style.width = maxWidth + "px";
	// _ChildDiv.style.height = maxHeight + "px";

	// _cloneChildDiv.style.width = "250%";
	// _cloneChildDiv.style.height = "250%";

	// _parDiv.appendChild(_ChildDiv);
	// _cloneParDiv.appendChild(_cloneChildDiv);

	// el.appendChild(_parDiv);
	// el.appendChild(_cloneParDiv);

	// if (_parDiv.offsetParent !== el) {
	// 	el.style.position = "relative";
	// }

	// _parDiv.scrollTop = _cloneParDiv.scrollTop = maxHeight;
	// _parDiv.scrollLeft = _cloneParDiv.scrollLeft = maxWidth;

	// // _parDiv.scrollTop = _parDiv.scrollHeight;
	// // _parDiv.scrollLeft = _parDiv.scrollWidth;

	// // _cloneParDiv.scrollTop = _cloneParDiv.scrollHeight;
	// // _cloneParDiv.scrollLeft = _cloneParDiv.scrollWidth;
	// const handler = lodash.debounce(() => {
	// 	console.log("改变");
	// 	scrollFun();
	// }, 100);
	// var newWidth = 0;
	// var newHeight = 0;
	// function onResize() {
	// 	if (newWidth !== lastWidth || newHeight !== lastHeight) {
	// 		lastWidth = newWidth;
	// 		lastHeight = newHeight;
	// 		handler();
	// 	}
	// }
	// function onScroll() {
	// 	newWidth = el.offsetWidth || 1;
	// 	newHeight = el.offsetHeight || 1;
	// 	if (newWidth !== lastWidth || newHeight !== lastHeight) {
	// 		requestAnimationFrame(onResize);
	// 	}
	// 	_parDiv.scrollTop = _cloneParDiv.scrollTop = maxHeight;
	// 	_parDiv.scrollLeft = _cloneParDiv.scrollLeft = maxWidth;
	// }
	// _parDiv.addEventListener("scroll", onScroll, passiveEvents);
	// _cloneParDiv.addEventListener("scroll", onScroll, passiveEvents);
};
//随机产生不重复id
export const GenNonDuplicateID = function(randomLength = 8) {
	let id = Number(
		Math.random()
			.toString()
			.substr(3, randomLength) + Date.now(),
	).toString();
	return id;
};
//生成 引导提示 introjs的实例，注意的是：此函数返回promise 需要在then((intro)>{})拿introjs的实例
export const IntroInstance = function(opt) {
	//异步加载相关文件
	return loadFileList([
		"./static/introJs/introjs.min.css",
		"./static/introJs/themes/introjs-flattener.css",
		"./static/introJs/intro.min.js",
	]).then(() => {
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
//科学计数法转 字符串
//如 6.5E8 得 "650000000"
//如 6.5e-7得 "0.65000000"
export const EetoString = (num) => {
	var str = num.toString();
	var reg = /^((\d+.\d+)|(\d+))([Ee])([\-]?\d+)$/;
	var arr,
		len,
		zerod = "";

	/*6e7或6e+7 都会自动转换数值*/
	if (!reg.test(str)) {
		return num;
	} else {
		/*6e-7 需要手动转换*/
		arr = reg.exec(str);
		len = Math.abs(arr[5]) - 1;
		for (var i = 0; i < len; i++) {
			zerod += "0";
		}
		return "0." + zerod + (arr[2] ? arr[1] : arr[3]).replace(".", "");
	}
};
// 过滤一个对象中有用的的属性，permissiveKys是允许的属性名数组
export function filterQuery(permissiveKys, query) {
	const newQuery = {};
	Object.keys(query).forEach((key) => {
		if (permissiveKys.includes(key)) {
			newQuery[key] = query[key];
		}
	});
	return newQuery;
}
//将url问号参数转成map对象
export const parseQueryString = function(url) {
	if (isUrl(url)) {
		const searchurl = url.split("?");
		url = searchurl.length > 1 ? "?" + searchurl[1] : searchurl[0];
	}
	var reg_url = /^\?([\w\W]+)$/;
	var reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
		arr_url = reg_url.exec(url),
		ret = {};
	if (arr_url && arr_url[1]) {
		var str_para = arr_url[1],
			result;
		while ((result = reg_para.exec(str_para)) != null) {
			ret[result[1]] = result[2];
		}
	}
	return ret;
};
//检测移动端设备

export const checkDevices = function() {
	const userAgent = global.navigator.userAgent;
	if (/Android/i.test(userAgent)) {
		return "android";
	} else if (/iPhone|iPad|iPod/i.test(userAgent)) {
		return "ios";
	} else if (/WindowsWechat/i.test(userAgent)) {
		return "WindowsWechat";
	} else if (/MicroMessenger/i.test(userAgent)) {
		return "MicroMessenger";
	}
	// const inAndroid = /Android/i.test(userAgent)
	// const inIOS = /iPhone|iPad|iPod/i.test(userAgent)
	// const inMicroMessenger = /MicroMessenger/i.test(userAgent)
	// const inWindowsWechat = /WindowsWechat/i.test(userAgent)
};

//新增

// export function fixedZero(val) {
// 	return val * 1 < 10 ? `0${val}` : val;
// }

// export function getTimeDistance(type) {
// 	const now = new Date();
// 	const oneDay = 1000 * 60 * 60 * 24;

// 	if (type === "today") {
// 		now.setHours(0);
// 		now.setMinutes(0);
// 		now.setSeconds(0);
// 		return [moment(now), moment(now.getTime() + (oneDay - 1000))];
// 	}

// 	if (type === "week") {
// 		let day = now.getDay();
// 		now.setHours(0);
// 		now.setMinutes(0);
// 		now.setSeconds(0);

// 		if (day === 0) {
// 			day = 6;
// 		} else {
// 			day -= 1;
// 		}

// 		const beginTime = now.getTime() - day * oneDay;

// 		return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
// 	}

// 	if (type === "month") {
// 		const year = now.getFullYear();
// 		const month = now.getMonth();
// 		const nextDate = moment(now).add(1, "months");
// 		const nextYear = nextDate.year();
// 		const nextMonth = nextDate.month();

// 		return [
// 			moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
// 			moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
// 		];
// 	}

// 	if (type === "year") {
// 		const year = now.getFullYear();

// 		return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
// 	}
// }

// export function getPlainNode(nodeList, parentPath = "") {
// 	const arr = [];
// 	nodeList.forEach((node) => {
// 		const item = node;
// 		item.path = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
// 		item.exact = true;
// 		if (item.children && !item.component) {
// 			arr.push(...getPlainNode(item.children, item.path));
// 		} else {
// 			if (item.children && item.component) {
// 				item.exact = false;
// 			}
// 			arr.push(item);
// 		}
// 	});
// 	return arr;
// }

function accMul(arg1, arg2) {
	let m = 0;
	const s1 = arg1.toString();
	const s2 = arg2.toString();
	m += s1.split(".").length > 1 ? s1.split(".")[1].length : 0;
	m += s2.split(".").length > 1 ? s2.split(".")[1].length : 0;
	return (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) / 10 ** m;
}

export function digitUppercase(n) {
	const fraction = ["角", "分"];
	const digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
	const unit = [["元", "万", "亿"], ["", "拾", "佰", "仟", "万"]];
	let num = Math.abs(n);
	let s = "";
	fraction.forEach((item, index) => {
		s += (digit[Math.floor(accMul(num, 10 * 10 ** index)) % 10] + item).replace(/零./, "");
	});
	s = s || "整";
	num = Math.floor(num);
	for (let i = 0; i < unit[0].length && num > 0; i += 1) {
		let p = "";
		for (let j = 0; j < unit[1].length && num > 0; j += 1) {
			p = digit[num % 10] + unit[1][j] + p;
			num = Math.floor(num / 10);
		}
		s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
	}

	return s
		.replace(/(零.)*零元/, "元")
		.replace(/(零.)+/g, "零")
		.replace(/^整$/, "零元整");
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
	return reg.test(path);
}

// 将从后台获取的导航数据转成route的需要的key
export function formatterMapKey(data, mapKey = {}, parentPath = "/") {
	mapKey = Object.assign(
		{ iconClass: "iconClass", path: "path", name: "name", children: "children" },
		mapKey ? mapKey : {},
	);
	return data.map((item) => {
		let path = item[mapKey.path];
		path = parentPath + path.replace(/^\/*/, "");
		const newData = {
			...item,
			iconClass: item[mapKey.iconClass] !== undefined ? item[mapKey.iconClass] : "smile-o",
			path,
			parPath: parentPath.replace(/\/$/, ""),
			name: item[mapKey.name],
		};
		if (Array.isArray(item[mapKey.children]) && item[mapKey.children].length) {
			newData[mapKey.children] = formatterMapKey(item[mapKey.children], mapKey, `${path}/`);
		}
		return newData;
	});
}

// 合并defaultConfig的属性生成新的config
export const mergeConfig = (defaultConfig, theConfig) => {
	let newConfig = {};
	if (theConfig)
		Object.keys(defaultConfig).forEach((key) => {
			if (dataTypeTest(defaultConfig[key]) === "object") {
				newConfig[key] = Object.assign(
					{},
					defaultConfig[key],
					theConfig[key] !== undefined ? deepCopy(theConfig[key]) : {},
				);
			} else {
				newConfig[key] = theConfig[key] !== undefined ? deepCopy(theConfig[key]) : defaultConfig[key];
			}
		});
	else{
		newConfig=defaultConfig;
	}
	return newConfig;
};
export const zTool = {
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
	IScrollInstance,
	scrollDisableWheel,
	GenNonDuplicateID,
	arrayFilterBy,
	IntroInstance,
	EetoString,
	onNoRepeatEvent,
	filterQuery,
	parseQueryString,
	listenDivSizeChange,
	mergeConfig,
	formatterMapKey,
	httpAjax,
	isUrl,
};
export default zTool;
