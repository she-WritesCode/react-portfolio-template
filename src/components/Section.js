import React from "react";
import SvgLine from "./SvgLine";
import SectionTitle from "./SectionTitle";

export default function Section({ bgColor, prevBgColor, children, title, subtitle, id, alignTitle }) {
	return (
		<>
			<SvgLine color={`text-${bgColor}`} bgColor={`bg-${prevBgColor}`} />
			<section id={id} className={`mb-6 pt-16 pb-20 bg-${bgColor}`}>
				<div className="container">
					<SectionTitle title={title} subtitle={subtitle} align={alignTitle} />
					{children}
				</div>
			</section>
		</>
	);
}
