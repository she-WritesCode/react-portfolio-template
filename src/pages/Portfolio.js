import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Masonry from "react-masonry-component";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const masonryOptions = {
	transitionDuration: 0,
};

export default function Portfolio() {
	const { id } = useParams();

	const [work, setWork] = useState({});

	useEffect(() => {
		const works = require("./../data.json");
		setWork(works.find((item) => item.id === Number(id)));
	}, [id]);

	const { title, company, type, description, tools, images } = work;

	return title && company && type && description && tools && images ? (
		<>
			<Header title={title} subtitle={company}>
				<div className="flex mb-6 text-center gap-2 text-md">Maybe a breadcrumb</div>
			</Header>

			<Section title="About the Project" bgColor="light-shades-500" prevBgColor="main-brand-color-200">
				{description}
				<p>{type} project</p>
			</Section>

			<Section title="Technologies used" bgColor="dark-shades-200" prevBgColor="main-light-shades-500">
				{tools}
			</Section>

			<Section title="Gallery" alignTitle="left" bgColor="light-shades-500" prevBgColor="dark-shades-200">
				<Masonry
					className={"gallery"} // default ''
					options={masonryOptions} // default {}
				>
					{images.map((item, i) => (
						<img key={i} src={item} alt="" />
					))}
				</Masonry>
			</Section>

			<Footer />
		</>
	) : (
		<>
			<Header title={<div className="badge bg-dark-accent-500 opacity-50 h-8 w-full"></div>} subtitle={<span className="badge bg-dark-accent-500 opacity-50 h-8 w-full"></span>}></Header>

			<Section bgColor="light-shades-500" prevBgColor="main-brand-color-200">
				<div className="badge bg-dark-accent-500 opacity-50 h-24 w-full"></div>
			</Section>
		</>
	);
}
