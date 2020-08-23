import React from "react";
import SvgLine from "./SvgLine";
import ContactForm from "./ContactForm";

export default function Footer() {
	return (
		<>
			<SvgLine bgColor="bg-light-shades-500" color="text-main-brand-color-200" />
			<section id="contact" className="mb-4 pt-16 pb-20 bg-main-brand-color-200">
				<div className="container">
					<div className="text-center mb-4">
						<h3 className="page-title mb-4">Let's Talk</h3>
						<p>If you have a problem that needs a solution.</p>
					</div>
					<div className="grid grid-flow-row lg:grid-cols-2 gap-4">
						<div className="w-full md:col-span-1 mt-4">
							<h3>Find me on social media</h3>
							<p>
								Call: <a href="tel:+2348026910113">+234 8026 910 113</a>
							</p>
							<div className="flex items-baseline justify-start gap-6 list-none mb-4 list-inside">
								<a className="px-1 py-1 rounded-full" href="mail:busolaokemoney@gmail.com">
									<svg className="w-8 h-8 fill-current hover:w-10 hover:h-10" viewBox="0 0 512 512" fill="currentColor">
										<path d="M502.747 74.024H9.253A9.253 9.253 0 000 83.277v345.446c0 4.998 3.965 9.059 8.92 9.236.096.011.205.017.333.017h493.494a9.253 9.253 0 009.253-9.253V83.277a9.253 9.253 0 00-9.253-9.253zM480.409 92.53L256 316.939 31.591 92.53h448.818zm13.085 313.854L373.58 286.47c-3.615-3.614-9.473-3.614-13.086 0-3.614 3.614-3.614 9.473 0 13.085L480.409 419.47H31.591l119.915-119.915c3.614-3.614 3.614-9.473 0-13.085-3.614-3.614-9.473-3.614-13.085 0L18.506 406.385v-300.77l230.951 230.951a9.227 9.227 0 006.542 2.711 9.225 9.225 0 006.544-2.711l230.95-230.95v300.768z" />
									</svg>
								</a>
								<a className="px-1 py-1 rounded-full" href="https://twitter.com/she_writescode">
									<svg className="w-8 h-8 fill-current hover:w-10 hover:h-10" viewBox="0 0 24 24" fill="currentColor">
										<path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
									</svg>
								</a>
								<a className="px-1 py-1 rounded-full" href="https://linkedin.com/in/she-writescode">
									<svg className="w-8 h-8 fill-current hover:w-10 hover:h-10" viewBox="0 0 512 512">
										<g fill="#1976d2">
											<path d="M0 160h114.496v352H0zM426.368 164.128c-1.216-.384-2.368-.8-3.648-1.152-1.536-.352-3.072-.64-4.64-.896-6.08-1.216-12.736-2.08-20.544-2.08-66.752 0-109.088 48.544-123.04 67.296V160H160v352h114.496V320s86.528-120.512 123.04-32v224H512V274.464c0-53.184-36.448-97.504-85.632-110.336z" />
											<circle cx="56" cy="56" r="56" />
										</g>
									</svg>
								</a>
								<a className="px-1 py-1 rounded-full" href="https://github.com/she-writescode">
									<svg viewBox="0 0 16 16" fill="currentColor" className="w-8 h-8 fill-current hover:w-10 hover:h-10">
										<path
											fillRule="evenodd"
											d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
										></path>
									</svg>
								</a>
							</div>
						</div>
						<div className="w-full md:col-span-1 mt-4">
							<p className="text-xl">Or send me a message</p>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>

			<SvgLine bgColor="bg-main-brand-color-200" color="text-dark-shades-900" />
			<footer className="bg-dark-shades-900 text-light-shades-500 text-center pb-2">
				<p className="">
					Made with <i className="fas fa-heart"></i> by <span className="uppercase">shewritescode</span>
				</p>
			</footer>
		</>
	);
}
