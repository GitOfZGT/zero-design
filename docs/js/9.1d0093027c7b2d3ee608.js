(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/HM7":function(t,o,u){"use strict";u.r(o);var n=u("k9l9"),e=u("9DAX"),q=u("PwP1"),a=u("nMT3"),r=u("MhH0"),d=u.n(r),i=u("FcZB"),s=u.n(i),c=u("Ratc"),m=u.n(c),l=u("0j8+"),h=u.n(l),p=u("0kOG"),C=u.n(p),g=u("uqIC"),f=u.n(g),z=u("ebhq"),y=u("Sf9E"),v=u.n(y),I=u("4APB"),P=u.n(I),b=u("R7NC"),j=z.a.AmdDocHOC;o.default=j(v.a,{demo1:function(){var t=function(t){function o(){var t,u;d()(this,o);for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(u=m()(this,(t=h()(o)).call.apply(t,[this].concat(e)))).methods={onSelect:function(t){var o=t.map(function(t){return t.name});a.a.success("您选择了".concat(o.join("-")))},showJson:function(t){t.target._render=function(){return f.a.createElement("div",{className:"z-panel"},f.a.createElement("div",{className:"z-panel-body"},f.a.createElement(q.a,{mode:"html"},P.a)))},t.target._scroll=!0}},u}return C()(o,t),s()(o,[{key:"render",value:function(){return f.a.createElement("section",null,f.a.createElement("div",{className:"z-clear-fix z-margin-bottom-15"},f.a.createElement(e.a,{className:"z-float-right z-open-modal-btn",type:"primary",onClick:this.methods.showJson},"查看tree数据结构例子")),f.a.createElement(n.b,{tree:b.a.data,itemKeys:{name:"name",id:"areaId",disabled:"disable",children:"children"},selections:["1710121748130980000000166"],onSelect:this.methods.onSelect}))}}]),o}(f.a.PureComponent);return f.a.createElement(t,null)},demo2:function(){var t=function(t){function o(){var t,u;d()(this,o);for(var n=arguments.length,e=new Array(n),q=0;q<n;q++)e[q]=arguments[q];return(u=m()(this,(t=h()(o)).call.apply(t,[this].concat(e)))).methods={onSelect:function(t){var o=t.map(function(t){return t.name});a.a.success("您选择了".concat(o.join("-")))},treeAsync:function(t,o){t.root?setTimeout(function(){o(b.a.data)},500):t.children&&t.children.length?setTimeout(function(){o(t.children)},500):o([])}},u}return C()(o,t),s()(o,[{key:"render",value:function(){return f.a.createElement(n.b,{treeAsync:this.methods.treeAsync,itemKeys:{name:"name",id:"areaId",disabled:"disable",children:"children"},selections:["1710121748130980000000166"],onSelect:this.methods.onSelect})}}]),o}(f.a.PureComponent);return f.a.createElement(t,null)}})},"4APB":function(t,o){t.exports='<pre><code class="language-json">[\n    {\n        &quot;areaId&quot;: &quot;1710121748130980000000166&quot;,\n        &quot;disable&quot;: true,\n        &quot;name&quot;: &quot;广东省&quot;,\n        &quot;zoningCode&quot;: &quot;440000000&quot;,\n        &quot;treeCode&quot;: &quot;001&quot;,\n        &quot;areaPid&quot;: &quot;root&quot;,\n        &quot;children&quot;: [\n            {\n                &quot;areaId&quot;: &quot;1710121748131360000000167&quot;,\n                &quot;name&quot;: &quot;广州市&quot;,\n                &quot;zoningCode&quot;: &quot;440100000&quot;,\n                &quot;treeCode&quot;: &quot;001001&quot;,\n                &quot;areaPid&quot;: &quot;1710121748130980000000166&quot;,\n                &quot;children&quot;: [\n                    {\n                        &quot;areaId&quot;: &quot;1710121748131550000000168&quot;,\n                        &quot;name&quot;: &quot;荔湾区&quot;,\n                        &quot;zoningCode&quot;: &quot;440103000&quot;,\n                        &quot;treeCode&quot;: &quot;001001001&quot;,\n                        &quot;areaPid&quot;: &quot;1710121748131360000000167&quot;,\n                        &quot;children&quot;: [\n                            {\n                                &quot;areaId&quot;: &quot;1710121748131760000000169&quot;,\n                                &quot;name&quot;: &quot;沙面街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103001&quot;,\n                                &quot;treeCode&quot;: &quot;001001001001&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748131940000000170&quot;,\n                                &quot;name&quot;: &quot;岭南街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103002&quot;,\n                                &quot;treeCode&quot;: &quot;001001001002&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132110000000171&quot;,\n                                &quot;name&quot;: &quot;华林街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103003&quot;,\n                                &quot;treeCode&quot;: &quot;001001001003&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132280000000172&quot;,\n                                &quot;name&quot;: &quot;多宝街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103004&quot;,\n                                &quot;treeCode&quot;: &quot;001001001004&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132520000000173&quot;,\n                                &quot;name&quot;: &quot;昌华街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103005&quot;,\n                                &quot;treeCode&quot;: &quot;001001001005&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132660000000174&quot;,\n                                &quot;name&quot;: &quot;逢源街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103006&quot;,\n                                &quot;treeCode&quot;: &quot;001001001006&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132830000000175&quot;,\n                                &quot;name&quot;: &quot;龙津街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103007&quot;,\n                                &quot;treeCode&quot;: &quot;001001001007&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748132990000000176&quot;,\n                                &quot;name&quot;: &quot;金花街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103008&quot;,\n                                &quot;treeCode&quot;: &quot;001001001008&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133100000000177&quot;,\n                                &quot;name&quot;: &quot;彩虹街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103009&quot;,\n                                &quot;treeCode&quot;: &quot;001001001009&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133430000000178&quot;,\n                                &quot;name&quot;: &quot;南源街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103010&quot;,\n                                &quot;treeCode&quot;: &quot;001001001010&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133550000000179&quot;,\n                                &quot;name&quot;: &quot;西村街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103011&quot;,\n                                &quot;treeCode&quot;: &quot;001001001011&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133680000000180&quot;,\n                                &quot;name&quot;: &quot;站前街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103012&quot;,\n                                &quot;treeCode&quot;: &quot;001001001012&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133800000000181&quot;,\n                                &quot;name&quot;: &quot;桥中街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103013&quot;,\n                                &quot;treeCode&quot;: &quot;001001001013&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748133960000000182&quot;,\n                                &quot;name&quot;: &quot;白鹤洞街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103014&quot;,\n                                &quot;treeCode&quot;: &quot;001001001014&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134070000000183&quot;,\n                                &quot;name&quot;: &quot;冲口街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103015&quot;,\n                                &quot;treeCode&quot;: &quot;001001001015&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134200000000184&quot;,\n                                &quot;name&quot;: &quot;花地街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103016&quot;,\n                                &quot;treeCode&quot;: &quot;001001001016&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134330000000185&quot;,\n                                &quot;name&quot;: &quot;石围塘街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103017&quot;,\n                                &quot;treeCode&quot;: &quot;001001001017&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134490000000186&quot;,\n                                &quot;name&quot;: &quot;茶滘街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103018&quot;,\n                                &quot;treeCode&quot;: &quot;001001001018&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134740000000187&quot;,\n                                &quot;name&quot;: &quot;东漖街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103019&quot;,\n                                &quot;treeCode&quot;: &quot;001001001019&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134870000000188&quot;,\n                                &quot;name&quot;: &quot;海龙街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103020&quot;,\n                                &quot;treeCode&quot;: &quot;001001001020&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748134990000000189&quot;,\n                                &quot;name&quot;: &quot;东沙街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103021&quot;,\n                                &quot;treeCode&quot;: &quot;001001001021&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            },\n                            {\n                                &quot;areaId&quot;: &quot;1710121748135120000000190&quot;,\n                                &quot;name&quot;: &quot;中南街道&quot;,\n                                &quot;zoningCode&quot;: &quot;440103022&quot;,\n                                &quot;treeCode&quot;: &quot;001001001022&quot;,\n                                &quot;areaPid&quot;: &quot;1710121748131550000000168&quot;\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n]</code></pre>\n'},"SX+g":function(t,o,u){t.exports=u("sG4F")(498)},Sf9E:function(t,o){t.exports='<h1 id="-zcascader">级联选择: Zcascader</h1>\n<p><code>Zcascader</code>是一个级联选择组件，通常做地区级联。</p>\n<p>1、基本使用</p>\n<div class="z-demo-box" data-render="demo1" data-title="地区树方式"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { message } from &quot;antd&quot;;\nimport { Zcascader } from &quot;zerod&quot;;\nclass Myjavascript extends ZpureComponent {\n    methods = {\n        onSelect: (items) =&gt; {\n            let names = items.map((item) =&gt; {\n                return item.name;\n            });\n            message.success(`您选择了${names.join(&quot;-&quot;)}`);\n        },\n    };\n    render() {\n        return (\n            &lt;Zcascader\n                tree={area.data}\n                itemKeys={{ name: &quot;name&quot;, id: &quot;areaId&quot;, disabled: &quot;disable&quot;, children: &quot;children&quot; }}\n                selections={[&quot;1710121748130980000000166&quot;]}\n                onSelect={this.methods.onSelect}\n            /&gt;\n        );\n    }\n}</code></pre>\n<p>1、异步加载</p>\n<div class="z-demo-box" data-render="demo2" data-title="异步加载下一级"></div>\n\n<pre><code class="language-jsx">import React from &quot;react&quot;;import ZpureComponent from &quot;zerod/components/ZpureComponent&quot;;\nimport { message } from &quot;antd&quot;;\nimport { Zcascader } from &quot;zerod&quot;;\nclass Myjavascript extends ZpureComponent {\n    methods = {\n        onSelect: (items) =&gt; {\n            let names = items.map((item) =&gt; {\n                return item.name;\n            });\n            message.success(`您选择了${names.join(&quot;-&quot;)}`);\n        },\n        treeAsync: (data, resolve) =&gt; {\n            if (data.root) {\n                setTimeout(() =&gt; {\n                    resolve(area.data);\n                }, 500);\n            } else if (data.children &amp;&amp; data.children.length) {\n                setTimeout(() =&gt; {\n                    resolve(data.children);\n                }, 500);\n            } else {\n                resolve([]);\n            }\n        },\n    };\n    render() {\n        return (\n            &lt;Zcascader\n                treeAsync={this.methods.treeAsync}\n                itemKeys={{ name: &quot;name&quot;, id: &quot;areaId&quot;, disabled: &quot;disable&quot;, children: &quot;children&quot; }}\n                selections={[&quot;1710121748130980000000166&quot;]}\n                onSelect={this.methods.onSelect}\n            /&gt;\n        );\n    }\n}</code></pre>\n<h2 id="zcascader-props">Zcascader 的 props</h2>\n<table>\n    <thead>\n        <tr>\n            <th>参数</th>\n            <th>说明</th>\n            <th>类型</th>\n            <th>默认值</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>tree</td>\n            <td>级联树数据，非treeAsync下有效, (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array[object]</td>\n            <td>[]</td>\n        </tr>\n        <tr>\n            <td>lables</td>\n            <td>对应每一级的label</td>\n            <td>array[string]</td>\n            <td>["省", "市", "区/县", "街道/镇", "村"]</td>\n        </tr>\n        <tr>\n            <td>itemKeys</td>\n            <td>定义tree的key对象，默认：{ name: "name", id: "id", disabled: "disabled", children: "children" }</td>\n            <td>object</td>\n            <td>--</td>\n        </tr>\n        <tr>\n            <td>selections</td>\n            <td>默认已选择的每一级选项的ids，如 默认选择 广东省：["1710121748130980000000166"], (请使用变量缓存所需设置的值而非直接使用字面量)</td>\n            <td>array[string]</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>onSelect</td>\n            <td>点击选项的回调</td>\n            <td>function(selectItems){}</td>\n            <td>--</td>\n        </tr>\n         <tr>\n            <td>treeAsync</td>\n            <td>异步加载选项函数,有两个参数，data:当前选项的数据，resolve:加载下一级的钩子resolve([下一级的所有选项]])</td>\n            <td>function(data,resolve){}</td>\n            <td>--</td>\n        </tr>\n    </tbody>\n</table>\n'},jjl2:function(t,o,u){var n={"./AmdDocHOC/index.jsx":"pnNO","./AshowDemoHOC/index.jsx":"+fre"};function e(t){var o=q(t);return u(o)}function q(t){if(!u.o(n,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return n[t]}e.keys=function(){return Object.keys(n)},e.resolve=q,t.exports=e,e.id="jjl2"},q3Yw:function(t,o,u){t.exports=u("sG4F")(313)}}]);
//# sourceMappingURL=9.1d0093027c7b2d3ee608.js.map