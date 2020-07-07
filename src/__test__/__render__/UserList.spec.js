import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow } from "enzyme";
import UserList from "../../components/UserList";

describe("UserList render test", () => {
	it("should render the user list form without error, contains 1 add new user form and 16 user", () => {
		const wrapper = shallow(<UserList />);
		expect(wrapper.find("AddUser").length).toEqual(1);
		// 16 came from fake data file
		expect(wrapper.find("User").length).toEqual(16);
	});
});
