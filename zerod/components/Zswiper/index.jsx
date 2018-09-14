import React from "react";
import PropTypes from "prop-types";
import Swiper from "swiper/dist/js/swiper";
import "swiper/dist/css/swiper.css";
import "./style.scss";
import ZbgImage from "../ZbgImage";

class Template extends React.Component{
    render(){
        return this.props.children;
    }
}

export class Zswiper extends React.Component {
	static propTypes = {
		imgSrcs: PropTypes.arrayOf(PropTypes.string),
		swiperClick: PropTypes.func,
		swiperOptions: PropTypes.object,
		getSwiperInstance: PropTypes.func,
	};
	static defaultProps = {
		swiperOptions: {},
	};
	swiperElement = null;
	paginationElement = null;
	methods = {
		swiperClick: (url, i) => {
			this.props.swiperClick && this.props.swiperClick(url, i);
		},
	};
	createSwiper() {
		const { pagination, navigation, ...others } = this.props.swiperOptions;
		if (pagination) {
			pagination.el && delete pagination.el;
		}
		if (navigation) {
			navigation.nextEl && delete navigation.nextEl;
			navigation.prevEl && delete navigation.prevEl;
		}
		return new Swiper(this.swiperElement, {
			autoplay: true,
			loop: false,
			// 如果需要分页器
			pagination:
				pagination === false
					? pagination
					: {
							el: this.paginationElement,
							...(pagination ? pagination : {}),
					  },
			// 如果需要前进后退按钮
			navigation:
				navigation === false
					? navigation
					: {
							nextEl: this.nextElement,
							prevEl: this.prevElement,
							...(navigation ? navigation : {}),
					  },
			...others,
		});
	}
	swiperInstance = null;
	componentDidUpdate(prevProps) {
		if (this.props.imgSrcs !== prevProps.imgSrcs) {
			this.swiperInstance && this.swiperInstance.update(true);
		}
	}
	componentDidMount() {
		this.swiperInstance = this.createSwiper();
		this.props.getSwiperInstance && this.props.getSwiperInstance(this.swiperInstance);
	}
	render() {
		const { className, imgSrcs, swiperClick, swiperOptions, getSwiperInstance, ...others } = this.props;
		const imgs = imgSrcs.map((url, i) => {
			return (
				<ZbgImage
					className="swiper-slide"
					key={i}
					url={url}
					onClick={(e) => this.methods.swiperClick(url, i)}
					style={{ height: "100%" }}
				/>
			);
		});
		return (
			<div
				className={`swiper-container ${className ? className : ""}`}
				{...others}
				ref={(el) => (this.swiperElement = el)}
			>
				<div className="swiper-wrapper">{imgs}</div>
				{/* <!-- 如果需要分页器 --> */}
				{swiperOptions.pagination === false ? null : (
					<div className="swiper-pagination" ref={(el) => (this.paginationElement = el)} />
				)}

				{swiperOptions.navigation === false ? null : (
					<Template>
						<div className="swiper-button-prev" ref={(el) => (this.prevElement = el)} />
						<div className="swiper-button-next" ref={(el) => (this.nextElement = el)} />
					</Template>
				)}
			</div>
		);
	}
}

export default Zswiper;
