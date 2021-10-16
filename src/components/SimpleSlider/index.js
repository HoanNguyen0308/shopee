import React, { Component } from "react";
import Slider from "react-slick";

class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			speed: 1500,
			autoplaySpeed: 2000,
			cssEase: "linear"
		};
		
		return (
			<Slider {...settings} >
				<div>
					<img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
				</div>
				<div>
					<img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
				</div>
				<div>
					<img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
				</div>
				<div>
					<img src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
				</div>
			</Slider>
		);
	}
}

export default SimpleSlider;
