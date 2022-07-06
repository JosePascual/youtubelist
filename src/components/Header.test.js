import React, { Component } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Header from "./Header";

test("renders header", () => {
	const componnet = render(<Header />);
});
