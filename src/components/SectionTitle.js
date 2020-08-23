import React from "react";

export default function SectionTitle({ title, subtitle, align }) {
	return (
		<>
			<div className={`text-${align && "left"} ${subtitle && "mb-4"}`}>
				<h3 className="page-title mb-4">{title}</h3>
				{subtitle && <p>{subtitle}</p>}
			</div>
		</>
	);
}
