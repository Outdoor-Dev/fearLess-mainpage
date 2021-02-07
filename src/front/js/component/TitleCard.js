import React from "react";
import { Link } from "react-router-dom";
import { Testimonials } from "./Testimonials";

export const TitleCard = () => {
	return (
		<>
			<div className="first-row  d-flex space-between">
				<div className="card d-flex flex-md-row mb-5 text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body  ">
						<h5 className="card-title  mt-5">Arachnophobia</h5>
						<h6 className="card-subtitle mb-2 text-muted ">FEAR OF HEIGHTS</h6>
					</div>
				</div>
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<h5 className="card-title   mt-5">Acrophobia</h5>
						<h6 className="card-subtitle mb-2 text-muted">FEAR OF HEIGHTS</h6>
					</div>
				</div>
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<h5 className="card-title  mt-5 ">Claustrophobia</h5>
						<h6 className="card-subtitle mb-2 text-muted">FEAR OF ENCLOSED SPACES</h6>
					</div>
				</div>
			</div>

			<div className="second-row  d-flex space-between">
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<h5 className="card-title  mt-5">Social phobia</h5>
						<h6 className="card-subtitle mb-2 text-muted">FEAR OF SOCIAL INTERACTION</h6>
					</div>
				</div>
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<h5 className="card-title mt-5"> Cynophobia</h5>
						<h6 className="card-subtitle mb-2 text-muted">FEAR OF DOGS</h6>
					</div>
				</div>
				<div className="card d-flex flex-md-row text-center" style={{ width: 400, height: 200 }}>
					<div className="card-body">
						<h5 className="card-title mt-5">Astraphobia</h5>
						<h6 className="card-subtitle mb-2 text-muted">FEAR OF THUNDER AND LIGHTENING</h6>
					</div>
				</div>
			</div>
			<Testimonials />
		</>
	);
};
