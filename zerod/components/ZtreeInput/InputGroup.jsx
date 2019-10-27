import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from "react";
import { GenNonDuplicateID } from "../zTool";
import PropTypes from "prop-types";
import InputItem from "./InputItem";

const propsTypes = {
	options: PropTypes.arrayOf(PropTypes.object),
	onSibingsClick: PropTypes.func, //添加兄弟节点事件
};
const defaultProps = {
	options: [],
};
const _InputGroup = React.forwardRef(function InputGroupCom(props, ref) {
	const { options } = props;
	return (
		<section className="z-option-group">
			{options.map((item, i) => {
				return (
					<React.Fragment key={item.id}>
						<InputItem
							key={"item"+item.id}
							data={item}
							length={options.length}
							index={i}
						/>
						{Array.isArray(item.children) && item.children.length ? (
							<InputGroup
								key={"group_" + item.id}
								options={item.children}
							/>
						) : null}
					</React.Fragment>
				);
			})}
		</section>
	);
});
_InputGroup.propsTypes = propsTypes;
_InputGroup.defaultProps = defaultProps;

const InputGroup = _InputGroup;
export default InputGroup;
