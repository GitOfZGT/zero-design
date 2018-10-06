import React from "react";
import PropTypes from "prop-types";
import Viewer from "viewerjs";
import cssClass from "./style.scss";
import "viewerjs/dist/viewer.css";
import ZbgImage from "../ZbgImage";
import { animateTimout } from "../constant";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export class Zviewer extends React.Component {
	static propTypes = {
		urls: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]),
		className: PropTypes.string,
	};
	static defaultProps = {
		urls: [],
		className: "",
	};
	initViewer = () => {
		if (this.viewer) {
			this.viewer.update();
		} else if (this.props.urls.length) {
			this.viewer = new Viewer(this.imgsEl, {
				transition: false,
				url(img) {
					return img.dataset.url;
				},
				ready() {
					const _container = this.viewer.body ? this.viewer.body.querySelector(".viewer-container") : null;
					if (!_container || _container.querySelector(`.${cssClass["z-next"]}`) !== null) {
						return;
					}
					const _next = document.createElement("div");
					const _prev = document.createElement("div");
					_next.className = cssClass["z-next"];
					_prev.className = cssClass["z-prev"];
					_next.innerHTML = `<i  class="zero-icon zerod-next"/>`;
					_prev.innerHTML = `<i  class="zero-icon zerod-prev"/>`;
					_container.appendChild(_next);
					_container.appendChild(_prev);
					_next.addEventListener(
						"click",
						() => {
							this.viewer.next(true);
						},
						false,
					);
					_prev.addEventListener(
						"click",
						() => {
							this.viewer.prev(true);
						},
						false,
					);
				},
			});
		}
	};
	componentDidMount() {
		this.initViewer();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.urls !== this.props.urls || prevProps.urls.length !== this.props.urls.length) {
			this.initViewer();
		}
	}
	componentWillUnmount() {
		this.viewer&&this.viewer.destroy();
	}
	render() {
		return (
			<ul
				ref={(el) => {
					this.imgsEl = el;
				}}
				className={`${cssClass["z-viewer-ul"]} ${this.props.className}`}
			>
				<TransitionGroup component={null} enter={true} exit={false} appear={true}>
					{this.props.urls.map((item, i) => {
						const thumb = typeof item === "string" ? item : item.thumb ? item.thumb : item.url;
						const url = typeof item === "string" ? item : item.url;
						const alt = typeof item == "string" || !item.alt ? i + 1 : item.alt;
						return (
							<CSSTransition key={i} timeout={animateTimout.flipInTime} classNames="flipY">
								<li key={i}>
									<ZbgImage url={thumb} style={{ height: "100%" }} />
									<img data-url={url} alt={alt} />
								</li>
							</CSSTransition>
						);
					})}
				</TransitionGroup>
			</ul>
		);
	}
}

export default Zviewer;
