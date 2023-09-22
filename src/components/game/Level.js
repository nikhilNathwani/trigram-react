import React, { StrictMode } from "react";
import Target from "./Target";

export default function Level({ startLength }) {
	return (
		<React.Fragment>
			<Target length={startLength}></Target>
			<Target length={startLength + 1}></Target>
			<Target length={startLength + 2}></Target>
		</React.Fragment>
	);
}
