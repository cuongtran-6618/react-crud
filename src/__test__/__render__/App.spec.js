import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
configure({ adapter: new Adapter() });

import App from "../../App";

describe("App render test", () => {
	it("should render title without error", () => {
		const wrapper = shallow(<App />);
	});

	it("should render main-container, Title and User list", () => {
		const wrapper = shallow(<App />);
		//console.log(wrapper.debug());
		expect(wrapper.find("UserList")).toBeDefined();
		expect(wrapper.find("Title")).toBeDefined();
		expect(wrapper.find(".main-container").length).toEqual(1);
	});
});
