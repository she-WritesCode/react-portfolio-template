import React from "react";
import NavLinks from "./NavLinks";

function Navbar() {
	return (
		<>
			<div className="hamburger-menu md:hidden fixed bottom-0 inset-x-0 z-40 shadow-2xl bg-light-shades-500 text-white px-2 py-3">
				<nav className="text-center text-xs flex flex-no-wrap justify-around relative inset-0">
					<NavLinks />
				</nav>
			</div>
			<div className="hidden md:block col-span-1 border-r-2 text-white flex-no-wrap items-center sticky top-0">
				<nav className="text-center text-sm gap-8 flex flex-col content-center justify-center h-full">
					<NavLinks />
				</nav>
			</div>
		</>
	);
}
export default Navbar;
