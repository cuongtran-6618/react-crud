const sortArray = (property = "id", direction = "asc") => (a, b) =>
	(direction === "asc" ? 1 : -1) *
	(a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0);

export default sortArray;
