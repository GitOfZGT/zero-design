# 代码高亮组件：ZcodeHighlight

`ZcodeHighlight`依赖于代码高亮插件`prismjs`,默认支持`html`语言,如需支持更多语言，请在`zerod-admin-webpack`脚手架的`.babelrc`文件中修改：

```json
"plugins": [
    ["prismjs", {
        "languages": ["javascript", "css", "scss", "jsx","http","icon","java","json","yaml"],//已设置支持的语言，
        "plugins": ["line-numbers"],
        "theme": "tomorrow",//主题
        "css": true
    }]
```

更多支持的语言请查看：<a href="https://prismjs.com/#languages-list" target="_blank">https://prismjs.com/#languages-list</a>

## 使用组件

1、基本使用

```jsx
import React from "react";
import { ZcodeHighlight } from "zerod";
class Myjavascript extends React.Component{
    render(){
        return (
            <ZcodeHighlight lang="javascript" mode="block">
                //注意这里，需要高亮的代码是字符串
                 {`
                    function getCode(){
                        let a=0;
                        retrun a;
                    }
                 `}
            </ZcodeHighlight>
        );
    }
}
```

2、当`mode="html"`时

```jsx
import React from "react";
import { ZcodeHighlight } from "zerod";
class MyHtml extends React.Component{
    render(){
        return (
            <ZcodeHighlight mode="html">
                 {`<h1>代码高亮组件：ZcodeHighlight</h1>
				<p>
					ZcodeHighlight依赖于代码高亮插件prismjs,默认支持html语言,如需支持更多语言，请在zerod-admin-webpack脚手架的.babelrc文件中修改：
				</p>
				<pre class="line-numbers">
					<code class="language-json" >
                        "plugins": [
                            ["prismjs", {
                                "languages": ["javascript", "css", "scss", "jsx","http","icon","java","json","yaml"],//设置支持的语言，
                                "plugins": ["line-numbers"],
                                "theme": "tomorrow",//主题
                                "css": true
                            }]
                    </code>
				</pre>`}
            </ZcodeHighlight>
        );
    }
}
```

## ZcodeHighlight 的 props

<table>
	<thead>
		<tr>
			<th>参数</th>
			<th>说明</th>
			<th>类型</th>
			<th>默认值</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>mode</td>
			<td>显示模式，block：块，inline：内联，html：直接是html元素</td>
			<td>string : block | inline | html</td>
			<td>block</td>
		</tr>
		<tr>
			<td>lang</td>
			<td>高亮代码的语言,更多支持的语言请查看：<a href="https://prismjs.com/#languages-list" target="_blank">https://prismjs.com/#languages-list</a>,当mode="html"时，lang参数无任何作用</td>
			<td>string</td>
			<td>html</td>
		</tr>
        <tr>
			<td>children</td>
			<td>要高亮的代码</td>
			<td>string</td>
			<td>-</td>
		</tr>
	</tbody>
</table>
