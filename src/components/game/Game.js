import React, { StrictMode } from "react";
import Level from "./Level";

const trigram = "CAT";
const shortestWordLength = 4;

export default function Game() {
	return <Level startLength={shortestWordLength}></Level>;
}
