<!-- @routePath:/component-doc/ZtimeRange-doc -->

# 时间范围：ZtimeRange

<!-- @import:./demo1.md -->

<!-- @import:./demo2.md -->

<!-- @import:./demo3.md -->

<!-- @import:./demo4.md -->

## ZtimeRange 的 props

可追 `className`、`style`

| 参数            | 说明                                                                                 | 类型                                                  | 默认值     |
| --------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------- | ---------- |
| defaultValue    | ZtimeRange 的默认值,当 value 存在时，defaultValue 无效                               | moment []                                             | []         |
| value           | 指定 ZtimeRange 的选中值                                                             | moment []                                             | --         |
| onChange        | ZtimeRange 的值改变时触发                                                            | function(times: moment[] , timeStrings : string[]) {} | --         |
| format          | 展示的时间格式                                                                       | string                                                | "HH:mm:ss" |
| allowMorrow     | 是否允许次日                                                                         | boolean                                               | true      |
| timePickerProps | [Antd 的 TimePicker 的属性](https://ant.design/components/time-picker-cn/)的其他属性 | object                                                | {}         |