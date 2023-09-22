import React, { StrictMode } from "react";
import Level from "./Level";
import Scoreboard from "./scoreboard/Scoreboard";

const trigram = "CAT";
const shortestWordLength = 4;

export default function Game() {
	return (
		<div className="game">
			<Scoreboard></Scoreboard>
			<Level startLength={shortestWordLength}></Level>
		</div>
	);
}
