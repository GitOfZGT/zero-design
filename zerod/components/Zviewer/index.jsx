import React from "react";
import ZpureComponent from "../ZpureComponent";
import PropTypes from "prop-types";
import Viewer from "viewerjs";
import "./style.scss";
import "viewerjs/dist/viewer.css";
import ZbgImage from "../ZbgImage";
import { animateTimout } from "../constant";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import debounce from "lodash/debounce";
export class Zviewer extends ZpureComponent {
	static propTypes = {
		urls: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.object)]),
		className: PropTypes.string,
		showThumbAlt: PropTypes.bool,
	};
	static defaultProps = {
		urls: [],
		className: "",
		showThumbAlt: true,
	};
	initViewer = debounce(
		function() {
			if (this.viewer) {
				this.viewer.update();
			} else if (this.props.urls.length) {
				this.viewer = new Viewer(this.imgsEl, {
					transition: false,
					url(img) {
						return img.dataset.url;
					},
					ready: () => {
						const _container = this.viewer.viewer ? this.viewer.viewer : null;
						if (!_container || _container.querySelector(`.z-next`) !== null) {
							return;
						}
						const _next = document.createElement("div");
						const _prev = document.createElement("div");
						_next.className = "z-next";
						_prev.className = "z-prev";
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
			console.log(this.viewer, this.props.urls);
		}.bind(this),
		60,
	);
	componentDidMount() {
		this.initViewer();
	}
	componentDidUpdate(prevProps) {
		if (prevProps.urls !== this.props.urls || prevProps.urls.length !== this.props.urls.length) {
			this.initViewer();
		}
	}
	componentWillUnmount() {
		this.viewer && this.viewer.destroy();
	}
	render() {
		const { showThumbAlt } = this.props;
		return (
			<ul
				ref={el => {
					this.imgsEl = el;
				}}
				className={`z-viewer-ul ${this.props.className}`}
			>
				<TransitionGroup component={null} enter={true} exit={false} appear={true}>
					{this.props.urls.map((item, i) => {
						const thumb = typeof item === "string" ? item : item.thumb ? item.thumb : item.url;
						const url = typeof item === "string" ? item : item.url;
						const alt = typeof item == "string" || !item.alt ? i + 1 : item.alt;
						return (
							<CSSTransition
								key={i}
								timeout={animateTimout.flipInTime}
								classNames="flipY"
								onEntered={this.initViewer}
								onExited={this.initViewer}
							>
								<li key={i}>
									{showThumbAlt ? (
										<div className="z-viewer-thumb">
											<ZbgImage url={thumb} style={{ height: "100%" }} />
										</div>
									) : (
										<ZbgImage url={thumb} style={{ height: "100%" }} />
									)}
									{showThumbAlt ? <div className="z-viewer-alt">{alt}</div> : null}
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
