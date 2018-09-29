# ZerodRootContext

在`ZappHOC`中启用了`ZerodRootContext`的上文，通过`ZerodRootContext.setConsumer(组件)`包装的组件，可以使用`this.props`调用以下东西：

目前只有：

## 页面的底部链接：footerLinks

对应`ZappHOC`的 pageConfig.footerLinks

## 页面的底部版权信息：footerCopyright

对应`ZappHOC`的 pageConfig.footerCopyright

## 用于转发后台接口响应体数据的key

对应`ZappHOC`的 pageConfig.responseKeys
