import React, { StrictMode } from "react";

export default function Target({ length }) {
	return (
		<div className="target">
			<div className="target-length">{length}</div>
			<div className="target-word">abcd</div>
		</div>
	);
}
