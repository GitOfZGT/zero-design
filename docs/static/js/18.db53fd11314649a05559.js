(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+fre":function(t,e,n){"use strict";n.r(e);var o=n("JsaA"),r=n("GPkD"),a=n.n(r),s=n("pv+U"),l=n.n(s),d=n("aTAs"),i=n.n(d),c=n("k7W2"),u=n.n(c),m=n("zqcf"),p=n.n(m),f=n("rdAL"),h=n.n(f);e.default={name:"AshowDemoHOC",HOC:function(t,e){return function(n){function r(){return a()(this,r),i()(this,u()(r).apply(this,arguments))}return p()(r,n),l()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=e,n._render=function(){return t}}},{key:"render",value:function(){var t=this;return h.a.createElement("div",{ref:function(e){t.boxEl=e}},h.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(h.a.PureComponent)}}},BOae:function(t,e){t.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zform">普通表单：Zform</h1>\n<p><code>Zform</code>将<code>antd</code>的<code>Form</code>、<code>Form.item</code>的结构转成数据结构直接渲染的方式，并且自带有一个<code>提交</code>表单的按钮</p>\n<p>1、基本使用 labelLayout==&#39;horizontal&#39;</p>\n<div class="z-demo-box" data-render="demo1" data-title="labelLayout==\'horizontal\'"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport { Zform } from &quot;zerod&quot;;\nimport { Input, message } from &quot;antd&quot;;\nclass Myjavascript extends React.PureComponent {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: (form) =&gt; {\n                return new Promise((resolve) =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve(&lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;);\n                    }, 5000);\n                });\n            },\n            //antd的 form.getFieldDecorator的options\n            options: () =&gt; ({\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            }),\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n            render: (form) =&gt; {\n                return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;colorValue&quot;,\n            label: &quot;颜色值&quot;,\n            render: (form) =&gt; {\n                return &lt;ZcolorPicker className=&quot;z-margin-top-4&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;serviceRemark&quot;,\n            label: &quot;服务说明&quot;,\n            render: (form) =&gt; {\n                return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;servicePort&quot;,\n            label: &quot;端口号&quot;,\n            labelWidth: &quot;80px&quot;,\n            render: (form) =&gt; {\n                return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;myButton&quot;,\n            label: &quot;按钮&quot;,\n            render: (form, changeFormItems) =&gt; {\n                return (\n                    &lt;Button\n                        type=&quot;primary&quot;\n                        onClick={() =&gt; {\n                            const newItems = this.items.slice(0);\n                            newItems.splice(4, 1);\n                            changeFormItems(hasHide ? this.items : newItems);\n                            hasHide = !hasHide;\n                        }}\n                    &gt;\n                        {hasHide ? &quot;显示&quot; : &quot;不显示&quot;}端口号\n                    &lt;/Button&gt;\n                );\n            },\n        },\n        {\n            key: &quot;confProperty&quot;,\n            label: &quot;默认配置&quot;,\n            render: (form) =&gt; {\n                return &lt;Input.TextArea rows={15} placeholder=&quot;请输入默认配置&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n    ];\n    defaultValue = {\n        serviceCode: &quot;9999&quot;,\n        serviceRemark: &quot;llll&quot;,\n    };\n    render() {\n        return (\n            &lt;Zform\n                labelLayout=&quot;horizontal&quot;\n                formDefaultValues={this.defaultValue}\n                items={this.items}\n                onSubmit={(values) =&gt; {\n                    // console.log(values);\n                    return Promise.resolve().then((re) =&gt; {\n                        message.success(&quot;提交成功：&quot; + JSON.stringify(values));\n                    });\n                }}\n            /&gt;\n        );\n    }\n}</code></pre>\n<div class="z-doc-titles"></div>\n\n<h2 id="zform-props">Zform 的 props</h2>\n<p>可追 <code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>生成表单的json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onSubmit</td>\n            <td>表单提交事件,(values)=>{return Promise.resolve()},当submitMsg不为空时,onSubmit函数必须返回Promise对象才能关闭提示框</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnName</td>\n            <td>提交按钮的名称，如果为空则不显示默认的提交按钮</td>\n            <td>string | furnction(){\n                return ReactNode | Element;\n            }</td>\n            <td>保存</td>\n        </tr>\n        <tr>\n            <td>submitMsg</td>\n            <td>提交表单时的确认提示框文本，如果为空，则不会触发提示</td>\n            <td>string</td>\n            <td>点击确定按钮提交数据</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnRender</td>\n            <td>渲染提交按钮的函数，可以用自定义内容替换默认的提交按钮;参数有onSubmit：内置的提交按钮的方法，props:Zform组件的props,可以取得props.form</td>\n            <td>funtion(onSubmit,props){return ReactNode | Element;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>formDefaultValues</td>\n            <td>返显表单的数据，如{serviceName:"名称"}，"serviceName"对应items属性里面的key, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>getFormInstance</td>\n            <td>获取Form实例的钩子，外部通过(form)=>{this.formIstance=form;}获得form实例对象,通过this.formInstance.调用antd<a href="https://ant.design/components/form-cn/" target="_blank">表单相关方法</a></td>\n            <td>function(form,methods){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>afterItemsRendered</td>\n            <td>所有表单控件渲染完的回调，包括异步渲染控件</a></td>\n            <td>function(form,methods){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>labelLayout</td>\n            <td>label的布局方式</a></td>\n            <td>\'horizontal\'|\'vertical\'</td>\n            <td>\'vertical\'</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="items-">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>labelWidth</td>\n            <td>label的宽度，如labelWidth:"120px"，当labelLayout==\'horizontal\'才可能用的上</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> render</td>\n            <td>渲染表单控件的钩子。支持异步加载：必须return的是Promise对象。例如使用了后台接口：(form,changeFormItems)=>api.getOptions.then(re=>{return 表单控件})。changeFormItems是一个方法，可用于改变items,可选参数有newItems：changeFormItems(newItems)，但不能直接在render函数中使用，应在控件的事件当中</td>\n            <td>(form,changeFormItems)=>{return ReactNode | Element | Promise}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:4,xl:6,lg:8}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>isFormItem</td>\n            <td>默认为true、如果为false则render函数可以渲染非表单控件内容</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>可以给每项添加className</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> options</td>\n            <td><a href="https://ant.design/components/form-cn/" target="_blank">Antd的表单中getFieldDecorator函数的options参数</a>,可以配置验证规则}</td>\n            <td>object || ()=>options</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},bxDW:function(t,e,n){t.exports=n("y68U")(298)},d21d:function(t,e,n){"use strict";n.r(e);var o=n("+Qac"),r=n("prVy"),a=n.n(r),s=n("zUbA"),l=n("JsaA"),d=n("pGH2"),i=n("FOOf"),c=n("z6iY"),u=n("S0qk"),m=n.n(u),p=n("GPkD"),f=n.n(p),h=n("pv+U"),v=n.n(h),g=n("aTAs"),q=n.n(g),b=n("k7W2"),y=n.n(b),E=n("zqcf"),z=n.n(E),k=n("rdAL"),w=n.n(k),x=n("ebhq"),N=n("BOae"),C=n.n(N),S=x.a.AmdDocHOC,I=!1;e.default=S(C.a,{demo1:function(){var t=function(t){function e(){var t,n;f()(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=q()(this,(t=y()(e)).call.apply(t,[this].concat(r)))).items=[{key:"serviceCode",label:"服务编码",render:function(t){return new m.a(function(t){setTimeout(function(){t(w.a.createElement(c.a,{placeholder:"请输入服务编码"}))},5e3)})},options:function(){return{rules:[{required:!0,message:"不能为空。"}]}}},{key:"serviceName",label:"服务名称",render:function(t){return w.a.createElement(c.a,{placeholder:"请输入服务名称"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"colorValue",label:"颜色值",render:function(t){return w.a.createElement(i.a,{className:"z-margin-top-4"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceRemark",label:"服务说明",render:function(t){return w.a.createElement(c.a.TextArea,{rows:2,placeholder:"请输入服务说明"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"servicePort",label:"端口号",labelWidth:"80px",render:function(t){return w.a.createElement(d.a,{min:11110,max:65535,step:10})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"myButton",label:"按钮",render:function(t,e){return w.a.createElement(l.a,{type:"primary",onClick:function(){var t=n.items.slice(0);t.splice(4,1),e(I?n.items:t),I=!I}},I?"显示":"不显示","端口号")}},{key:"confProperty",label:"默认配置",render:function(t){return w.a.createElement(c.a.TextArea,{rows:15,placeholder:"请输入默认配置"})},options:{rules:[{required:!0,message:"不能为空。"}]}}],n.defaultValue={serviceCode:"9999",serviceRemark:"llll"},n}return z()(e,t),v()(e,[{key:"render",value:function(){return w.a.createElement(o.b,{labelLayout:"horizontal",formDefaultValues:this.defaultValue,items:this.items,onSubmit:function(t){return m.a.resolve().then(function(e){s.a.success("提交成功："+a()(t))})}})}}]),e}(w.a.PureComponent);return w.a.createElement(t,null)}})},ebhq:function(t,e,n){"use strict";n("Vsw1"),n("yDl1");var o=n("6h6h"),r=n.n(o),a=(n("/2a5"),n("P4eO"),n("jjl2")),s={},l=[];a.keys().forEach(function(t){var e=void 0;try{e=a(t).default}catch(e){throw Error("".concat(t,":").concat(e))}if(void 0===e||"object"!==r()(e))throw Error("".concat(t,":内没有 export default 或者export default格式有误 "));if("function"!=typeof e.HOC)throw Error("".concat(t,":HOC有误"));var n=e.name;if("string"!=typeof n)throw Error("".concat(t,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(t,":name属性请以A开头HOC结尾"));if(n=n.trim(),l.includes(n))throw Error("".concat(t,":").concat(n,"此HOC名称已被使用"));l.push(n),s[n]=e.HOC}),e.a=s},jjl2:function(t,e,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id="jjl2"},pnNO:function(t,e,n){"use strict";n.r(e);var o=n("MaNN"),r=n("C6MB"),a=(n("yDl1"),n("PwP1")),s=(n("Vsw1"),n("4Loy"),n("U7Fr")),l=n.n(s),d=n("/sSO"),i=(n("P4eO"),n("GPkD")),c=n.n(i),u=n("pv+U"),m=n.n(u),p=n("aTAs"),f=n.n(p),h=n("k7W2"),v=n.n(h),g=n("zqcf"),q=n.n(g),b=n("kB6t"),y=(n("YTQH"),n("rdAL")),E=n.n(y),z=n("FFPy"),k=n.n(z),w=(n("T9cD"),n("tW/l")),x=n.n(w);var N=Object(b.a)(),C=!1;e.default={name:"AmdDocHOC",HOC:function(t,e){t='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+t;var n=function(n){function o(){var t,e;c()(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=f()(this,(t=v()(o)).call.apply(t,[this].concat(r)))).renderEls=[],e.state={navs:[],closeModaled:!0},e.setNavs=function(){var t=[],n=e.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){t.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-e.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),t.length&&e.setState({navs:t},function(){if(e.bindScrollEvent(),e.navEl&&e.navContentEl){var t=d.h.BuildScroll;e.navScroollInstance=new t(e.navEl,{scrollbars:"custom"}),d.h.listenDivSizeChange(e.navEl,e.navScroollInstance.refresh),d.h.listenDivSizeChange(e.navContentEl,e.navScroollInstance.refresh)}})},e.scrollEnd=function(){var t=-e.scrollInstance.scroll.y;e.state.navs.forEach(function(t){t.active=!1});for(var n=e.state.navs.length,o=0;o<n;o++){var r=e.state.navs[o];if(t>=r.el.offsetTop-120){if(!(o<n-1)){r.active=!0;break}var a=e.state.navs[o+1];if(a&&t<a.el.offsetTop-120){r.active=!0;break}}}e.setState({navs:l()(e.state.navs)})},e.bindScrollEvent=function(){e.scrollInstance.scroll.on("scrollEnd",e.scrollEnd)},e.navScrollTo=function(t){e.scrollInstance.scroll.scrollTo(0,-(t.el.offsetTop-24),200)},e}return q()(o,n),m()(o,[{key:"componentWillUnmount",value:function(){C=!0,this.renderEls.forEach(function(t){k.a.unmountComponentAtNode(t)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var t=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(t){var e={};if(t.dataset)return t.dataset;for(var n=0;n<t.attributes.length;n++){var o=t.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var r=t.attributes[n].nodeValue;e[o.match(/^data-(\w+)/)[1]]=r}}return e}(n);if(e&&"function"==typeof e[o.render]){var r=n.nextElementSibling;r=r&&"pre"==r.localName?r:null;var a=e[o.render]();t.renderEls.push(n),k.a.render(a,n,function(){var t=document.createElement("div");t.className="z-demo-footer";var e=document.createElement("div");e.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=o.title?o.title:"",e.appendChild(l),r&&e.appendChild(s),t.appendChild(e),r&&a.appendChild(r),t.appendChild(a),n.appendChild(t)})}}),this.mdEl.addEventListener("click",function(e){"string"==typeof e.target.className&&e.target.className.includes("z-open-modal-btn")&&setTimeout(function(){C=!1,"function"==typeof e.target._render&&t.props.showRightModal({show:!0,modal:e.target._modal?e.target._modal:"mainModal",content:e.target._render(),scroll:e.target._scroll,onTransitionend:function(e){C||t.setState({closeModaled:!e})}})},10)},!1),this.mdEl.addEventListener("click",function(e){if("string"==typeof e.target.className&&e.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==e.target._modal)t.props.showRouteLoading(!0),setTimeout(function(){t.props.showRouteLoading(!1)},2e3);else{var n=e.target._modal?e.target._modal:"mainModal";C=!1,t.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(e){C||t.setState({closeModaled:!e})}}),t.props.showModalLoading(!0,n),setTimeout(function(){t.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof e.target.className&&e.target.className.includes("z-history-href")){var n=e.target.dataset.path;"string"==typeof n&&t.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){t.setNavs()},100)}},{key:"render",value:function(){var e=this;return E.a.createElement(r.b.Template,null,E.a.createElement(N,{pageHeader:{show:!1},hasBodyPadding:!1},E.a.createElement("div",{className:"z-panel ".concat(x.a["z-md-doc"]),ref:function(t){return e.mdEl=t}},E.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},E.a.createElement(a.a,{mode:"html"},t)))),this.state.navs.length&&this.state.closeModaled?k.a.createPortal(E.a.createElement("div",{className:x.a["z-nav-box"],ref:function(t){return e.navEl=t}},E.a.createElement("div",{ref:function(t){return e.navContentEl=t}},E.a.createElement("section",null,this.state.navs.map(function(t,n){return E.a.createElement("div",{title:t.name,className:"".concat(x.a["z-nav"]," ").concat(t.active?x.a.active:""),key:n,onClick:function(){e.navScrollTo(t)}},t.name)})))),document.body):null)}}]),o}(E.a.PureComponent);return o.a.setConsumer(n)}}}}]);