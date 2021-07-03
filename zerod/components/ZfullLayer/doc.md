<!-- @routePath:/component-doc/ZfullLayer-doc -->

# 浮层窗口：ZfullLayer

`ZfullLayer` 是一个背景黑色半透的覆盖在整个文档之上的窗口组件，分 header 和 children 两个内容区域

1、基本使用

<div class="z-demo-box" data-render="demo1" data-title=""></div>

```jsx
/**
 * @renderMode: inline
 * @componentName: Demo1
 * @title: 基本使用
 * @description: 简单配置
 *
 */
import React from 'react';
import { Button } from 'antd';
import ZfullLayer from 'zerod/components/ZfullLayer';
import ZerodLayerContext from 'zerod/components/ZerodLayerContext';
class Contents extends React.PureComponent {
    openRightModal = () => {
        //打开RightModal
        this.props.showLayerRightModal({
            show: true,
            modal: 'abc',
            content: (
                <div className="z-panel">
                    <div className="z-panel-body">内容</div>
                </div>
            ),
            width: '300px',
            mask: true,
            onTransitionend: () => {
                //显示/隐藏modal的loading
                this.props.showLayerModalLoading(true, 'abc');
                setTimeout(() => {
                    this.props.showLayerModalLoading(false, 'abc');
                }, 2000);
            },
        });
    };
    render() {
        return (
            <div className="z-panel" style={{ width: '90%', margin: '0 auto' }}>
                <div className="z-panel-heading">面板标题</div>
                <div className="z-panel-body">
                    <Button type="primary" onClick={this.openRightModal}>
                        打开RightModal
                    </Button>
                </div>
            </div>
        );
    }
}
Contents = ZerodLayerContext.setConsumer(Contents);

class Header extends React.PureComponent {
    render() {
        return (
            <div className="z-padding-left-20 z-flex-items-center" style={{ height: '100%' }}>
                <div>
                    <Button type="primary">按钮</Button>
                </div>
            </div>
        );
    }
}
class Myjavascript extends React.PureComponent {
	state={
		type:'normal'
	}
    methods = {
        open: () => {
            const amplify = this.ZfullLayerMethods.showLayer(
                true,
                () => {
                    console.log('open');
                },
                true, //是否先缩放
            );
            //再放大效果
            amplify();
        },
    };
    exportMethods = (m) => {
        this.ZfullLayerMethods = m;
    };
    render() {
        return (
            <div>
                <div className="z-panel">
                    <div className="z-panel-body">
                        <Button type="primary" onClick={()=>{
							this.setState({
								type:"normal"
							});
							this.methods.open()
						}}>
                            normal
                        </Button>
                        <Button style={{marginLeft:'20px'}} type="primary" onClick={()=>{
							this.setState({
								type:"dark"
							});
							this.methods.open()
						}}>
                            dark
                        </Button>
                    </div>
                </div>
                <ZfullLayer type={this.state.type} header={<Header />} exportMethods={this.exportMethods}>
                    <Contents />
                </ZfullLayer>
            </div>
        );
    }
}
export default Myjavascript;
```

## ZfullLayer 的 props

| 参数          | 说明                                                            | 类型                | 默认值 |
| ------------- | --------------------------------------------------------------- | ------------------- | ------ |
| header        | 头部区域内容，高度有 64px                                       | ReactNode           | --     |
| children      | 主体区域内容                                                    | ReactNode           | --     |
| exportMethods | 在 componentDidMount 导出组件内部可调用的方法，methods 请往下看 | function(methods){} | --     |
| scroll        | 主体区域内容是否需要滚动条                                      | boolean             | true   |
| type          | 主题                                                            | normal \| dark      | dark   |

注： header 和 children 两个内容区域通信，请使用 `React.createRef()`

## methods 同 ZerodLayerContext 提供的内容如： methods.showLayer(true,null,true)();

`ZfullLayer`内部子孙组件经过`import ZerodLayerContext from "zerod/components/ZerodLayerContext"`的 `ZerodLayerContext.setConsumer(子孙组件)`包装后，`props`提供如下内容：

| 方法                        | 说明                                                                                                                                                                                            | 使用                               | 返回值类型 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------- |
| showLayer                   | 显示/隐藏 ZfullLayer 的方法,当 isScale 为 true 时返回一个函数，调用这个函数主体内容会有一个放大的过渡动画                                                                                       | showLayer(show,callback,isScale)   | --         |
| showLoading                 | 显示/隐藏 ZfullLayer 内部的 loading                                                                                                                                                             | showLoading(show)                  | --         |
| showLayerRightModal         | 在 ZfullLayer 中打开有抽屉窗口，参数同 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">上下文/ZerodMainContent 的 showRightModal</span>                         | showLayerRightModal({})            | --         |
| showLayerModalLoading       | 在 ZfullLayer 中显示对应窗口的 loading，同 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">上下文/ZerodMainContent 的 showModalLoading</span>                   | showLayerModalLoading(show,modal)  | --         |
| getLayerModalScrollInstance | 在 ZfullLayer 中获取对应窗口的滚动条的实例，同 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">上下文/ZerodMainContent 的 getScrollInstance</span>              | getLayerModalScrollInstance(modal) | object     |
| getLayerScrollAreaWrapperEl | 在 ZfullLayer 中获取对应窗口的滚动条区域的包裹元素，同 <span class="z-history-href" data-path="/main/context-doc/ZerodMainContext-doc">上下文/ZerodMainContent 的 getScrollAreaWrapperEl</span> | getLayerScrollAreaWrapperEl(modal) | Elment     |
