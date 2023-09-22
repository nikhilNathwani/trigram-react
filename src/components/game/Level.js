import React, { StrictMode } from "react";
import Target from "./Target";

export default function Level({ startLength }) {
	return (
		<div className="level">
			<Target length={startLength}></Target>
			<Target length={startLength + 1}></Target>
			<Target length={startLength + 2}></Target>
		</div>
	);
}
