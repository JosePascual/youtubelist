import React, { Component } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import GridOpponents from "./GridOpponents";

test("renders grid opponents", () => {
	const componnet = render(<GridOpponents title="List of opponents" />);
});
