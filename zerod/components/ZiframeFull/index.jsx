import React, { useState, useImperativeHandle, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import ZfullLayer from "../ZfullLayer";
import Loading from "../../lazyLoad/Loading";

const ZiframeFull = React.forwardRef((props, ref) => {
	const [states, setState] = useState({
		loading: false,
		iframeUrl: "",
	});
	const methodsRef = useRef();
	useImperativeHandle(ref, () => {
		return {
			openIframe(url) {
				methodsRef.current &&
					methodsRef.current.showLayer(
						true,
						() => {
							setState({
								loading: true,
								iframeUrl: url,
							});
						},
						true,
					)();
			},
		};
	});
	const exportMethods = useCallback(methods => {
		methodsRef.current = methods;
	}, []);
	const { loading, iframeUrl } = states;
	return (
		<ZfullLayer scroll={false} exportMethods={exportMethods}>
			{loading ? <Loading></Loading> : null}
			{iframeUrl ? (
				<div style={{ position: "absolute", top: "10px", left: "10px", bottom: "10px", right: "10px" }}>
					<iframe
						src={iframeUrl}
						frameBorder="0"
						style={{
							width: "100%",
							height: "100%",
							visibility: loading ? "hidden" : "visible"
						}}
						scrolling="auto"
						seamless
						onLoad={() => {
							setState({
								...states,
								loading: false,
							});
						}}
					/>
				</div>
			) : null}
		</ZfullLayer>
	);
});
export default React.memo(ZiframeFull);
