import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">fearLESS</span>
			</Link>
			<div className="d-flex justify-content-end">
				<Link to="/">
					<span className="navbar-brand mr-5 ">HOME</span>
				</Link>
				<Link to="">
					<span className="navbar-brand mr-5">ABOUT</span>
				</Link>
				<Link to="">
					<span className="navbar-brand mr-5">THERAPISTS</span>
				</Link>
				<div className="ml-auto">
					<Link to="">
						<span className="navbar-brand mr-5">LOGIN</span>
					</Link>
					<Link to="">
						<button className="btn btn-primary mr-2">SIGN UP</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
