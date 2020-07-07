import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import Title from "../../components/Title";

describe("Title", () => {
	it("should render title without error", () => {
		const wrapper = shallow(<Title />);
	});
});
