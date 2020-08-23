import React from "react";

export default function ContactForm() {
	return (
		<>
			<form id="javascript_form" className="contact-form form">
				<div className="form-group">
					<input type="text" className="form-control" name="email" placeholder="Your Email" />
				</div>
				<div className="form-group">
					<input type="text" className="form-control" name="subject" placeholder="Subject" />
				</div>
				<div className="form-group">
					<textarea name="text" className="form-control" rows="5" placeholder="Message - feel free to pour your heart out, I'm listening" spellCheck="false"></textarea>
				</div>
				<div className="form-group col-12 p-0">
					<input type="submit" className="btn w-full" id="js_send" value="Send" />
				</div>
			</form>
		</>
	);
}
