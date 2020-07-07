import * as utility from "../../util/utility";

describe("Unit test for utility function", () => {
	beforeEach(() => {
		// function which will be call before every test
	});

	describe("test sortArray", () => {
		const dataProvider = [
			{
				id: 1,
				name: "name1",
				email: "amail1@gmail.com",
				phone: "+35845645465461",
			},
			{
				id: 2,
				name: "name2",
				email: "bmail2@gmail.com",
				phone: "+35845645465462",
			},
		];

		it("should return array which is sorted by id asc if there isn't parameter ", () => {
			const expected = [
				{
					id: 1,
					name: "name1",
					email: "amail1@gmail.com",
					phone: "+35845645465461",
				},
				{
					id: 2,
					name: "name2",
					email: "bmail2@gmail.com",
					phone: "+35845645465462",
				},
			];
			const actual = dataProvider.sort(utility.sortArray());

			expect(actual).toStrictEqual(expected);
		});

		it("should return array which is sorted by id desc", () => {
			const expected = [
				{
					id: 2,
					name: "name2",
					email: "bmail2@gmail.com",
					phone: "+35845645465462",
				},
				{
					id: 1,
					name: "name1",
					email: "amail1@gmail.com",
					phone: "+35845645465461",
				},
			];
			const actual = dataProvider.sort(utility.sortArray("id", "desc"));

			expect(actual).toStrictEqual(expected);
		});

		it("should return array which is sorted by name desc", () => {
			const expected = [
				{
					id: 2,
					name: "name2",
					email: "bmail2@gmail.com",
					phone: "+35845645465462",
				},
				{
					id: 1,
					name: "name1",
					email: "amail1@gmail.com",
					phone: "+35845645465461",
				},
			];
			const actual = dataProvider.sort(utility.sortArray("name", "desc"));

			expect(actual).toStrictEqual(expected);
		});

		it("should return array which is sorted by phonen umber acs", () => {
			const expected = [
				{
					id: 1,
					name: "name1",
					email: "amail1@gmail.com",
					phone: "+35845645465461",
				},

				{
					id: 2,
					name: "name2",
					email: "bmail2@gmail.com",
					phone: "+35845645465462",
				},
			];
			const actual = dataProvider.sort(utility.sortArray("phone"));

			expect(actual).toStrictEqual(expected);
		});
	});

	afterEach(() => {
		// function which will be call after every test
	});
});
