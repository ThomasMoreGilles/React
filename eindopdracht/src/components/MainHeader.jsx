import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
	return (
		<header className="main__header">
			<div className="container main__header-container">
				<div className="main__header-left">
					<h4>Unleash Your Potential with #30DaysOfWorkout</h4>
					<h1>Join the Elite Fitness Community</h1>
					<p>Our 30 days fitness challenge is designed to help you reach your full potential and become the best version of yourself. Whether you're a beginner or a seasoned athlete, our customizable workout plans and expert guidance will help you achieve your fitness goals. Join the elite community of fitness enthusiasts and start your journey today.</p>
					<Link to="/plans" className="btn lg">
						Get Started
					</Link>
				</div>
				<div className="main__header-right">
					<div className="main__header-circle"></div>
					<div className="main__header-image">
						<img src={Image} alt="MainHeaderImage" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
