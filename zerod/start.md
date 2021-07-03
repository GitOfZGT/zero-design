<!-- @routePath:/start -->

# Zero-design 简称 zerod

`zerod` 是基于`react v16.8.x + react-router v5.x + antd v3.x`的扩展组件库，兼容主流浏览器及IE11

需要与`zerod-cli`的`zerod-admin-webpack模板`配套编译打包

## 安装

```shell
# 更改registry(已改过可以跳过)
npm config set registry http://172.16.8.10:8081/repository/npm-all
# 安装
npm install zerod@0 -S
# 用cnpm
cnpm config set registry http://172.16.8.10:8081/repository/npm-all
cnpm install zerod@0 -S
```
安装`zerod`会同时安装以下依赖包：

```json
{
    "dependencies": {
        "rc-tween-one": "^2.6.8",
        "zerod-pro": "^0.0.1",
        "zerod-ztool": "^1.2.0",
        "blueimp-md5": "^2.10.0",
        "axios": "^0.18.0",
        "contra": "1.9.4",
        "crossvent": "1.5.4",
        "iscroll": "^5.2.0",
        "js-base64": "^2.5.1",
        "lodash": "^4.17.15",
        "prismjs": "^1.15.0",
        "react-color": "^2.14.1",
        "swiper": "^4.3.5",
        "uuid": "^3.3.2",
        "viewerjs": "^1.2.0",
        "masonry-layout": "^4.2.2",
        "signature_pad": "^3.0.0-beta.3"
    }
}
```
