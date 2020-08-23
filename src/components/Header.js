import React from "react";

import shapeLightLilacEdge from "./../assets/img/shape-light-lilac-edge.svg";
import shapeLightLilac from "./../assets/img/shape-light-lilac.svg";
import shapeLightLilacOvalEdge from "./../assets/img/shape-light-lilac-oval-edge.svg";

export default function Header({ title, subtitle, children }) {
	return (
		<>
			<header className="hero bg-main-brand-color-200 mb-6 flex flex-col justify-center relative">
				<div className="container">
					<img alt=" " className="shape animate__animated animate__infinite infinite animate__pulse animate__delay-2s light-lilac-edge" src={shapeLightLilacEdge} />
					<img alt=" " className="shape animate__animated animate__infinite infinite animate__pulse animate__delay-3s light-lilac" src={shapeLightLilac} />
					<img alt=" " className="shape animate__animated animate__infinite infinite animate__pulse animate__delay-4s light-lilac-oval-edge" src={shapeLightLilacOvalEdge} />
					<div className="brand">
						<h1 className="text-white">Busola Okeowo</h1>
						<h1 className="stroke">Busola Okeowo</h1>
					</div>
					<section className="">
						<h1 className="hero-title">{title}</h1>
						<p className="text-lg mb-6">{subtitle}</p>
						{children}
					</section>
				</div>
			</header>
		</>
	);
}
