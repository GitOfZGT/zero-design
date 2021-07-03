<!-- @routePath: /eslint-doc -->

# JavaScript 编码规范(ESlint 强制))

本文档的目标是使`JavaScript`代码风格保持一致，容易被团队其他成员理解和后期的维护。

## 2.1 结构

==[强制]== 使用`1`个`tab`做为一个缩进层级，`1`个`tab`等于`4`个空格，不允许使用 `2` 个空格。

示例：

```javascript
// good
function foo() {
    const obj = {};
}

// bad
function foo() {
    const obj = {};
}
```

## 2.1.2 空格

==[强制]== 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。

示例：

```javascript
let num = 0;
num = num1 + num2;
num--;
```

==[强制]== 用作代码块起始的左花括号 `{` 前必须有一个空格。

示例：

```javascript
// good
if (condition) {
}

while (condition) {}

function funcName() {}

// bad
if (condition) {
}

while (condition) {}

function funcName() {}
```

==[强制]== `if / else / for / while / function / switch / do / try / catch / finally` 关键字后，必须有一个空格。

示例：

```javascript
// good
if (condition) {
}

for (let i = 0; i < len; i++) {}

(function() {})();

// bad
if (condition) {
}

for (let i = 0; i < len; i++) {}

(function() {})();
```

==[强制]== 在对象创建时，属性中的 `:` 之后必须有空格，`:` 之前不允许有空格。  
[建议] 在对象的每个属性最后都添加`,`

示例：

```javascript
// good
var foo = {
    name: 'Simon',
    age: 29,
};

// bad
var foo = {
    name: 'Simon',
    age: 29,
};
```

==[强制]== 函数声明、具名函数表达式、函数调用中，函数名和 `(` 之间不允许有空格。

示例：

```javascript
// good
function foo() {}

const funcName = function foo() {};

foo();

// bad
function foo() {}

const funcName = function foo() {};

foo();
```

==[强制]== `,` 和 `;` 前不允许有空格。如果不位于行尾，`,` 和 `;` 后必须跟一个空格。

示例：

```javascript
// good
foo(param1, param2);

// bad
foo(param1, param2);
foo(param1, param2);
```

==[强制]== 在函数调用、函数声明、括号表达式、属性访问、`if / for / while / switch / catch` 等语句中，`()` 和 `[]` 内紧贴括号部分不允许有空格。

示例：

```javascript
// good

foo(param1, param2, param3);

foo(arr[index]);

bool && (variable += increament);

if (num > len) {
}

while (len--) {}

// bad

foo(param1, param2, param3);

foo(arr[index]);

bool && (variable += increament);

if (num > len) {
}

while (len--) {}
```

==[强制]== 单行声明的数组与对象，如果包含元素，`{}` 和 `[]` 内紧贴括号部分不允许包含空格。

解释：

声明包含元素的数组与对象，内部元素的形式较为简单时，写在一行。元素复杂的情况，需要换行。

示例：

```javascript
// good
var arr1 = [];
var arr2 = [1, 2, 3];
var foo1 = {};
var foo2 = { name: 'Simon' };
var foo3 = {
    name: 'Simon',
    age: 20,
};

// bad
var arr1 = [];
var arr2 = [1, 2, 3];
var foo1 = {};
var foo2 = { name: 'obj' };
var foo3 = { name: 'obj', age: 20, sex: 1 };
```

==[强制]== 行尾不得有多余的空格。

## 2.1.3 换行

==[强制]== 每个独立语句结束后必须换行。

==[强制]== 每行不得超过 `120` 个字符。

解释：

超长的不可分割的代码允许例外，比如复杂的正则表达式。长字符串不在例外之列。

==[强制]== 运算符处换行时，运算符必须在新行的行首。

示例：

```javascript
// good
if ((obj && obj.a && obj.b) || obj.c) {
    // Code
}

var result = number1 + number2 + number3 + number4 + number5;

// bad
if ((obj && obj.a && obj.b) || obj.c) {
    // Code
}

var result = number1 + number2 + number3 + number4 + number5;
```

==[强制]== 在函数声明、函数表达式、函数调用、对象创建、数组创建、`for` 语句等场景中，禁止在 `,` 或 `;` 前换行。

示例：

```javascript
// good
var foo = {
    a: 1,
    b: 2,
    c: 3,
};

bar(param1, param2, param3);

// bad
var foo = {
    a: 1,
    b: 2,
    c: 3,
};

bar(param1, param2, param3);
```

[建议] 不同行为或逻辑的语句集，使用空行隔开，更易阅读。

示例：

```javascript
function foo(param1, param2, param3) {
    if (param2 === null) {
        return;
    }

    param1.name = param3;
}
```

[建议] 在语句的行长度超过 `120` 时，根据逻辑条件合理缩进。

示例：

```javascript
// 较复杂的逻辑条件组合，将每个条件独立一行，逻辑运算符放置在行首进行分隔，或将部分逻辑按逻辑组合进行分隔。
// 建议最终将右括号 ) 与左大括号 { 放在独立一行，保证与 `if` 内语句块能容易视觉辨识。
if (element && element.businessObject && element.businessObject.get('custom:backTaskCode')) {
    // Code
}

// 当参数过多时，将每个参数独立写在一行上，并将结束的右括号 ) 独立一行。
// 所有参数必须增加一个缩进。
foo(param1, param2, param3);

// 当函数调用时，如果有一个或以上参数跨越多行，应当每一个参数独立一行。
// 这通常出现在匿名函数或者对象初始化等作为参数时，如 `setTimeout` 函数等。
setTimeout(function() {
    alert('hello');
}, 200);

foo(
    'id=' + id,
    function(data) {
        callback(data);
    },
    300,
);

// 链式调用较长时采用缩进进行调整。
foo.then()
    .catch()
    .finally();

// 三元运算符由3部分组成，因此其换行应当根据每个部分的长度不同，形成不同的情况。
var result = thisIsAVeryVeryLongCondition ? resultA : resultB;

var result = condition ? thisIsAVeryVeryLongResult : resultB;

// 数组和对象初始化的混用，严格按照每个对象的 `{` 和结束 `}` 在独立一行的风格书写。
var array = [
    {
        // ...
    },
    {
        // ...
    },
];
```

[建议] 对于 `if...else...`、`try...catch...finally` 等语句，推荐使用在 `}` 号后添加一个换行的风格，使代码层次结构更清晰，阅读性更好。

示例：

```javascript
if (condition) {
    // some statements;
} else {
    // some statements;
}

try {
    // some statements;
} catch (ex) {
    // some statements;
}
```

## 2.1.4 语句

==[强制]== 不得省略语句结束的分号。

==[强制]== 在 `if / else / for / do / while` 语句中，即使只有一行，也不得省略块 `{...}`。

示例：

```javascript
// good
if (condition) {
    callFunc();
}

// bad
if (condition) callFunc();
if (condition) callFunc();
```

[强制] 函数定义结束不允许添加分号。

示例：

```javascript
// good
function funcName() {}

// bad
function funcName() {}

// 如果是函数表达式，分号是不允许省略的。
var funcName = function() {};
// class钟箭头函数
class Foo {
    bar = () => {
        // code
    };
}
```

==[强制]== `IIFE` 必须在函数表达式外添加 `(`，非 `IIFE` 不得在函数表达式外添加 `(`。

解释：

IIFE = Immediately-Invoked Function Expression.

额外的 ( 能够让代码在阅读的一开始就能判断函数是否立即被调用，进而明白接下来代码的用途。而不是一直拖到底部才恍然大悟。

示例：

```javascript
// good
var task = (function() {
    // Code
    return result;
})();

var func = function() {};

// bad
var task = (function() {
    // Code
    return result;
})();

var func = function() {};
```

## 2.2 命名

==[强制]== `变量` 使用 `驼峰(Camel)命名法`。

示例：

```javascript
var formName = 'FORM';
```

==[强制]== `常量` 使用 `全部字母大写，单词间下划线分隔` 的命名方式。

示例：

```javascript
var FORM_NAME = 'FORM';
```

==[强制]== `函数` 使用 `驼峰(Camel)命名法`。

示例：

```javascript
function handleChange(e) {}
```

==[强制]== 函数的 `参数` 使用 `驼峰(Camel)命名法`。

示例：

```javascript
function getFormInstance(formName) {}
```

==[强制]== `类class` 使用 `Pascal命名法`。

示例：

```javascript
class ElementProperties {}
```

==[强制]== 类的 `方法` / `属性`，构造函数，原型 使用 `Camel命名法`。

示例：

```javascript
class ElementProperties {
    formName = 'Simon';
}

function ElementProperties() {}

TextNode.prototype.deepClone = function() {
    // code
};
```

==[强制]== `枚举变量` 使用 `Pascal命名法`，`枚举的属性` 使用 `全部字母大写，单词间下划线分隔` 的命名方式。

示例：

```javascript
var TypeCode = {
    DOG_APPLY: 1,
    DOG_DESTROY: 2,
    DOG_MODIFY: 3,
};
```

==[强制]== 由多个单词组成的缩写词，在命名中，根据当前命名法和出现的位置，所有字母的大小写与首字母的大小写保持一致。

示例：

```javascript
function XMLParser() {}

function insertHTML(element, html) {}

var httpRequest = new HTTPRequest();
```

[建议] `类名` 使用 `名词`。

示例：

```javascript
function ElementProperties() {}
```

[建议] `函数名` 使用 `动宾短语`。

示例：

```javascript
function getStyle(element) {}
```

[建议] `boolean` 类型的变量使用 `is` 或 `has` 开头。

示例：

```javascript
const isReady = false;
const hasMoreCommands = false;
```

[建议] `Promise对象` 用 `动宾短语` 表达。

示例：

```javascript
const fetchData = axios.get('url');
fetchData.then(callback);
```

## 2.3 注释

注释中参数的类型按以下类型进行标注：

-   \<String\> \<Number\>
-   \<Object\> \<Element\> \<Event\>
-   \<Function\> \<Promise\>
-   \[\<String\>\]\[\<number\>\] \[\<Object\>\]

函数注释

-   约定规则：
-   函数作用的简短描述
-   param 参数的名称 参数的类型
-   返回值，返回值的类型，无返回值可不写

```javascript
/**
 * 获取目标数据的对象集合
 * @param targetKeys [<String>]   目标数据的key的集合
 * @param listItems [<Object>]  全部数据集
 * @return result [<Object>]    已匹配的数据集
 * */
function getTargetItems(targetKeys, listItems) {
    return listItems.filter((item) => targetKeys.includes(item.key));
}
```

对象的注释
-   约定规则：
-   注释内容尽量意简言赅
-   每个属性之后写注释
-   注释格式“`// 注释内容`”注意斜杠之间的空格

```javascript
const pageConfig = {
    rightModalType: 'appModal', // 右边窗口的类型 appModal | mainModal
    noticeType: 'notification', // 用于配置操作提示通告的方式
    leftExpandWidth: 240, // 左侧边展开时的宽度
    theme: 'mazarine', // 主页的主题 light | dark | mazarine
};
```

## 2.4.1 单行注释

[强制] 必须独占一行。`//` 后跟一个空格，缩进与下一行被注释说明的代码一致。

```javascript
function foo() {
    // 打印Hello
    console.log('Hello');
}
```

## 2.4.2 多行注释

[建议] 避免使用 `/*...*/` 这样的多行注释。有多行注释内容时，使用多个单行注释。

## 2.4.3 文档化注释

[强制] 为了便于代码阅读和自文档化，以下内容必须包含以 `/**...*/` 形式的块注释中。

解释：

1. 文件
2. namespace
3. 类
4. 函数或方法
5. 类属性
6. 事件
7. 全局变量
8. 常量

[强制] 文档注释前必须空一行。

## 2.4.4 文件注释

[强制] 文件顶部必须包含文件注释。

## 2.4.5 命名空间注释

[建议] 命名空间使用 `@namespace` 标识。

示例：

```javascript
/**
 * @namespace
 */
const util = {};
```

## 2.4.6 类的方法注释

```javascript
class Foo {
    /**
     * 发生变化
     * @param <event> 事件对象
     * */
    handleChange(event) {
        // code
    }
}
```

## 2.4.7 细节注释

对于内部实现、不容易理解的逻辑说明、摘要信息等，我们可能需要编写细节注释。

[建议] 细节注释遵循单行注释的格式。说明必须换行时，每行是一个单行注释的起始。

示例：

```javascript
function foo(p1, p2) {
    // 这里对具体内部逻辑进行说明
    // 说明太长需要换行
    console.log('Hello');
}
```

[强制] 有时我们会使用一些特殊标记进行说明。特殊标记必须使用单行注释的形式。下面列举了一些常用标记：

解释：

1. TODO: 有功能待实现。此时需要对将要实现的功能进行简单说明。
2. FIXME: 该处代码运行没问题，但可能由于时间赶或者其他原因，需要修正。此时需要对如何修正进行简单说明。
3. HACK: 为修正某些问题而写的不太好或者使用了某些诡异手段的代码。此时需要对思路或诡异手段进行描述。
4. XXX: 该处存在陷阱。此时需要对陷阱进行描述。

```
/**
* TODO 过滤
*/
function foo() {
    // code
}
```

## 3.1 变量

==[强制]== 变量，指未来值可能会发生变化的对象，未来不会发生变化的，需要定义为常量。

示例：

```javascript
// good
let name = 'Simon';
// ... somecode
name = 'Hello';

// bad
let name = 'Simon';
```

## 3.1 常量

==[强制]== 常量，指未来不会发生变化的基本数据类型和内部发生变化的引用类型。

```javascript
// 基本类型
const name = 'Simon';

// 引用类型
const arr = [];

arr.push(1); // [1]
```

## 3.2 条件

[强制] 在 Equality Expression 中使用类型严格的 `===`。仅当判断 `null` 或 `undefined` 时，允许使用 `== null`。

解释：

使用 `===` 可以避免等于判断中隐式的类型转换。

示例：

```javascript
// good
if (age === 30) {
    // ......
}

// bad
if (age == 30) {
    // ......
}
```

==[强制]== 条件判断不超过 10 个

解释：

过多的使用 if 判断，会使业务逻辑过于复杂

```javascript
if (condition) {
    // ......
} else if (condition) {
    // ......
}
......
else {
    // ......
}
```

[建议] 尽可能使用简洁的表达式。

示例：

```javascript
// 字符串为空

// good
if (!name) {
    // ......
}

// bad
if (name === '') {
    // ......
}
```

```javascript
// 字符串非空

// good
if (name) {
    // ......
}

// bad
if (name !== '') {
    // ......
}
```

```javascript
// 数组非空

// good
if (collection.length) {
    // ......
}

// bad
if (collection.length > 0) {
    // ......
}
```

```javascript
// 布尔不成立

// good
if (!notTrue) {
    // ......
}

// bad
if (notTrue === false) {
    // ......
}
```

```javascript
// null 或 undefined

// good
if (noValue == null) {
    // ......
}

// bad
if (noValue === null || typeof noValue === 'undefined') {
    // ......
}
```

[建议] 按执行频率排列分支的顺序。

解释：

按执行频率排列分支的顺序好处是：

1. 阅读的人容易找到最常见的情况，增加可读性。
2. 提高执行效率。

[建议] 对于相同变量或表达式的多值条件，用 `switch` 代替 `if`，可行时可以使用设计模式来简化逻辑。

[建议] 对于复杂一些的逻辑可以考虑用状态模式来实现

示例：

```javascript
// good
switch (typeof variable) {
    case 'object':
        // ......
        break;
    case 'number':
    case 'boolean':
    case 'string':
        // ......
        break;
}

// bad
var type = typeof variable;
if (type === 'object') {
    // ......
} else if (type === 'number' || type === 'boolean' || type === 'string') {
    // ......
}

// god
const obj = {
    object: {},
    number: 12,
    boolean: true,
    string: 'hello',
};
const result = obj[variable];
```

[建议] 如果函数或全局中的 `else` 块后没有任何语句，可以删除 `else`。

示例：

```javascript
// good
function getName() {
    if (name) {
        return name;
    }

    return 'unnamed';
}

// bad
function getName() {
    if (name) {
        return name;
    } else {
        return 'unnamed';
    }
}
```

## 3.3 循环

[建议] 不要在循环体中包含函数表达式，事先将函数提取到循环体外。

解释：

循环体中的函数表达式，运行过程中会生成循环次数个函数对象。

示例：

```javascript
// good
function handler() {
    // ......
}

for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    addListener(element, 'click', handler);
}

// bad
for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    addListener(element, 'click', function() {});
}
```

[建议] 对循环内多次使用的不变值，在循环外用变量缓存。

示例：

```javascript
// good
var width = wrap.offsetWidth + 'px';
for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    element.style.width = width;
    // ......
}

// bad
for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    element.style.width = wrap.offsetWidth + 'px';
    // ......
}
```

[建议] 对有序集合进行遍历时，缓存 `length`。

解释：

虽然现代浏览器都对数组长度进行了缓存，但对于一些宿主对象和老旧浏览器的数组对象，在每次 `length` 访问时会动态计算元素个数，此时缓存 `length` 能有效提高程序性能。

示例：

```javascript
for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    // ......
}
```

[建议] 对有序集合进行顺序无关的遍历时，使用逆序遍历。

解释：

逆序遍历可以节省变量，代码比较优化。

示例：

```javascript
var len = elements.length;
while (len--) {
    var element = elements[len];
    // ......
}
```

## 3.4 类型

[建议] 基础类型检测优先使用 `typeof`。引用类型用 toString。

示例：

```javascript
// string
typeof variable === 'string';

// number
typeof variable === 'number';

// boolean
typeof variable === 'boolean';

// Function
typeof variable === 'function';

// Object
Object.prototype.toString.call(variable) === '[object Object]';

// RegExp
variable instanceof RegExp;

// Array
Object.prototype.toString.call(variable) === '[object Array]';

// null
variable === null;

// null or undefined
variable == null;

// undefined
typeof variable === 'undefined';
```

## 3.4.2 类型转换

[建议] 转换成 `string` 时，使用模板字符串。

示例：

```javascript
// good
const str = `${num}`;

// bad
new String(num);
num.toString();
String(num);
```

[建议] 转换成 `number` 时，通常使用 `+`。

示例：

```javascript
// good
const str = '1';
+str;

// bad
Number(str);
```

[建议] `string` 转换成 `number`，要转换的字符串结尾包含非数字并期望忽略时，使用 `parseInt`。

示例：

```javascript
const width = '200px';
parseInt(width, 10);
```

==[强制]== 使用 `parseInt` 时，必须指定进制。

示例：

```javascript
// good
parseInt(str, 10);

// bad
parseInt(str);
```

[建议] 转换成 `boolean` 时，使用 `!!`。

示例：

```javascript
const num = 3.14;
!!num;
```

[建议] `number` 去除小数点，使用 `Math.floor` / `Math.round` / `Math.ceil`，不使用 `parseInt`。

示例：

```javascript
// good
const num = 3.14;
Math.ceil(num);

// bad
const num = 3.14;
parseInt(num, 10);
```

## 3.5 字符串

==[强制]== 字符串开头和结束使用单引号 `'`。

解释：

1. 输入单引号不需要按住 `shift`，方便输入。

示例：

```javascript
var str = '我是一个字符串';
```

==[强制]== 使用模板字符串。

示例：

```javascript
// good
var str = `<ul>
        <li>第一项</li>
        <li>第二项</li>
    </ul>`;

// bad
var str2 = ''
    + '<ul>',
    +    '<li>第一项</li>',
    +    '<li>第二项</li>',
    + '</ul>';
```

## 3.6 对象

==[强制]== 使用对象字面量 `{}` 创建新 `Object`。

示例：

```javascript
// good
var obj = {};

// bad
var obj = new Object();
```

[建议] 对象创建时，如果一个对象的所有 `属性` 均可以不添加引号，建议所有 `属性` 不添加引号。

示例：

```javascript
var info = {
    name: 'someone',
    age: 28,
};
```

[建议] 对象创建时，如果任何一个 `属性` 需要添加引号，则所有 `属性` 建议添加 `'`。

解释：

如果属性不符合 Identifier 和 NumberLiteral 的形式，就需要以 StringLiteral 的形式提供。

示例：

```javascript
// good
var info = {
    name: 'someone',
    age: 28,
    'more-info': '...',
};

// bad
var info = {
    name: 'someone',
    age: 28,
    'more-info': '...',
};
```

## 3.7 数组

==[强制]== 使用数组字面量 `[]` 创建新数组，除非想要创建的是指定长度的数组。

示例：

```javascript
// good
var arr = [];

// bad
var arr = new Array();
```

==[强制]== 遍历对象不使用`for in`，使用 es6 的 Object.keys 来获取可枚举属性。

```javascript
// good
const obj = {
    a: 1,
    b: 2,
    c: 3
};

Object.keys(obj).forEach(...)

// bad

for (const prop in obj) {
    ...
}

```

==[强制]== 遍历数组不使用 `for in`。

解释：

数组对象可能存在数字以外的属性, 这种情况下 `for in` 不会得到正确结果。

示例：

```javascript
var arr = ['a', 'b', 'c'];

// 这里仅作演示, 实际中应使用 Object 类型
arr.other = 'other things';

// 正确的遍历方式
for (let i = 0, len = arr.length; i < len; i++) {
    console.log(i);
}

// 错误的遍历方式
for (const i in arr) {
    console.log(i);
}
```

[建议] 不因为性能的原因自己实现数组排序功能，尽量使用数组的 `sort` 方法。

解释：

自己实现的常规排序算法，在性能上并不优于数组默认的 `sort` 方法。以下两种场景可以自己实现排序：

1. 需要稳定的排序算法，达到严格一致的排序结果。
2. 数据特点鲜明，适合使用桶排。

[建议] 清空数组使用 `.length = 0`。

## 3.8 参数设计

==[强制]== 函数的参数控制在`3`个以内, 多于`3`个参数改为 options 方式传入。

解释：

除去不定长参数以外，函数具备不同逻辑意义的参数建议控制在 `3` 个以内，过多参数会导致维护难度增大。

```javascript
// good
function foo(param1, param2, param3) {}

/**
 * @param options <Object> {param1: 1, param2: 2, param3: 3}
 */
function foo(options) {}
```

# React 代码规范

## 目录

-   命名
-   注释
-   组件 props 类型

## 命名

==[强制]== 文件以`.js`或`.jsx`为后缀，同一个目录中禁止同时出现两种后缀

==[强制]== 组件名

```javascript
class MyComponent extends Component {}
```

==[强制]== 组件名与文件名

```javascript
class MyComponent extends Component {}

import MyComponent fom './components/MyComponent';
```

==[强制]== 高阶组件名

```javascript
import appHoc from './appHoc';
import MyComponent fom './components/MyComponent';

export default appHoc(MyComponent);
```

==[强制]== 回调名

使用 onXxx 形式作为 props 中用于回调的属性名称

```javascript
<MyComponent onChange={this.handleChange} />
```

==[强制]== 组件方法名

使用 handleXxxChange 形式作为 props 中用于回调的方法名称

```javascript
<MyComponent onChange={this.handleNameChange} />

handleNameChange() {
    // code
}
```

## 注释

==[强制]== 组件文件注释

约定规则：

-   组件的创建人/创建时间
-   组件描述
-   调用时需要传入的 props
-   props 的格式：名称-类型-是否必须-描述，格式尽量整洁对齐

```jsx
/**
 * created by simon on 2019/05/22
 * 评论模块组件
 * @props
 * activeRecordId:      <Number|String>   required      活动id
 * userId:              <Number|String>   required      用户id
 * moduleTitle:         <String>                        模块的标题
 * showTitle:           <Boolean>                       是否显示标题
 * showAvatar:          <Boolean>                       是否显示头像
 * showGiveLike:        <Boolean>                       显示点赞功能
 * onChange:            <Function>                      变化的时候回调
 * onDelete:            <Function>                      删除评论的时候回调
 * queryParams:         <Object>                        查询参数
 * showCommentButton:   <Boolean>                       显示评论按钮
 * commentButtonName:   <String>                        评论按钮名称
 * inputPlaceholder:    <String>                        inputPlaceholder
 * */

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class CommentModule extends PureComponent {
    // code
}
```

## 组件 props 类型

==[强制]== class 组件，props 要定义类型，非必传需默认值

```javascript
class MyComponent extends PureComponent {
    static propTypes = {
        handleValidate: PropTypes.func,
        modeler: PropTypes.object.isRequired,
        onChange: PropTypes.func,
    };
    static defaultProps = {
        handleValidate: () => {
            // do nothing
        },
        onChange: () => {
            // do nothing
        },
    };
}
```

## jsx 代码风格

==[强制]== 组件中对象必须左右带空格，属性名之后带空格

```javascript
<MyComponent data={{ name: 'Simon', age: 29 }} />
```

==[强制]== 解构赋值，左右空格，每个属性之间带空格

```javascript
function handleChange(record) {
    const { name, title } = record;
    // code
}
```

==[强制]== 组件代码顺序，props,state 生命周期钩子等在 render 之前，方法在 render 之后定义

```jsx
class MyComponent extends Component {
    state = {};

    componentDidMount() {}

    componentDidUpdate() {}

    render() {}

    handleChange() {}
}
```

==[强制]== 无内容标签自闭合，并且闭合之前添加空格

```jsx
    // good
    <MyComponent />
    <div />

    // bad
    <MyComponent></MyComponent>
    <div/>
    <div></div>
```

==[强制]== 代码缩进

```jsx
// Good
class Message {
    render() {
        return (
            <div>
                <span>Hello World</span>
            </div>;
        );
    }
}

// Bad
class Message {
    render() {
        return <div>
            <span>Hello World</span>
        </div>;
    }
}
```

==[强制]== 多个属性必须换行

```jsx
// good
<MyComponent
    data={data}
    name={'Si'}
    onChange={this.handleChange}
/>

// bad
<MyComponent data={data} name={'Si'} onChange={this.handleChange} />
```

==[强制]== 以字符串字面量作为值的属性使用双引号（"），在其它类型表达式中的字符串使用单引号（'）。

```jsx
// Good
<Foo bar="bar" />
<Foo style={{width: '20px'}} />

// Bad
<Foo bar='bar' />
<Foo style={{ width: "20px" }} />
```

==[强制]== 对于值为 true 的属性，省去值部分

```jsx
// Good
<Foo visible />

// Bad
<Foo visible={true} />
```

==[强制]== 在需要使用`key`的循环列表，禁止使用`index`作为`key`

```jsx
// Bad
{
    list.map((item, index) => <Foo key={index} {...item} />);
}

// Good
{
    list.map((item) => <Foo key={item.id} {...item} />);
}
```

[建议] 避免在 JSX 的属性值中直接使用对象和函数表达式

```javascript
// Bad
<button
    type="button"
    onClick={() => this.alertMessage('hello')}
>提示</button>

// Good
<button
    type="button"
    onClick={this.handleClick}
>提示</button>
```

# CSS 代码规范

## 1 前言

CSS 作为网页样式的描述语言，一直有着广泛的应用。本文档的目标是使 CSS 代码风格保持一致，容易被理解和被维护。

虽然本文档是针对 CSS 设计的，但是在使用各种 CSS 的预编译(如 less、sass 等)时，适用的部分也应尽量遵循本文档的约定。

## 2 代码风格

==[强制]== 使用`1`个`tab`做为一个缩进层级，`1`个`tab`等于`4`个空格，不允许使用 `2` 个空格。

示例：

```css
.selector {
    margin: 0;
    padding: 0;
}
```

## 2.3 空格

==[强制]== `选择器` 与 `{` 之间必须包含空格。

示例：

```css
.selector {
}
```

==[强制]== `属性名` 与之后的 `:` 之间不允许包含空格， `:` 与 `属性值` 之间必须包含空格。

示例：

```css
margin: 0;
```

==[强制]== `列表型属性值` 书写在单行时，`,` 后必须跟一个空格。

示例：

```css
font-family: Arial, sans-serif;
```

## 2.4 行长度

==[强制]== 每行不得超过 `120` 个字符，除非单行不可分割。

解释：

常见不可分割的场景为 URL 超长。

[建议] 对于超长的样式，在样式值的 `空格` 处或 `,` 后换行，建议按逻辑分组。

示例：

```css
/* 不同属性值按逻辑分组 */
background: transparent url(aVeryVeryVeryLongUrlIsPlacedHere) no-repeat 0 0;

/* 可重复多次的属性，每次重复一行 */
background-image: url(aVeryVeryVeryLongUrlIsPlacedHere) url(anotherVeryVeryVeryLongUrlIsPlacedHere);

/* 类似函数的属性值可以根据函数调用的缩进进行 */
background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.04, rgb(88, 94, 124)),
    color-stop(0.52, rgb(115, 123, 162))
);
```

## 2.5 选择器

==[强制]== 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。

示例：

```css
/* good */
.post,
.page,
.comment {
    line-height: 1.5;
}

/* bad */
.post,
.page,
.comment {
    line-height: 1.5;
}
```

==[强制]== `>`、`+`、`~` 选择器的两边各保留一个空格。

示例：

```css
/* good */
main > nav {
    padding: 10px;
}

label + input {
    margin-left: 5px;
}

input:checked ~ button {
    background-color: #69c;
}

/* bad */
main > nav {
    padding: 10px;
}

label + input {
    margin-left: 5px;
}

input:checked ~ button {
    background-color: #69c;
}
```

==[强制]== 属性选择器中的值必须用双引号包围。

解释：

不允许使用单引号，不允许不使用引号。

示例：

```css
/* good */
article[character='juliet'] {
    voice-family: 'Vivien Leigh', victoria, female;
}

/* bad */
article[character='juliet'] {
    voice-family: 'Vivien Leigh', victoria, female;
}
```

## 2.6 属性

==[强制]== 属性定义必须另起一行。

示例：

```css
/* good */
.selector {
    margin: 0;
    padding: 0;
}

/* bad */
.selector {
    margin: 0;
    padding: 0;
}
```

==[强制]== 属性定义后必须以分号结尾。

示例：

```css
/* good */
.selector {
    margin: 0;
}

/* bad */
.selector {
    margin: 0;
}
```

## 3.1 选择器

==[强制]== 如无必要，不得为 `id`、`class` 选择器添加类型选择器进行限定。

解释：

在性能和维护性上，都有一定的影响。

示例：

```css
/* good */
#error,
.danger-message {
    font-color: #c00;
}

/* bad */
dialog#error,
p.danger-message {
    font-color: #c00;
}
```

[建议] 选择器的嵌套层级应不大于 `3` 级，位置靠后的限定条件应尽可能精确。

示例：

```css
/* good */
#username input {
}
.comment .avatar {
}

/* bad */
.page .header .login #username input {
}
.comment div * {
}

// less
.page {
    .header {
        .login {
            #username {
                input {
                }
            }
        }
    }
}
```

## 3.2 属性缩写

[建议] 在可以使用缩写的情况下，尽量使用属性缩写。

示例：

```css
/* good */
.post {
    font: 12px/1.5 arial, sans-serif;
}

/* bad */
.post {
    font-family: arial, sans-serif;
    font-size: 12px;
    line-height: 1.5;
}
```

[建议] 使用 `border` / `margin` / `padding` 等缩写时，应注意隐含值对实际数值的影响，确实需要设置多个方向的值时才使用缩写。

解释：

`border` / `margin` / `padding` 等缩写会同时设置多个属性的值，容易覆盖不需要覆盖的设定。如某些方向需要继承其他声明的值，则应该分开设置。

示例：

```css
/* good */
.page {
    margin-right: auto;
    margin-left: auto;
}

.featured {
    border-width: 1px;
    border-color: #69c;
}

/* bad */
.page {
    margin: 5px auto;
}

.featured {
    border: 1px solid #69c;
}
```

## 3.3 !important

[建议] 尽量不使用 `!important` 声明。

[建议] 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 `!important` 定义样式。

## 4.1 文本

 ==[强制]== 文本内容必须用双引号包围。

解释：

文本类型的内容可能在选择器、属性值等内容中。

示例：

```css
/* good */
html[lang|='zh'] q:before {
    font-family: 'Microsoft YaHei', sans-serif;
    content: '“';
}

html[lang|='zh'] q:after {
    font-family: 'Microsoft YaHei', sans-serif;
    content: '”';
}

/* bad */
html[lang|='zh'] q:before {
    font-family: 'Microsoft YaHei', sans-serif;
    content: '“';
}

html[lang|='zh'] q:after {
    font-family: 'Microsoft YaHei', sans-serif;
    content: '”';
}
```

## 4.2 数值

==[强制]== 当数值为 0 - 1 之间的小数时，省略整数部分的 `0`。

示例：

```css
/* good */
panel {
    opacity: 0.8;
}

/* bad */
panel {
    opacity: 0.8;
}
```

## 4.3 url()

==[强制]== `url()` 函数中的路径不加引号。

示例：

```css
body {
    background: url(bg.png);
}
```

[建议] `url()` 函数中的绝对路径可省去协议名。

示例：

```css
body {
    background: url(//baidu.com/img/bg.png) no-repeat 0 0;
}
```

## 4.4 长度

==[强制]== 长度为 `0` 时须省略单位。 (也只有长度单位可省)

示例：

```css
/* good */
body {
    padding: 0 5px;
}

/* bad */
body {
    padding: 0px 5px;
}
```

## 4.5 颜色

==[强制]== RGB 颜色值必须使用十六进制记号形式 `#rrggbb`。不允许使用 `rgb()`。

解释：

带有 alpha 的颜色信息可以使用 `rgba()`。使用 `rgba()` 时每个逗号后必须保留一个空格。

示例：

```css
/* good */
.success {
    box-shadow: 0 0 2px rgba(0, 128, 0, 0.3);
    border-color: #008000;
}

/* bad */
.success {
    box-shadow: 0 0 2px rgba(0, 128, 0, 0.3);
    border-color: rgb(0, 128, 0);
}
```

==[强制]== 颜色值可以缩写时，必须使用缩写形式。

示例：

```css
/* good */
.success {
    background-color: #aca;
}

/* bad */
.success {
    background-color: #aaccaa;
}
```

==[强制]== 颜色值不允许使用命名色值。

示例：

```css
/* good */
.success {
    color: #90ee90;
}

/* bad */
.success {
    color: lightgreen;
}
```

[建议] 颜色值中的英文字符采用小写。如不用小写也需要保证同一项目内保持大小写一致。

示例：

```css
/* good */
.success {
    background-color: #aca;
    color: #90ee90;
}

/* good */
.success {
    background-color: #aca;
    color: #90ee90;
}

/* bad */
.success {
    background-color: #aca;
    color: #90ee90;
}
```
