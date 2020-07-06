export const sortArray = (property = "id", direction = "asc") => (a, b) =>
	(direction === "asc" ? 1 : -1) *
	(a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0);

export const fetchPreviousStateFromLocalStorage = (...keys) => {
	return {
		...keys.reduce(reduceAddObjectItem, {}),
	};
};

const reduceAddObjectItem = (result, key) => {
	let localStoreKey = localStorage.getItem(key);
	if (localStoreKey !== null) {
		return { ...result, ...{ [key]: localStoreKey } };
	}
};

export const loopObject = (givenObject, givenFunction) => {
	for (const property in givenObject) {
		givenFunction(property, givenObject[property]);
	}
};

export const saveStateToLocalStorage = (givenObject) => {
	loopObject(givenObject, saveDataToLocalStorage);
};

const saveDataToLocalStorage = (key, value) => {
	localStorage.setItem(key, value);
};
