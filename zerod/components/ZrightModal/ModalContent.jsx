import React from "react";
import Zlayout from "../Zlayout";
export class ModalContent extends React.PureComponent {
	render() {
		return (
			<Zlayout>
				<Zlayout.Zbody
					getWrapperEl={this.props.getWrapperEl}
					scroll={this.props.scroll}
					getScrollInstance={this.props.getScrollInstance}
				>
					{this.props.children}
				</Zlayout.Zbody>
			</Zlayout>
		);
	}
}
export default ModalContent;