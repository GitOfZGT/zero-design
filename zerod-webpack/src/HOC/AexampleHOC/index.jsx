// HOC例子
import React from 'react';
// import PropTypes from "prop-types";

function AexampleHOC() {
    class myDetail extends React.Component {
        render() {
            return <div />;
        }
    }
    return myDetail;
}

export default {
    name: 'AexampleHOC',
    HOC: AexampleHOC,
};
