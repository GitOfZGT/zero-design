(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+fre":function(e,t,n){"use strict";n.r(t);var o=n("2/Rp"),r=n("/HRN"),a=n.n(r),s=n("WaGi"),l=n.n(s),i=n("ZDA2"),d=n.n(i),c=n("/+P4"),u=n.n(c),m=n("N9n2"),p=n.n(m),f=n("q1tI"),h=n.n(f);t.default={name:"AshowDemoHOC",HOC:function(e,t){return function(n){function r(){return a()(this,r),d()(this,u()(r).apply(this,arguments))}return p()(r,n),l()(r,[{key:"componentDidMount",value:function(){var n=this.boxEl.querySelector(".z-open-modal-btn");n._scroll=t,n._render=function(){return e}}},{key:"render",value:function(){var e=this;return h.a.createElement("div",{ref:function(t){e.boxEl=t}},h.a.createElement(o.a,{type:"primary",className:"z-open-modal-btn"},"查看Demo"))}}]),r}(h.a.PureComponent)}}},BOae:function(e,t){e.exports='<div class="z-doc-titles"></div>\n\n<h1 id="-zform">普通表单：Zform</h1>\n<p><code>Zform</code>将<code>antd</code>的<code>Form</code>、<code>Form.item</code>的结构转成数据结构直接渲染的方式，并且自带有一个<code>提交</code>表单的按钮  </p>\n<p>继承了React.PureComponent  </p>\n<p>1、labelLayout==&#39;inline&#39;</p>\n<div class="z-demo-box" data-render="demo1" data-title="inline"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;\nimport ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { Zform } from &quot;zerod&quot;;\nimport { Input, message } from &quot;antd&quot;;\nclass Myjavascript extends React.PureComponent {\n    items = [\n        {\n            key: &quot;serviceCode&quot;,\n            label: &quot;服务编码&quot;,\n            render: (form) =&gt; {\n                return new Promise((resolve) =&gt; {\n                    setTimeout(() =&gt; {\n                        resolve(&lt;Input placeholder=&quot;请输入服务编码&quot; /&gt;);\n                    }, 5000);\n                });\n            },\n            //antd的 form.getFieldDecorator的options\n            options: () =&gt; ({\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            }),\n        },\n        {\n            key: &quot;serviceName&quot;,\n            label: &quot;服务名称&quot;,\n            render: (form) =&gt; {\n                return &lt;Input placeholder=&quot;请输入服务名称&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;colorValue&quot;,\n            label: &quot;颜色值&quot;,\n            render: (form) =&gt; {\n                return &lt;ZcolorPicker className=&quot;z-margin-top-4&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;serviceRemark&quot;,\n            label: &quot;服务说明&quot;,\n            span: { md: 24 },\n            render: (form) =&gt; {\n                return &lt;Input.TextArea rows={2} placeholder=&quot;请输入服务说明&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;servicePort&quot;,\n            label: &quot;端口号&quot;,\n            labelWidth: &quot;80px&quot;,\n            render: (form) =&gt; {\n                return &lt;InputNumber min={11110} max={65535} step={10} /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n        {\n            key: &quot;myButton&quot;,\n            label: &quot;按钮&quot;,\n            render: (form, changeFormItems) =&gt; {\n                return (\n                    &lt;Button\n                        type=&quot;primary&quot;\n                        onClick={() =&gt; {\n                            const newItems = this.items.slice(0);\n                            newItems.splice(4, 1);\n                            changeFormItems(hasHide ? this.items : newItems);\n                            hasHide = !hasHide;\n                        }}\n                    &gt;\n                        {hasHide ? &quot;显示&quot; : &quot;不显示&quot;}端口号\n                    &lt;/Button&gt;\n                );\n            },\n        },\n        {\n            key: &quot;confProperty&quot;,\n            label: &quot;默认配置&quot;,\n            span: 24,\n            render: (form) =&gt; {\n                return &lt;Input.TextArea rows={15} placeholder=&quot;请输入默认配置&quot; /&gt;;\n            },\n            //antd的 form.getFieldDecorator的options\n            options: {\n                //验证规则\n                rules: [\n                    {\n                        required: true,\n                        message: &quot;不能为空。&quot;,\n                    },\n                ],\n            },\n        },\n    ];\n    defaultValue = {\n        serviceCode: &quot;9999&quot;,\n        serviceRemark: &quot;llll&quot;,\n    };\n    render() {\n        return (\n            &lt;Zform\n                labelLayout=&quot;horizontal&quot;\n                formDefaultValues={this.defaultValue}\n                items={this.items}\n                onSubmit={(values) =&gt; {\n                    // console.log(values);\n                    return Promise.resolve().then((re) =&gt; {\n                        message.success(&quot;提交成功：&quot; + JSON.stringify(values));\n                    });\n                }}\n            /&gt;\n        );\n    }\n}</code></pre>\n<p>2、labelLayout==&quot;vertical&quot;</p>\n<div class="z-demo-box" data-render="demo2" data-title="vertical"></div>\n\n<p>2、labelLayout==&quot;horizontal&quot;</p>\n<div class="z-demo-box" data-render="demo3" data-title="horizontal"></div>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="zform-props">Zform 的 props</h2>\n<p>可追 <code>className</code>、<code>style</code></p>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>items</td>\n            <td>生成表单的json数组，请看下面的items结构, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>defaultSpan</td>\n            <td>统一设置items栅栏占格，默认：{xxl:6,xl:8,lg:12,md:24}，但items中的span属性的优先级比这个高</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>onSubmit</td>\n            <td>表单提交事件,(values)=>{return Promise.resolve()},当submitMsg不为空时,onSubmit函数必须返回Promise对象才能关闭提示框</td>\n            <td>function</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnName</td>\n            <td>提交按钮的名称，如果为空则不显示默认的提交按钮</td>\n            <td>string | furnction(){\n                return ReactNode | Element;\n            }</td>\n            <td>保存</td>\n        </tr>\n        <tr>\n            <td>submitMsg</td>\n            <td>提交表单时的确认提示框文本，如果为空，则不会触发提示</td>\n            <td>string</td>\n            <td>点击确定按钮提交数据</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> submitBtnRender</td>\n            <td>渲染提交按钮的函数，可以用自定义内容替换默认的提交按钮;参数有onSubmit：内置的提交按钮的方法，props:Zform组件的props,可以取得props.form</td>\n            <td>funtion(onSubmit,props){return ReactNode | Element;}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>formDefaultValues</td>\n            <td>返显表单的数据，如{serviceName:"名称"}，"serviceName"对应items属性里面的key, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>getFormInstance</td>\n            <td>获取Form实例的钩子，外部通过(form)=>{this.formIstance=form;}获得form实例对象,通过this.formInstance.调用antd<a href="https://ant.design/components/form-cn/" target="_blank">表单相关方法</a></td>\n            <td>function(form,methods){}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>afterItemsRendered</td>\n            <td>所有表单控件渲染完的回调，包括异步渲染控件</a></td>\n            <td>function(form,methods){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>labelLayout</td>\n            <td>label的布局方式</a></td>\n            <td>\'horizontal\'|\'vertical\'|\'inline\'</td>\n            <td>\'vertical\'</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="items-">items 结构</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>key</td>\n            <td>表单控件value对应的字段名</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>label</td>\n            <td>表单控件label</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>labelWidth</td>\n            <td>label的宽度，如labelWidth:"120px"，当labelLayout==\'horizontal\'才可能用的上</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> render</td>\n            <td>渲染表单控件的钩子。支持异步加载：必须return的是Promise对象。例如使用了后台接口：(form,changeFormItems)=>api.getOptions.then(re=>{return 表单控件})。changeFormItems 是一个方法，主要用于局部改变items，实现表单控件之间交互联动,使用方式请往下看</td>\n            <td>(form,changeFormItems)=>{return ReactNode | Element | Promise}</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>span</td>\n            <td>栅栏占格(antd的栅栏组件分24栏)，例：{xxl:4,xl:6,lg:8}，默认取this.props.defaultSpan</td>\n            <td>number | object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>isFormItem</td>\n            <td>默认为true、如果为false则render函数可以渲染非表单控件内容</td>\n            <td>boolean</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>className</td>\n            <td>可以给每项添加className</td>\n            <td>string</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td><i class="zero-icon zerod-shengchangzhouqi"></i> options</td>\n            <td><a href="https://ant.design/components/form-cn/" target="_blank">Antd的表单中getFieldDecorator函数的options参数</a>,可以配置验证规则}</td>\n            <td>object || ()=>options</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n\n<div class="z-doc-titles"></div>\n\n<h2 id="changeformitems">changeFormItems</h2>\n<p>changeFormItems 是一个方法，主要用于局部改变 items，实现表单控件之间交互联动。但不能直接在 render 函数中使用，应在控件的事件当中。changeFormItems除了在items里的render参数中，还存在于getFormInstance函数的methods参数里。</p>\n<p>changeFormItems 需要两个参数：<code>newItems</code>：array | object 和 <code>part</code> : boolean</p>\n<p><code>newItems</code>的结构取决于 <code>part</code>参数</p>\n<p>如果<code>part</code>为 false (默认为 false),<code>newItems</code>同 Zform 的 items，会重新渲染全部 items，这是早期的做法，不建议使用</p>\n<pre><code class="language-jsx">//this.items就是Zform的items\nconst newItems = this.items.slice(0);\nnewItems.splice(4, 1); //不显示第五个\nchangeFormItems(this.items, false); //触发渲染</code></pre>\n<p>如果<code>part</code>为 true，就是局部改变，<code>newItems</code>可以为数组(多个 item 改变)，可以为对象(单个 item 改变),推荐使用方式如下</p>\n<pre><code class="language-jsx">//不显示key为servicePort的那个item，\nchangeFormItems(\n    {\n        key: &quot;servicePort&quot;, //对应Zform的items里的key\n        show: false, //是否显示\n    },\n    true,\n);\n//其他内容\nchangeFormItems(\n    [\n        {\n            key: &quot;servicePort&quot;, //对应Zform的items里的key\n            //改变key为servicePort的那个item的内容\n            newItem: {\n                control: &lt;Input /&gt;, //控件  ReactNode\n                span: { lg: 12 }, //栅栏占格 同zform 的items里的span\n                options: {}, //同zform 的items里的options\n                isFormItem: true, //control是否是表单控件\n                label: &quot;&quot;, //label\n            },\n        },\n    ],\n    true,\n);</code></pre>\n'},WFjJ:function(e,t,n){e.exports=n("ZUVB")(301)},d21d:function(e,t,n){"use strict";n.r(t);var o=n("+Qac"),r=n("9Jkg"),a=n.n(r),s=n("tsqr"),l=n("/HRN"),i=n.n(l),d=n("WaGi"),c=n.n(d),u=n("ZDA2"),m=n.n(u),p=n("/+P4"),f=n.n(p),h=n("N9n2"),v=n.n(h),g=n("2/Rp"),q=n("fyUT"),b=n("FOOf"),y=n("5rEg"),E=n("eVuF"),k=n.n(E),w=n("+eQT"),z=n("9yH6"),I=n("2fM7"),x=n("q1tI"),N=n.n(x),C=n("ebhq"),F=n("BOae"),S=n.n(F),O=C.a.AmdDocHOC,P=!1,D=I.a.Option,T=z.a.Group,j=[{key:"radio",label:"单选",labelFocused:!0,render:function(e){return N.a.createElement(T,null,N.a.createElement(z.a,{value:1},"A"),N.a.createElement(z.a,{value:2},"B"),N.a.createElement(z.a,{value:3},"C"),N.a.createElement(z.a,{value:4},"D"))},options:function(){return{initialValue:"",rules:[{required:!0,message:"不能为空。"}]}}},{key:"datepicker",label:"日期框",render:function(e){return N.a.createElement(w.a,null)},options:function(){return{initialValue:"",rules:[{required:!0,message:"不能为空。"}]}}},{key:"selectTest",label:"下拉框",render:function(e){return N.a.createElement(I.a,null,N.a.createElement(D,{value:"jack"},"Jack"),N.a.createElement(D,{value:"lucy"},"Lucy"),N.a.createElement(D,{value:"disabled",disabled:!0},"Disabled"),N.a.createElement(D,{value:"Yiminghe"},"yiminghe"))},options:function(){return{rules:[{required:!0,message:"不能为空。"}]}}},{key:"serviceCode",label:"服务编码",render:function(e){return new k.a(function(e){setTimeout(function(){e(N.a.createElement(y.a,{placeholder:"请输入服务编码"}))},5e3)})},options:function(){return{rules:[{required:!0,message:"不能为空。"}]}}},{key:"serviceName",label:"服务名称",render:function(e){return N.a.createElement(y.a,{placeholder:"请输入服务名称"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"colorValue",label:"颜色值",render:function(e){return N.a.createElement(b.a,null)},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"serviceRemark",label:"服务说明",span:{md:24},render:function(e){return N.a.createElement(y.a.TextArea,{rows:2,placeholder:"请输入服务说明"})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"servicePort",label:"端口号",labelWidth:"80px",render:function(e){return N.a.createElement(q.a,{min:11110,max:65535,step:10})},options:{rules:[{required:!0,message:"不能为空。"}]}},{key:"myButton",label:" ",render:function(e,t){return N.a.createElement(g.a,{type:"primary",onClick:function(){t({key:"servicePort",show:P},!0),P=!P}},P?"显示":"不显示","端口号")}},{key:"confProperty",label:"默认配置",span:24,render:function(e){return N.a.createElement(y.a.TextArea,{rows:15,placeholder:"请输入默认配置"})},options:{rules:[{required:!0,message:"不能为空。"}]}}];function A(e){return function(t){function n(){var e,t;i()(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=m()(this,(e=f()(n)).call.apply(e,[this].concat(r)))).items=j,t.defaultValue={serviceCode:"9999",serviceRemark:"llll"},t}return v()(n,t),c()(n,[{key:"render",value:function(){return N.a.createElement(o.b,{labelLayout:e,formDefaultValues:this.defaultValue,items:this.items,onSubmit:function(e){return k.a.resolve().then(function(t){s.a.success("提交成功："+a()(e))})}})}}]),n}(N.a.PureComponent)}t.default=O(S.a,{demo1:function(){var e=A("inline");return N.a.createElement(e,null)},demo2:function(){var e=A("vertical");return N.a.createElement(e,null)},demo3:function(){var e=A("horizontal");return N.a.createElement(e,null)}})},ebhq:function(e,t,n){"use strict";var o=n("iZP3"),r=n.n(o),a=n("jjl2"),s={},l=[];a.keys().forEach(function(e){var t=void 0;try{t=a(e).default}catch(t){throw Error("".concat(e,":").concat(t))}if(void 0===t||"object"!==r()(t))throw Error("".concat(e,":内没有 export default 或者export default格式有误 "));if("function"!=typeof t.HOC)throw Error("".concat(e,":HOC有误"));var n=t.name;if("string"!=typeof n)throw Error("".concat(e,":缺少name属性"));if(!/^A[A-z0-9]*HOC$/.test(n))throw Error("".concat(e,":name属性请以A开头HOC结尾"));if(n=n.trim(),l.includes(n))throw Error("".concat(e,":").concat(n,"此HOC名称已被使用"));l.push(n),s[n]=t.HOC}),t.a=s},jjl2:function(e,t,n){var o={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="jjl2"},pnNO:function(e,t,n){"use strict";n.r(t);var o=n("MaNN"),r=n("C6MB"),a=n("PwP1"),s=n("TbGu"),l=n.n(s),i=n("/sSO"),d=n("/HRN"),c=n.n(d),u=n("WaGi"),m=n.n(u),p=n("ZDA2"),f=n.n(p),h=n("/+P4"),v=n.n(h),g=n("N9n2"),q=n.n(g),b=n("kB6t"),y=n("q1tI"),E=n.n(y),k=n("i8i4"),w=n.n(k),z=(n("17x9"),n("tW/l")),I=n.n(z);var x=Object(b.a)(),N=!1;t.default={name:"AmdDocHOC",HOC:function(e,t){e='<p>如带有 <i class="zero-icon zerod-shengchangzhouqi"></i> 标记的 “函数” 表示会在组件的生命周期函数 “render” 中执行</p>'+e;var n=function(n){function o(){var e,t;c()(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=f()(this,(e=v()(o)).call.apply(e,[this].concat(r)))).renderEls=[],t.state={navs:[],closeModaled:!0},t.setNavs=function(){var e=[],n=t.mdEl.querySelectorAll(".z-doc-titles");Array.prototype.slice.call(n).forEach(function(n){e.push({name:n.dataset.title?n.dataset.title:n.nextElementSibling.innerText,el:n.nextElementSibling,active:-t.scrollInstance.scroll.y==n.nextElementSibling.offsetTop-24})}),e.length&&t.setState({navs:e},function(){if(t.bindScrollEvent(),t.navEl&&t.navContentEl){var e=i.h.BuildScroll;t.navScroollInstance=new e(t.navEl,{scrollbars:"custom"}),i.h.listenDivSizeChange(t.navEl,t.navScroollInstance.refresh),i.h.listenDivSizeChange(t.navContentEl,t.navScroollInstance.refresh)}})},t.scrollEnd=function(){var e=-t.scrollInstance.scroll.y;t.state.navs.forEach(function(e){e.active=!1});for(var n=t.state.navs.length,o=0;o<n;o++){var r=t.state.navs[o];if(e>=r.el.offsetTop-120){if(!(o<n-1)){r.active=!0;break}var a=t.state.navs[o+1];if(a&&e<a.el.offsetTop-120){r.active=!0;break}}}t.setState({navs:l()(t.state.navs)})},t.bindScrollEvent=function(){t.scrollInstance.scroll.on("scrollEnd",t.scrollEnd)},t.navScrollTo=function(e){t.scrollInstance.scroll.scrollTo(0,-(e.el.offsetTop-24),200)},t}return q()(o,n),m()(o,[{key:"componentWillUnmount",value:function(){N=!0,this.renderEls.forEach(function(e){w.a.unmountComponentAtNode(e)}),this.scrollInstance&&this.scrollInstance.scroll&&this.scrollInstance.scroll.off("scrollEnd",this.scrollEnd)}},{key:"componentDidMount",value:function(){var e=this,n=this.mdEl.querySelectorAll(".z-demo-box");Array.prototype.slice.call(n).forEach(function(n){var o=function(e){var t={};if(e.dataset)return e.dataset;for(var n=0;n<e.attributes.length;n++){var o=e.attributes[n].nodeName;if(/^data-\w+$/.test(o)){var r=e.attributes[n].nodeValue;t[o.match(/^data-(\w+)/)[1]]=r}}return t}(n);if(t&&"function"==typeof t[o.render]){var r=n.nextElementSibling;r=r&&"pre"==r.localName?r:null;var a=t[o.render]();e.renderEls.push(n),w.a.render(a,n,function(){var e=document.createElement("div");e.className="z-demo-footer";var t=document.createElement("div");t.className="z-demo-code-btn z-flex-space-between";var a=document.createElement("div");a.className="z-demo-code";var s=document.createElement("img");s.addEventListener("click",function(){s.src=s.open?"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg",a.style.height=s.open?"0px":"auto",s.open=!s.open},!1),s.src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg";var l=document.createElement("span");l.innerText=o.title?o.title:"",t.appendChild(l),r&&t.appendChild(s),e.appendChild(t),r&&a.appendChild(r),e.appendChild(a),n.appendChild(e)})}}),this.mdEl.addEventListener("click",function(t){"string"==typeof t.target.className&&t.target.className.includes("z-open-modal-btn")&&setTimeout(function(){N=!1,"function"==typeof t.target._render&&e.props.showRightModal({show:!0,modal:t.target._modal?t.target._modal:"mainModal",content:t.target._render(),scroll:t.target._scroll,onTransitionend:function(t){N||e.setState({closeModaled:!t})}})},10)},!1),this.mdEl.addEventListener("click",function(t){if("string"==typeof t.target.className&&t.target.className.includes("z-show-loading-btn"))setTimeout(function(){if("mainRoute"==t.target._modal)e.props.showRouteLoading(!0),setTimeout(function(){e.props.showRouteLoading(!1)},2e3);else{var n=t.target._modal?t.target._modal:"mainModal";N=!1,e.props.showRightModal({show:!0,modal:n,content:null,scroll:!0,onTransitionend:function(t){N||e.setState({closeModaled:!t})}}),e.props.showModalLoading(!0,n),setTimeout(function(){e.props.showModalLoading(!1,n)},2e3)}},10);else if("string"==typeof t.target.className&&t.target.className.includes("z-history-href")){var n=t.target.dataset.path;"string"==typeof n&&e.props.$router.history.push(n)}}),this.scrollInstance=this.props.getScrollInstance("mainRoute"),setTimeout(function(){e.setNavs()},100)}},{key:"render",value:function(){var t=this;return E.a.createElement(r.b.Template,null,E.a.createElement(x,{pageHeader:{show:!1},hasBodyPadding:!1},E.a.createElement("div",{className:"z-panel ".concat(I.a["z-md-doc"]),ref:function(e){return t.mdEl=e}},E.a.createElement("div",{className:"z-panel-body",style:this.state.navs.length?{width:"calc(100% - 136px)"}:{}},E.a.createElement(a.a,{mode:"html"},e)))),this.state.navs.length&&this.state.closeModaled?w.a.createPortal(E.a.createElement("div",{className:I.a["z-nav-box"],ref:function(e){return t.navEl=e}},E.a.createElement("div",{ref:function(e){return t.navContentEl=e}},E.a.createElement("section",null,this.state.navs.map(function(e,n){return E.a.createElement("div",{title:e.name,className:"".concat(I.a["z-nav"]," ").concat(e.active?I.a.active:""),key:n,onClick:function(){t.navScrollTo(e)}},e.name)})))),document.body):null)}}]),o}(E.a.PureComponent);return o.a.setConsumer(n)}}}}]);
//# sourceMappingURL=18.a642a5cd103bdc459723.js.map