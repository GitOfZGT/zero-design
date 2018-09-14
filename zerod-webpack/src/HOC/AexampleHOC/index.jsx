// HOC例子
import React from "react";
import PropTypes from "prop-types";

function AexampleHOC(pageConfig) {

	class myDetail extends React.Component {

		render() {
			return (
				<div></div>
			);
		}
	}
	return myDetail;
}

export default {
	name: "AexampleHOC",
	HOC: AexampleHOC,
};
