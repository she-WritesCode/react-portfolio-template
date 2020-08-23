import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioCard({ id, title, company, summary, images, type }) {
	return (
		<>
			<div className={`portfolio-item ${type} grid grid-cols-5 gap-6 relative my-6`}>
				<div className="col-span-5 h-64 md:h-full md:col-span-2 relative block">
					<img className="object-cover object-center absolute inset-0 h-full w-full" src={images[0]} alt={`${company}'s website`} />
				</div>
				<div className="col-span-5 md:col-span-3">
					<div className="uppercase text-sm tracking-wide my-2">{company}</div>
					<h3 className="">{title}</h3>
					<p>{summary}</p>
					<Link to={`portfolio/${id}`}>
						<div href=" " className="mt-4 btn btn-outline-secondary">
							See the solution I provided. <i className="fas fa-arrow-right"></i>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
