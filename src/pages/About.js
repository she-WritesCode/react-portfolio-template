import React from "react";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Header from "../components/Header";

import shewritescode from "./../assets/img/shewritescode.jpg";

export default function About() {
	return (
		<>
			<Header title="About Me" subtitle="Allow me to introduce my self">
				<div className="flex mb-6 text-center gap-2 text-md">
					<a href="busola-resume.pdf" className="ml-2 btn btn-primary">
						Download Resume
					</a>
				</div>
			</Header>

			<Section id="about" title="About Me" subtitle="Allow me to introduce myself" alignTitle="center" bgColor="light-shades-500" prevBgColor="main-brand-color-200">
				<div className="flex flex-col md:flex-row flex-wrap">
					<div className="w-full lg:w-4/12 xl:w-5/12 pt-4">
						<div className="grid grid-cols-12 relative">
							<div className="shadow-lg rounded-md bg-dark-shades-300 col-start-1 col-end-10 row-start-1 w-48 md:w-54 h-48 md:h-54"></div>
							<div className="shadow-lg rounded-md w-48 md:w-54 h-48 md:h-54 bg-main-brand-color-300 col-end-12 row-start-1 absolute bottom-0 right-0"></div>
							<img className="col-start-1 rounded col-end-12 col-span-8 block row-start-1 w-full h-auto p-4" src={shewritescode} style={{ zIndex: 1 }} alt="Busola Okeowo" />
						</div>
						<div className="text-center hidden md-block mt-6 lg:hidden">
							<p className="badge bg-main-brand-color-400">I'm currently available for freelance or remote work</p>
						</div>
					</div>
					<div className="w-full lg:w-8/12 xl:w-7/12 mb-6 md:mt-0 pt-6">
						<h3 className="font-bold text-moss-green text-xl">I'm Busola Okeowo, A self-taught web developer</h3>

						<p>Also known as SheWritesCode. I'm currently studying Industrial Mathematics and Computer Science(in my final year) at the University of Lagos, Akoka.</p>

						<p>
							I am very adaptable and learning driven. When there is a problem, I seek ways to fix it. whether its reading a book or picking up a tutorial on a framework I don't know,
							I've grown to embrace the challenges that comes with development
						</p>

						<p>Outside work and school I enjoy ice-cream, movies (very picky), reading, and spending time with family</p>
					</div>
				</div>
				<div className="text-center mt-2 md:hidden lg:block">
					<p className="badge bg-main-brand-color-400">I'm available for freelance or remote work</p>
				</div>
				<div className="flex flex-row flex-wrap lg:flex-row-reverse">
					<div className="w-full lg:w-1/2 py-4">
						<div>
							<SectionTitle title="My Tools" />
							<ul className="list-inside">
								<li>HTML/CSS/JavaScript/PHP</li>
								<li>Node Js</li>
								<li>Vue.js</li>
								<li>React.js</li>
								<li>Laravel</li>
								<li>Wordpress</li>
								<li>Git</li>
							</ul>
						</div>
					</div>
					<div className="w-full lg:w-1/2 py-4">
						<h3 className="page-title mb-4">Interests</h3>
						<div className="flex flex-wrap gap-2 row-gap-2 w-full">
							<div className="my-2 mr-2">
								<div className="card bg-light-shades-500 hover:shadow-inner flex flex-row flex-no-wrap items-center">
									<div className="pr-3">
										<svg
											className="w-10 h-10 text-main-brand-color-500"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
										</svg>
									</div>
									<p className="text-lg font-semibold">Agriculture</p>
								</div>
							</div>
							<div className="my-2 mr-2">
								<div className="card bg-light-shades-500 hover:shadow-inner flex flex-row flex-no-wrap items-center">
									<div className="pr-3">
										<svg
											className="w-10 h-10 text-main-brand-color-500"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
										</svg>
									</div>
									<p className="text-lg font-semibold">Art</p>
								</div>
							</div>
							<div className="my-2 mr-2">
								<div className="card bg-light-shades-500 flex flex-row flex-no-wrap items-center">
									<div className="pr-3">
										<svg
											className="w-10 h-10 text-main-brand-color-500"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
										</svg>
									</div>
									<p className="text-lg font-semibold">design</p>
								</div>
							</div>
							<div className="my-2 mr-2">
								<div className="card bg-light-shades-500 hover:shadow-inner flex flex-row flex-no-wrap items-center">
									<div className="pr-3">
										<svg
											className="w-10 h-10 text-main-brand-color-500"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
										</svg>
									</div>
									<p className="text-lg font-semibold">Environment</p>
								</div>
							</div>
							<div className="my-2 mr-2">
								<div className="card bg-light-shades-500 hover:shadow-inner flex flex-row flex-no-wrap items-center">
									<div className="pr-3">
										<svg
											className="w-10 h-10 text-main-brand-color-500"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
										</svg>
									</div>
									<p className="text-lg font-semibold">Math</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<Section id="portfolio" title="My Work" subtitle="A few solutions I have provided to various needs" alignTitle="center" bgColor="dark-shades-200" prevBgColor="main-light-shades-500">
				Some stuffs
			</Section>

			<Section id="blog" title="Articles I've written" alignTitle="left" bgColor="light-shades-500" prevBgColor="dark-shades-200">
				More stuff
			</Section>

			<Footer />
		</>
	);
}
