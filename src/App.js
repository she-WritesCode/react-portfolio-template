import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";

function App() {
	return (
		<BrowserRouter>
			<div className="text-gray-700 min-h-full pb-16 md:pb-0 bg-light-shades-500 md:py-0 md:grid md:grid-cols-5">
				<Navbar />
				<ScrollToTopOnMount />
				<div className="overflow-x-hidden content relative right-0 md:block md:col-span-4 md:h-screen">
					<Switch>
						<Route path="/about" component={About} />
						<Route path="/portfolio/:id" component={Portfolio} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
