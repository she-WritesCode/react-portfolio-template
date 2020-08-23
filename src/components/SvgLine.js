import React from "react";

function SvgLine({ color, bgColor }) {
	return (
		<section className="svg-line">
			<div className={`relative ${bgColor} -mt-6`}>
				<svg className={`align-bottom h-auto -mb-1 w-full fill-current ${color}`} viewBox="0 0 1505 47" xmlns="http://www.w3.org/2000/svg" width="1366" height="42.65913621262459">
					<path d="M1376 9.83546C756.334 0.0190773 371.629 -6.07515 0 11.8716V47.0003H1505V11.8716C1460.88 11.18 1417.91 10.4992 1376 9.83546Z"></path>
				</svg>
			</div>
		</section>
	);
}

export default SvgLine;
